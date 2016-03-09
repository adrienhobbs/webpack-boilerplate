/*eslint-disable */

var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var argv = require('yargs').argv;
var env = argv.env || 'dev';
var fs = require('fs');
var use = require('postcss-use');

function getHtml () {
  return fs.readFileSync('./src/templates/template.html', {encoding: 'utf8'});
}

var config = {
  entry: './src/main.js',
  target: 'web',
  output: {
    path:  '../../keepmyhbo',
    filename: 'bundle.js'
  },
  devtool: (env === 'dev') ? 'source-map' : false,
  cache: (env === 'dev'),
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new HtmlWebpackPlugin({
      templateContent: function () {
        return getHtml();
      },
      inject: 'body',
      filename: 'index.html',
      title: 'Jade demo'
    })
  ],
  module: {
    loaders: [
      {
        test: /\.scss$/, 
        loaders: [
          'style-loader',
          'css-loader',
          'autoprefixer?browsers=last 2 version',
          'postcss',
          'sass-loader'
        ]
      },

      {
        test    : /\.(js|jsx)$/,
        exclude : /node_modules/,
        loader  : 'babel',
        query: {
          cacheDirectory: true,
          plugins: ['transform-runtime'],
          presets: ['es2015', 'stage-0'],
        }
      },
      { test: /\.jade$/, loader: 'jade' },
      { test: /\.woff(\?.*)?$/,  loader: 'url-loader?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/font-woff' },
      { test: /\.ttf(\?.*)?$/,   loader: 'url-loader?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/octet-stream' },
      { test: /\.eot(\?.*)?$/,   loader: 'file-loader?prefix=fonts/&name=[path][name].[ext]' },
      { test: /\.svg(\?.*)?$/,   loader: 'url-loader?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=image/svg+xml'},
      { test: /\.(png|jpg)$/,    loader: 'url-loader?limit=8192' }
    ]
  },
  sassLoader: {
    includePaths: [path.resolve(__dirname + '/styles')]
  }
};

config.postcss = [require('postcss-center'), require('postcss-cssnext')(), use({modules: ['lost']})];

if (env === 'prod') {
  config.plugins.push(new ExtractTextPlugin('style.css'));
  //config.plugins.push(new webpack.optimize.UglifyJsPlugin({compress: {'unused': true, 'dead_code': true}}));
  config.module.loaders[0].loader = ExtractTextPlugin.extract('style-loader','css-loader!sass-loader');
}

module.exports = config;
