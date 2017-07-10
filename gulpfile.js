require('dotenv').config();
const config = require('./config.json');
const gulp = require('gulp');
const file = require('gulp-file');
const s3 = require('gulp-s3-upload');
const gutil = require('gulp-util');
const inquirer = require('inquirer');
const rp = require('request-promise-native');
const runSequence = require('run-sequence');

const buildDir = './build';
const cdnUrl = 'https://interactive.guim.co.uk';

const version = process.env.REACT_APP_VERSION;
const s3Path = process.env.REACT_APP_S3PATH;
const s3VersionPath = process.env.REACT_APP_S3VERSIONPATH;
const path = process.env.REACT_APP_PATH;

const mainJS = `
(function() {
  var el = document.createElement("script");
  el.src = "${path}/static/js/main.js";
  document.body.appendChild(el);
})();`;

gulp.task('mainJS', () => {
  file('main.js', mainJS).pipe(gulp.dest('./build'));
});

gulp.task('mainCSS', () => {
  file('main.css', '').pipe(gulp.dest('./build'));
});

gulp.task('files', () => {
  runSequence(['mainJS', 'mainCSS']);
});

function s3Upload(cacheControl, keyPrefix) {
  return s3()({
    Bucket: 'gdn-cdn',
    ACL: 'public-read',
    CacheControl: cacheControl,
    keyTransform: fn => `${keyPrefix}/${fn}`
  });
}

gulp.task('deploy', ['files'], cb => {
  if (s3Path === 'atoms/2016/05/blah') {
    console.error(
      'ERROR: You need to change the deploy path from its default value'
    );
    return;
  }

  inquirer
    .prompt({
      type: 'list',
      name: 'env',
      message: 'Where would you like to deploy to?',
      choices: ['preview', 'live']
    })
    .then(res => {
      const isLive = res.env === 'live';
      gulp
        .src(`${buildDir}/**/*`)
        .pipe(s3Upload('max-age=31536000', s3VersionPath))
        .on('end', () => {
          gulp
            .src('config.json')
            .pipe(file('preview', version))
            .pipe(isLive ? file('live', version) : gutil.noop())
            .pipe(s3Upload('max-age=30', s3Path))
            .on('end', cb);
        });
    });
});

gulp.task('deploylive', ['files'], cb => {
  if (s3Path === 'atoms/2016/05/blah') {
    console.error(
      'ERROR: You need to change the deploy path from its default value'
    );
    return;
  }

  gulp
    .src(`${buildDir}/**/*`)
    .pipe(s3Upload('max-age=31536000', s3VersionPath))
    .on('end', () => {
      gulp
        .src('config.json')
        .pipe(file('preview', version))
        .pipe(file('live', version))
        .pipe(s3Upload('max-age=30', s3Path))
        .on('end', cb);
    });
});

gulp.task('url', () => {
  gutil.log(
    gutil.colors.green(
      `Atom URL: https://content.guardianapis.com/atom/interactive/interactives/${config.path}`
    )
  );
});

gulp.task('log', () => {
  function log(type) {
    const url = `${cdnUrl}/atoms/${config.path}/${type}.log?${Date.now()}`;
    return rp(url)
      .then(log => {
        gutil.log(gutil.colors.green(`Got ${type} log:`));
        console.log(log);
      })
      .catch(err => {
        if (err.statusCode === 404) {
          gutil.log(
            gutil.colors.yellow(`No ${type} log, have you ever deployed?`)
          );
        } else {
          throw err;
        }
      });
  }

  return Promise.all([log('live'), log('preview')]);
});
