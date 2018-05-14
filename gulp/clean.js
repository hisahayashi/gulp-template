var gulp = require('gulp')
var config = require('./config')
var $ = config.$
// const env = process.env.NODE_ENV


gulp.task('clean', function() {
  return gulp.src(config.dest + '/')
    .pipe($.clean({
      force: true
    }))
    .on('end', function() {})
})
