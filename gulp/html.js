var gulp = require('gulp');
var config = require('./config');
var $ = config.$;
const env = process.env.NODE_ENV;


gulp.task('html', function(callback) {
  return gulp.src([config.src + 'ejs/**/*.ejs'])
    .pipe($.ejs({
      jsonData: config.ejsConfig
    }))
    .pipe($.rename({
      // suffix: '.min',
      extname: '.html'
    }))
    .pipe(gulp.dest(config.dest + '/'))
    .on('end', function() {});
});

gulp.task('clean-html', function() {
  return gulp.src([
      config.dest + '/_common',
      config.src + 'html'
    ])
    .pipe($.clean({
      force: true
    }))
    .on('end', function() {});
});
