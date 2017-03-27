var path = require('path')
var WebpackNotifierPlugin = require('webpack-notifier')

module.exports = {
    context: path.join(__dirname, 'js-compiled'),
    entry: './app.js',
    output: {
        path: path.join(__dirname, 'js-built'),
        filename: '[name].bundle.js'
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