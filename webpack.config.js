var path = require('path')
var WebpackNotifierPlugin = require('webpack-notifier')

module.exports = {
  context: path.join(__dirname, 'js-compiled'),
  entry: './startup.js',
  output: {
    path: path.join(__dirname, 'js-built'),
    filename: '[name].js'
  },
  plugins: [
    new WebpackNotifierPlugin()
  ],
}