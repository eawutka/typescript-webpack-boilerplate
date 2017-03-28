var path = require('path')
var WebpackNotifierPlugin = require('webpack-notifier')

module.exports = {
    context: path.join(__dirname, 'js-compiled'),
    entry: './index.js',
    output: {
        path: path.join(__dirname, 'js-built'),
        filename: '[name].js'
    },
    plugins: [
      new WebpackNotifierPlugin()
    ],
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            { test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.eot$/, loader: "url" }
        ]
    }
}