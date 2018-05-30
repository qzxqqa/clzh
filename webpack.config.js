let path = require('path');
let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let OpenBrowserWebpackPlugin = require('open-browser-webpack-plugin');

module.exports = {
    entry: {
        index: ['babel-polyfill', path.resolve(__dirname, 'app/index.js')],
        vendor: ['jquery', 'lib-flexible']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    devServer: {
        port: 3000,
        inline: true,
        contentBase: 'dist'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.css', '.less'],
        alias: {
            
        }
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                include: /app/,
                exclude: [
                    path.resolve(__dirname, 'node_modules'),
                    path.resolve(__dirname, 'bower_components')
                ],
                loader: 'babel-loader'
            },
            {
                test: /\.less$/,
                include: /app/,
                exclude: [
                    path.resolve(__dirname, 'node_modules'),
                    path.resolve(__dirname, 'bower_components')
                ],
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'less-loader']
                })
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: '',
            template: './app/index.html',
            filename: 'index.html'
        }),
        new ExtractTextPlugin('index.css'),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: Infinity
        }),
        new webpack.HotModuleReplacementPlugin(),
        new OpenBrowserWebpackPlugin({
            url: 'http://localhost:3000'
        })
    ]
}