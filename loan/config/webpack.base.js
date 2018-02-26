const webpack = require('webpack');
const path = require('path');
module.exports = {
  entry: ['whatwg-fetch',path.resolve(__dirname, '../src/main')],
  output: {
    path: path.resolve(__dirname, '../build/static'),
    filename: '[name].js',
    publicPath: './'
  },
  module: {
    rules: [
      {test: /\.js|\.jsx$/,use: {loader: 'babel-loader',options: {
        plugins: [
          ["import", { "libraryName": "antd", "libraryDirectory": "es", "style": "css" }]
        ]
      }}},
      {test: /\.css$/,use: ['style-loader','css-loader']},
      {test: /\.sass|\.scss$/,use: ['style-loader','css-loader','sass-loader']},
      {
        test: /\.(eot|woff|svg|ttf|woff2|gif|appcache|mp3)(\?|$)/,
        exclude: /node_modules/,
        use: 'file-loader?name=[name].[ext]',
      },
      {
        test: /\.(png|jpg|gif)$/,
        exclude: /node_modules/,
        use: 'url-loader?limit=8192&name=images/[hash:8].[name].[ext]',
      }

    ]
  },
  resolve: {
    extensions: ['.js','.jsx']
  }
};