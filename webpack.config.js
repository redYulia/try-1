var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var src = path.join(__dirname, 'src');

module.exports = {
    entry: {
        bundle: path.join(src, 'index.js'),
    },
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            /*{
                test: /\.ts$/,
                exclude: /node_modules/,
                loader: 'ts-loader'
            },*/
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
                test: /\.pug$/,
                use: {
                    loader: 'pug-loader',
                    query: {}
                }
            },
            /*{
                test: /\.(eot|png|ttf|svg|woff|woff2)$/,
                loader: 'url-loader'
            }*/
        ]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: 'index.html',
            template: path.join(src, 'index.pug'),
        }),
        new ExtractTextPlugin('styles.css')
    ]
};