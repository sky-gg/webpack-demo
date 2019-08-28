
const path = require('path')

// 抽取css文件
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

// 压缩js、css
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

const webpack = require('webpack')

const { smart } = require('webpack-merge')
const BaseConfig = require('./webpack.base.js')


module.exports = smart(BaseConfig, {
  mode: 'production',//环境
  output: {//输出文件
    filename: 'bundle.[hash:8].js',
    path: path.resolve(__dirname, 'dist')
  },
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

    // new webpack.ProvidePlugin({//给每个模块注入jQuery
    //   $: 'jquery'
    // }),
    new MiniCssExtractPlugin({//抽离css
      filename: '[name][hash:8].css',
      chunkFilename: '[id][hash:8].css'
    }),
    new webpack.DefinePlugin({ Dev: JSON.stringify('production') })
  ],

  optimization: {
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
  },

})