var path = require('path')
var WebpackNotifierPlugin = require('webpack-notifier')

module.exports = {
  context: path.join(__dirname, 'js-src'),
  entry: './startup.tsx',
  output: {
    path: path.join(__dirname, 'js-built'),
    filename: 'main.js'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
    ]
  },
  plugins: [
    new WebpackNotifierPlugin()
  ],
}