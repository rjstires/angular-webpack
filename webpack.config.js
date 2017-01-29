const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

const config = {
  entry: {
    app: './client/src/main.js',
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
        loader: 'ng-annotate!babel-loader',
        include: './client/src',
      },
      {
          test: /\.less$/,
          loader: ExtractTextPlugin.extract(
              'style-loader',
              'css-loader!less-loader'),
      },
      {
          test: /\.html$/,
          loader: 'raw-loader',
        },
    ],
  },
  resolve: {
    extensions: ['', '.js'],
  },

  plugins: [
    new HtmlWebpackPlugin({
        inject: 'body',
        template: 'client/src/index.template.html',
        filename: '../index.html',
    }),
    new ExtractTextPlugin('main.css'),
  ],
};

module.exports = config;
