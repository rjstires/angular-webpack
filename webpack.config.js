const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const pkg = require('./package.json');
const indexOptions = require('./index-options');
const config = {
  entry: {
    app: './client/src/main.js',
    vendor: Object.keys(pkg.dependencies),
  },
  output: {
    path: path.join(__dirname, '/dist/assets'),
    filename: '[name].bundle.js',
    publicPath: '/assets/',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: './client/src',
      },
    ],
  },
  resolve: {
    extensions: ['', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin(indexOptions),
  ],
};

module.exports = config;
