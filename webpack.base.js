const path = require('path')

// html模板文件
const HtmlWebpackPlugin = require('html-webpack-plugin')
// 自动清除打包文件
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
// 版权信息
const CopyWebpackPlugin = require('copy-webpack-plugin')

const webpack = require('webpack')

module.exports = {
  entry: './src/index.js',//入口文件

  module: {

    rules: [
      {//base64
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1000,
            },
          },
        ],
      },
      // {
      //   test: /\.(png|jpg|gif)$/,
      //   use: [
      //     { loader: 'file-loader' }
      //   ]
      // },
      {
        test: /\.js$/,//es6转es5
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env'
            ],
            plugins: [
              ['@babel/plugin-proposal-decorators', { 'legacy': true }],//@log修饰器
              ['@babel/plugin-proposal-class-properties', { 'loose': true }],//class类名
              '@babel/plugin-transform-runtime',//generator
            ],
            sourceMap: true
          }
        }
      },
      {
        test: /\.js$/,
        use: {
          loader: 'eslint-loader',
          options: {
            enforce: 'pre',
          },
        },
        include: [path.resolve(__dirname, 'src')], // 指定检查的目录
      }
    ]
  },

  plugins: [//插件
    new HtmlWebpackPlugin({//
      template: './public/index.html',
      filename: 'index.html',
      minify: {
        removeAttributeQuotes: true,
        removeComments: true,    //移除HTML中的注释
        collapseWhitespace: true,
      },
      hash: true
    }),

    new CleanWebpackPlugin(),//清除dist


    // new webpack.ProvidePlugin({//给每个模块注入jQuery
    //   $: 'jquery'
    // }),
    new CopyWebpackPlugin([//copy插件
      { from: 'public/girl.png', to: 'girl.png' }
    ]),
    new webpack.BannerPlugin('copyright'),//版权声明
  ],
  externals: {
    jquery: '$'
  },

  resolve: {//解析第三方包
    modules: [path.resolve('node_modules')],
    // mainFields: ['style', 'main'],
    //mainFiles:[],
    extensions: ['.js', '.css',],
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
}