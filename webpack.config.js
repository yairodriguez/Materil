/**
 * Init the webpack itself, and require some webpack plugins.
 */
const webpack           = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path              = require('path');

/**
 * PostCSS support.
 */
const postcssImport     = require('postcss-easy-import');
const precss            = require('precss');
const autoprefixer      = require('autoprefixer');

/**
 * APP path is used to specify the app entry point, location of the root
 * component.
 * BUILD path specifies the target folder where production compiled app
 * files will be pushed.
 * STYLE path indicates the root CSS file that imports other styles.
 * PUBLIC path is a folder in development that is copied as–is to root of
 * BUILD, used for storing web server root files like robots.txt and
 * favicon.ico, among others.
 * TEMPLATE specifies the template used by html-webpack-plugin to generate
 * the index.html file.
 * NODE_MODULES path is required when including assets directly from
 * installed npm packages.
 */
const APP               = path.join(__dirname, 'app');
const BUILD             = path.join(__dirname, 'build');
const STYLE             = path.join(__dirname, 'app/style.css');
const PUBLIC            = path.join(__dirname, 'app/public');
const TEMPLATE          = path.join(__dirname, 'app/templates/index.html');
const NODE_MODULES      = path.join(__dirname, 'node_modules');
const HOST              = process.env.HOST || 'localhost';
const PORT              = process.env.PORT || 8080;

/**
 * Defines the app entry, build output, and the extensions which will resolve
 * automatically.
 */
module.exports = {
  entry: {
    app: APP,
    style: STYLE
  },
  output: {
    path: BUILD,
    filename: '[name].js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.css']
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['babel?cacheDirectory'],
      include: APP
    },
    {
      test: /\.css$/,
      loaders: ['style', 'css', 'postcss'],
      include: [APP, NODE_MODULES]
    },
    {
      test: /\.json$/,
      loader: 'json',
      include: [APP, NODE_MODULES]
    }]
  }
}
