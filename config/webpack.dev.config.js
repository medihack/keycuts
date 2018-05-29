/* eslint-env node */

const path = require('path')
const merge = require('webpack-merge')

const baseConfig = require('./webpack.base.config.js')

const devConfig = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, '../docs/demo'),
    publicPath: '/dist/'
  },
  output: {
    filename: '[name].js'
  }
}

module.exports = merge(baseConfig, devConfig)
