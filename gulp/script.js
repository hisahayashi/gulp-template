var gulp = require('gulp');
var config = require('./config');
var $ = config.$;
const env = process.env.NODE_ENV;

var webpack = require('webpack');
var webpackStream = require('webpack-stream');
var webpackConfig = require('../config/webpack.config');


gulp.task('concat', function(callback) {
  return gulp.src([config.assets + 'js/include/**/*'])
    .pipe($.concat('include.js'))
    .pipe(gulp.dest(config.dest + 'assets/js'))
    .on('end', function() {});
});

gulp.task('webpack', function(callback) {
  return gulp.src(['./src/ts/*.ts'])
    .pipe($.plumber())
    .pipe(webpackStream(webpackConfig, webpack))
    .pipe(gulp.dest(config.dest + 'assets/js'))
    .on('end', function() {});
});

gulp.task('uglify', function() {
  if (env === 'production') {
    return gulp.src(config.dest + 'assets/js/**/*.js')
      .pipe($.uglify())
      .pipe(gulp.dest(config.dest + 'assets/js'))
      .on('end', function() {});
  }
});
