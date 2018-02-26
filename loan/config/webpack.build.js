const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const buildConfig = merge(baseWebpackConfig,{
  devtool: '#source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname,'../index.html'),
      title: '车贷贷前系统',
      reject: true,
      filename: 'index.html'
    }),
    new ExtractTextPlugin({
      filename: path.resolve(__dirname,'../build/static/css'),
      allChunks: false
    }),
    new webpack.optimize.CommonsChunkPlugin(
      {
        name: 'vendor',
        minChunks: function (module) {
          return module.resource && /\.js$/.test(module.resource) &&
            module.resource.indexOf(
              path.join(__dirname, '../node_modules')
            ) === 0
        }
      }
    ),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      minChunks: Infinity
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'iframe',
      async: 'vendor-async',
      children: true,
      minChunks: 3
    }),
  ]
});

module.exports = buildConfig;