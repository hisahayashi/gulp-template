// const path = require('path')
const webpack = require('webpack')
const { VueLoaderPlugin } = require('vue-loader')
// const glob = require('glob')
// const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const env = process.env.NODE_ENV

let config = {

  mode: 'development',

  devtool: env === 'production' ? false : 'source-map',

  entry: {
    vendor: './src/assets/js/vendor/vendor.js',
    app :'./src/assets/ts/App.ts',
  },

  output: {
    path: __dirname + '/build/assets/js',
    filename: '[name].bundle.js',
  },

  resolve: {
    extensions: ['.ts', '.vue', '.js'],
    alias: {
      vue$: 'vue/dist/vue.esm.js', //webpack使う場合はこっちを指定する https://jp.vuejs.org/v2/guide/installation.html#%E7%94%A8%E8%AA%9E
    },
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
      },
      {
        test: /\.vue$/,
        // exclude: /node_modules/,
        loader: 'vue-loader',
      }
    ]
  },

  plugins: [
    new VueLoaderPlugin(),
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
//   config.devtool = 'source-map'
// }

module.exports = config
