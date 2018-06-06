const path = require('path')

module.exports = {
  entry: './index.js',
  output: {
    path: path.join(__dirname, '/public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    publicPath: '/',
    contentBase: './public',
    compress: true,
    hot: true
  },
  devtool: 'source-map'
}
