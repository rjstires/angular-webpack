const webpack = require('webpack');
const path = require('path');
const pkg = require('./package.json');
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
};

module.exports = config;
