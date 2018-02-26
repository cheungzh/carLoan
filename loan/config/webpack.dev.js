const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');
const baseWebpackConfig = require('./webpack.base');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let devConfig = merge(baseWebpackConfig,{
  devtool: 'eval-source-map',
  output: {
    path: path.resolve(__dirname,'../'),
    publicPath: '/',
    filename: 'index.js'
  },
  devServer: {
    hot: true,
    historyApiFallback: true,
    port: 8000,
    host: 'localhost',
    proxy: {
      '/api': {
        // target: 'http://10.10.13.17/'
        target: 'http://10.10.16.221:3000/',
        pathRewrite: {'^/api' : ''}
        // target: 'http://localhost:3000/api'
      },

    },
    open: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    // new webpack.DefinePlugin({
    //   'process.env': require('../config/dev.env')
    // }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname,'../index.html'),
      title: '车贷贷前系统',
      filename: 'index.html',
      inject: true
    })
  ]
});

module.exports = devConfig;