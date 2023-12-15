const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
require('babel-register')

module.exports = {
    entry: ['@babel/polyfill', './src/script/index.js'],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
            test: /\.js$/,
            exclude: /node_modules/,
            use: 'babel-loader',
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ],
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        port: 4444,
        open: true,
        // contentBase: './dist',
        compress: true
    }
}