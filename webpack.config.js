const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const nodeEnv = process.env.NODE_ENV || 'development';
const isDev = nodeEnv !== 'production';
const WebpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin');
const webpackIsomorphicToolsPlugin = new WebpackIsomorphicToolsPlugin(require('./WIT.config')).development(isDev);

const VENDORS = [
  'lodash',
  'react',
  'react-dom',
  'react-redux',
  'react-router',
  'redux',
  'redux-thunk',
];

module.exports = {
  entry: {
    app: './src/index.js',
    vendor: VENDORS,
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: isDev ? '[name].js' : '[name].[hash].js',
    publicPath: '/',
  },
  plugins: isDev ? [
    webpackIsomorphicToolsPlugin,
    new webpack.HotModuleReplacementPlugin(), // only for dev env
    new ExtractTextPlugin('[name].[chunkhash].css'),
    new HtmlWebpackPlugin({ template: 'src/index.html' }),
  ] : [
    webpackIsomorphicToolsPlugin,
    new webpack.optimize.CommonsChunkPlugin({ names: ['vendor', 'manifest'], minChunks: Infinity }),
    new ExtractTextPlugin('[name].[chunkhash].css'),
    new HtmlWebpackPlugin({ template: 'src/index.html' }),
    new webpack.optimize.UglifyJsPlugin({ // only for production env
      compressor: {
        warnings: false,
        screw_ie8: true,
      },
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader', 'eslint-loader'], // loader for using js with RegEx against all js files
        exclude: /node_modules/,
      }, {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({ loader: 'css-loader', options: { minimize: true } }),
      }, {
        test: webpackIsomorphicToolsPlugin.regular_expression('images'),
        use: [
          {
            loader: 'url-loader',
            options: { limit: 40000 },
          },
          'image-webpack-loader',
        ],
      },
    ],
  },
};
