var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
    './app/index.jsx'
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  module: {
    loaders: [{
      test: /\.jsx$/,
      loaders: ['babel-loader?presets[]=react,presets[]=es2015,presets[]=stage-1'],
      include: path.join(__dirname, 'app'),
      exclude: /node_modules/
    }]
  },
  resolve: {
    root: path.resolve(__dirname),
    alias: {
      app: 'app',
    },
    extensions: ['', '.js', '.jsx']
  },
  devtool: 'cheap-module-eval-source-map'
}