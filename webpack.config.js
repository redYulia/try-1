var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var src = path.join(__dirname, 'src');
module.exports = {
    entry: {
        //styles: path.join(src, 'styles.js'),
        index: path.join(src, 'index.pug'),
        bundle: path.join(src, 'index.js'),
    },
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '',
        filename: '[name].js'
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
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "sass-loader" // compiles Sass to CSS
                }]
            },
            {
                test: /\.pug$/,
                //use:  ['pug-loader'],
                use: {
                    loader: 'pug-loader',
                    query: {}
                }
            },
            /*{
                test: /\.pug$/,
                use:  ['html-loader', 'pug-html-loader?pretty&exports=false']
            },*/
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
    ]
};