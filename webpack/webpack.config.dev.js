var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    'babel-polyfill',
    'webpack-hot-middleware/client',
    './src/app',
  ],
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, '../dist/dev/assets/'),
    filename: "bundle.js",
    chunkFilename: "[name].[id].bundle.js",
    publicPath: '/dist/dev/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': 'development'
      },
      '__BUILD_DATE__': Date.now()
    }),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    extensions: ['', '.js', '.jsx','.scss']
  },
  module: {
    loaders: [
      {
        test: /\.js/,
        loaders: ['babel'],
        include: path.join(__dirname, '../src/')
      },
      {
        test: /\.json$/,
        loaders: ['json']
      }
    ]
  }
};
