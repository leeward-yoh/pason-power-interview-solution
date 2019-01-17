const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const DashboardPlugin = require('webpack-dashboard/plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const loaders = require('./webpack.loaders')

const HOST = process.env.HOST || '127.0.0.1'
const PORT = process.env.PORT || '8888'

loaders.push({
  test: /\.scss$/,
  use: [
    MiniCssExtractPlugin.loader,
    {
      loader: 'css-loader',
      options: {
        modules: true,
        sourceMap: true,
        importLoaders: 2,
        localIdentName: '[local]___[hash:base64:5]',
      },
    },
    'sass-loader',
  ],
  exclude: [path.resolve(__dirname, 'node_modules')],
})

module.exports = {
  mode: 'development',
  entry: [
    'react-hot-loader/patch',
    './src/index.jsx', // app's entry point
  ],
  devtool: process.env.WEBPACK_DEVTOOL || 'eval-source-map',
  output: {
    publicPath: '/',
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: loaders,
  },
  devServer: {
    contentBase: './public',
    // do not print bundle build stats
    noInfo: true,
    // enable HMR
    hot: true,
    // embed the webpack-dev-server runtime into the bundle
    inline: true,
    // serve index.html in place of 404 responses to allow HTML5 history
    historyApiFallback: true,
    port: PORT,
    host: HOST,
    stats: {
      colors: true,
    },
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
    new DashboardPlugin(),
    new HtmlWebpackPlugin({
      template: './src/template.html',
      files: {
        css: ['style.css'],
        js: ['bundle.js'],
      },
    }),
  ],
}
