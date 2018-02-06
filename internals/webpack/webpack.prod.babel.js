const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = require('./webpack.base.babel')({
  plugins: [
    new UglifyJSPlugin({
      sourceMap: true
    })
  ]
})
