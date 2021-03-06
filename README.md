# Notes

## Successfully uploaded React app

- [Example in Composer](https://composer.gutools.co.uk/content/595c499fe4b0ad5bfe34fedd#)
- [thiagodebastos/interactive-quiz](https://github.com/thiagodebastos/interactive-quiz) - specifically [commit 436bfd8](https://github.com/thiagodebastos/interactive-quiz/commit/436bfd8595324c4ea4aca0ddc3a73d21499096b8)

---

### Main Takeaways

#### Composer needs

A `main.css` (empty file) and `main.html` instead of `index.html`.

#### `main.js`

Generates a script tag pointing to webpack's `main.js`
> for now content hashing has been disabled to simplify the generation of this script tag without knowing a hashed js file's name.

#### `scripts/createEnv.js`

Generates a dotenv file populated with variables to be shared across build process.
The main reason being that `Date.now()` neeeded to be created once, which is what is used in S3 for versioning builds.

#### `config/paths.js`

Modify `getServedPath()` to set served url as `process.env.REACT_APP_PATH`, which takes the app path generated by `createEnv.js`. This will look like:
`REACT_APP_PATH=https://interactive.guim.co.uk/atoms/2017/07/test-quiz-01/v/1499256752740`

#### `webpack.config.prod.js`

A few modifications need to be made to cater for The Guardian CMS:

- add `filename: 'main.html'` to `HtmlWebpackPlugin` options.
- for now, disable hashing of js files. This is done by removing `[chunkhash:8]` from the `filename` property in `output` until I find a way to get webpack's `chunkhash` into `main.js`.

---

## Misc

using `history` to send browser history actions

```js
  import createBrowserHistory from 'history/createBrowserHistory';
  const history = createBrowserHistory();
  history.push('/callback');
```

`react-router` with `redux` examples and discussions:

- [ReactTraining](https://github.com/ReactTraining/react-router/blob/7f6706dab4827afc1c26a58418f8ef8c8ab40125/website/examples/Redux.js)

- [Reddit discussion around `react-router@>4`](https://www.reddit.com/r/reactjs/comments/6et6e5/react_router_v4/)
