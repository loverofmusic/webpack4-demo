const { resolve, join } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'development', //默认为production 文件压缩
  // mode: 'production',
  // devtool: 'source-map',
  devtool: 'cheap-module-eval-source-map',
  // devtool: 'cheap-module-source-map',
  // devtool: 'none',
  //开发模式推荐：cheap-module-eval-source-map 会暴露源码
  //生产模式推荐：cheap-module-source-map 既提示友好 也不会暴露源码
  // entry: {
  //     xxx: './src/index.js'
  // },
  // entry: './src/index.js',
  devServer: {
    contentBase: join(__dirname, 'dist'), //服务访问目录
    port: 9000,
    // proxy: {
    //     '/api': 'localhost:8888'
    // }
    hot: true, //hmr 必须开启此项
  },
  entry: {
    index: './src/index.js',
    demo: './src/demo.js',
  },
  output: {
    // filename: 'bundle.js',
    filename: '[name].[hash:8].js',
    path: resolve(__dirname, 'dist'),
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
            loader: 'postcss-loader',
            // options: {
            //     ident: 'postcss',
            //     plugins: (loader) => [
            //         require('autoprefixer')()
            //     ]
            // }
          },
          {
            loader: 'less-loader', //compile less to css
          },
        ],
      },
      {
        test: /\.m?js$/,
        loader: 'babel-loader',
        options: {
            //转化es5+语法
            presets: ['@babel/preset-env']
        },
        // use: {
        //   loader: 'babel-loader',
        //   options: {
        //     presets: ['@babel/preset-env'],
        //   },
        // },
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
};
