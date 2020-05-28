const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const prodConfig = {
    mode: 'production',
    devtool: 'none',
    module: {
        rules: [
            {
                test: /\.less$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },

                    // options: {
                    //     // 这里可以指定一个 publicPath
                    //     // 默认使用 webpackOptions.output中的publicPath
                    //     publicPath: '../'
                    // },
                    {
                        loader: 'css-loader' //tanslate css into commonjs (because webpack only understand js)
                    },
                    {
                        loader: 'postcss-loader'
                    },
                    {
                        loader: 'less-loader' //compile less to css
                    }
                ],
            }
        ]
    },
    optimization: {
        minimizer: [
            new TerserPlugin({
            //     cache: true,
            //     parallel: true,
            //     sourceMap: true, // Must be set to true if using source-maps in production
            //     terserOptions: {
            //         // https://github.com/webpack-contrib/terser-webpack-plugin#terseroptions
            //     }
            }),
            new OptimizeCssAssetsPlugin({
                // assetNameRegExp: /\.optimize\.css$/g,
                // cssProcessor: require('cssnano'),
                // cssProcessorPluginOptions: {
                //     preset: ['default', { discardComments: { removeAll: true } }],
                // },
                // canPrint: true
            })
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            // 类似 webpackOptions.output里面的配置 可以忽略
            filename: '[name].[hash:8].css'
            // chunkFilename: '[id].css',
        }),
        new BundleAnalyzerPlugin()
    ],
};

module.exports = merge(baseConfig, prodConfig)

