/*
    This file creates a .env file, populated with variables to be shared across build process.
    The main reason being that `Date.now()` neeeded to be created once, which is what is used
    in S3 for versioning builds.
  */

const fs = require('fs');
const config = require('../config.json');

const buildDir = '../build';
const cdnUrl = 'https://interactive.guim.co.uk';

const version = `v/${Date.now()}`;
const s3Path = `atoms/${config.path}`;
const s3VersionPath = `${s3Path}/${version}`;
const path = `${cdnUrl}/${s3VersionPath}`;

const pathVars = `
REACT_APP_TITLE="${config.title}"
REACT_APP_VERSION=${version}
REACT_APP_S3PATH=atoms/${config.path}
REACT_APP_S3VERSIONPATH=${s3Path}/${version}
REACT_APP_PATH=${cdnUrl}/${s3VersionPath}
`;

fs.writeFile('.env', pathVars, err => {
  if (err) throw err;
  console.log('.env file created');
});
