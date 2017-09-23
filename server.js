const path = require('path');
const express = require('express');
const morgan = require('morgan');
const compression = require('compression');
const helmet = require('helmet');
const hpp = require('hpp');
const WebpackIsomorphicTools = require('webpack-isomorphic-tools');

const isDev = process.env.NODE_ENV !== 'production';
const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 8080;
const app = express();

app.use(helmet()); // Using helmet to secure Express with various HTTP headers
app.use(hpp()); // Prevent HTTP parameter pollution
app.use(compression()); // Compress all requests
app.use(morgan('dev', { skip: (req, res) => res.statusCode < 400 }));

if (isDev) {
  const webpack = require('webpack');
  const webpackconfig = require('./webpack.config.js');
  // const webpackMiddleware = require('webpack-dev-middleware');
  // app.use(webpackMiddleware(webpack(webpackconfig)));
  app.use(require('webpack-dev-middleware')(webpack(webpackconfig), {
    publicPath: webpackconfig.output.publicPath,
    hot: true,
    noInfo: true,
    stats: 'errors-only',
  }));
  app.use(require('webpack-hot-middleware')(webpack(webpackconfig)));
} else {
  app.use(express.static('dist'));
  app.get('*', (req, res) => {
    if (isDev) {
      new WebpackIsomorphicTools(require('./WIT.config'))
      .server(require('path').join(process.cwd()), () => {
        if (isDev) {
          require('./server.js');
        }
      })
      .refresh();
    }
    res.sendFile(path.join(__dirname, 'dist/index.html'));
  });
}

if (port) {
  app.listen(port, host, (err) => {
    if (err) console.log(err);
    console.info(`==> 🌎 Listening on http://${host}:${port}`);
  });
} else {
  console.info('==> 😭  OMG!!! No PORT environment variable has been specified');
}
