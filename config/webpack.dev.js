const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const { join } = require('path');
const devConfig = {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: join(__dirname, 'dist'), //服务访问目录
        port: 9000,
        // proxy: {
        //     '/api': 'localhost:8888'
        // }
        hot: true, //hmr 必须开启此项
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ]
};

module.exports = merge(baseConfig, devConfig)

