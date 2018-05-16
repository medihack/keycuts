const path = require('path')

module.exports = {
  entry: {
    keycuts: './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    library: '[name]',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
}
