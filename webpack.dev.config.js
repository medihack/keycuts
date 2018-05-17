/* eslint-env node */

const merge = require('webpack-merge')

const baseConfig = require('./webpack.base.config.js')

const devConfig = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './demo',
    publicPath: '/dist/'
  },
  output: {
    filename: '[name].js'
  }
}

module.exports = merge(baseConfig, devConfig)
