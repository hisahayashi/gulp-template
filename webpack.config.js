var webpack = require('webpack');
var glob = require('glob');

module.exports = {
  entry: {
    utils: glob.sync('./src/assets/js/utils/**.js'),
    libs: './src/assets/js/libs/vendor.js',
    scene: './src/assets/js/scene/entry.js'
  },
  output: {
    path: __dirname + '/dist/assets/js',
    filename: '[name].bundle.js'
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    // new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    })
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel-loader"
    }]
  }
}
