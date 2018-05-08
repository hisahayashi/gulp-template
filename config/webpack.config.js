'use strict'

const path = require('path');
const webpack = require('webpack');
const glob = require('glob');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const env = process.env.NODE_ENV;

let config = {
  mode: 'development',
  entry: {
    vendor: './src/assets/js/vendor/vendor.js',
    app :'./src/assets/ts/App.ts'
  },
  output: {
    filename: 'bundle.js'
  },
  output: {
    path: __dirname + '/build/assets/js',
    filename: '[name].bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.webpack.js', '.web.js', '.js']
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader'
      }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(env)
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
  ]
}

// if (env === 'production') {
//   // JS圧縮
//   config.plugins.push(new webpack.optimize.UglifyJsPlugin({
//     compress: {
//       warnings: false
//     }
//   }));
// }
// else {
//   // ソースマップ
//   config.devtool = 'source-map';
// }

module.exports = config;
