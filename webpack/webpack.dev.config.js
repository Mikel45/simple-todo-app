var webpack = require('webpack');
var path = require('path');

var mainDir = path.join(__dirname, '../');

module.exports = {
  entry: [
    path.join(mainDir, 'index.js')
  ],
  module: {
    loaders: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }, {
      test: /\.less$/,
      loaders: ["style-loader", "css-loader", "less-loader"]
    }]
  },
  output: {
    path: mainDir + '/dist',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: mainDir,
    historyApiFallback: true
  }
}