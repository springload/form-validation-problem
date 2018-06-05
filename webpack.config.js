// const path = require('path')

module.exports = {
  entry: './index.js',
  output: 'bundle.js',
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    compress: true,
    hot: true
  },
  devtool: 'source-map'
}
