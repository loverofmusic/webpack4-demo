const { resolve, join } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {

    entry: {
        index: resolve(__dirname, '../src/index.js'),
        demo: resolve(__dirname, '../src/demo.js'),
        // jquery: 'jquery'//多入口方式
    },

    output: {
        // filename: 'bundle.js',
        filename: '[name].[hash:8].js',
        path: resolve(__dirname, '../dist'),
        // publicPath: 'http://cdn.xxx.com/assets/'
        publicPath: '/',
    },

    module: {
        rules: [
            {
                test: /\.(png|jpg|gif)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        name: '[name].[hash:8].[ext]',
                        outputPath: 'assets/images/',
                        limit: 2048,
                    },
                },
            },
            {
                test: /\.ttf$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[hash:8].[ext]',
                        outputPath: 'assets/fonts/',
                    },
                },
            },
            {
                test: /\.less$/,
                // loader: ['style-loader', 'css-loader', 'less-loader']
                use: [
                    {
                        loader: 'style-loader', //create style nodes from js string
                    },
                    {
                        loader: 'css-loader', //tanslate css into commonjs (because webpack only understand js)
                    },
                    {
                        loader: 'postcss-loader'
                    },
                    {
                        loader: 'less-loader', //compile less to css
                    }
                ],
            },
            {
                test: /\.m?js$/,
                loader: 'babel-loader',

                exclude: /node_modules/,
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
        new CleanWebpackPlugin(),
        new webpack.ProvidePlugin({
            '$': 'jquery',
            'jQuery': 'jquery'
        })
    ]
};
