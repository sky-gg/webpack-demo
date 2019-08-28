const path = require('path')

// 抽取css文件
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const webpack = require('webpack')

const { smart } = require('webpack-merge')
const BaseConfig = require('./webpack.base.js')

module.exports = smart(BaseConfig, {
  mode: 'development',
  output: {//输出文件
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {//开发环境配置
    port: 3000,//端口
    open: true,//是否自动打开浏览器
    progress: true,//进度条
    contentBase: './dist',//静态资源文件夹
    proxy: {//代理
      '/api': {
        target: 'https://market.douban.com/',
        changeOrigin: true
      }
    }
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader' },
          'postcss-loader',
        ]
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader' },
          'postcss-loader',
          'sass-loader',
        ]
      },
      
    ]
  },

  plugins: [//插件
    new MiniCssExtractPlugin({//抽离css
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),
    new webpack.DefinePlugin({ Dev: JSON.stringify('development') })
  ],

})