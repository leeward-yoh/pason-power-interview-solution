const path = require('path')

const nodeModules = path.resolve(__dirname, 'node_modules')
const bowerComponents = path.resolve(__dirname, 'bower_components')

module.exports = [
  {
    test: /\.jsx?$/,
    exclude: [
      nodeModules,
      bowerComponents,
      path.resolve(__dirname, 'public'),
    ],
    loader: 'babel-loader',
  },
  {
    test: /\.css$/,
    loaders: ['style-loader', 'css-loader?importLoaders=1'],
    exclude: [nodeModules],
  },
  {
    test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
    exclude: [
      nodeModules,
      bowerComponents,
    ],
    loader: 'file-loader',
  },
  {
    test: /\.(woff|woff2)$/,
    exclude: [
      nodeModules,
      bowerComponents,
    ],
    loader: 'file-loader?prefix=font/&limit=5000',
  },
  {
    test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
    exclude: [
      nodeModules,
      bowerComponents,
    ],
    loader: 'file-loader?limit=10000&mimetype=application/octet-stream',
  },
  {
    test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
    exclude: [
      nodeModules,
      bowerComponents,
    ],
    loader: 'file-loader?limit=10000&mimetype=image/svg+xml',
  },
  {
    test: /\.gif/,
    exclude: [
      nodeModules,
      bowerComponents,
    ],
    loader: 'file-loader?limit=10000&mimetype=image/gif',
  },
  {
    test: /\.jpg/,
    exclude: [
      nodeModules,
      bowerComponents,
    ],
    loader: 'file-loader?limit=10000&mimetype=image/jpg',
  },
  {
    test: /\.png/,
    exclude: [
      nodeModules,
      bowerComponents,
    ],
    loader: 'file-loader?limit=10000&mimetype=image/png',
  },
]
