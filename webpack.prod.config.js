const merge = require('webpack-merge')

const baseConfig = require('./webpack.base.config.js')

const prodConfig = {
  mode: 'production',
  output: {
    filename: '[name].min.js',
  },
}

module.exports = merge(baseConfig, prodConfig)
