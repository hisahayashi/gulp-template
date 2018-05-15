var gulp = require('gulp')
var config = require('./config')
var $ = config.$
// const env = process.env.NODE_ENV


gulp.task('env-js', function() {
  return gulp.src([config.assets + 'js/env/env.js'])
    .pipe($.edit(function(src, callback) {
      var error = null
      src += 'var env = ' + JSON.stringify(config.ejsConfig)
      callback(error, src)
    }))
    .pipe($.rename({
      suffix: '.edit',
    }))
    .pipe(gulp.dest(config.assets + 'js/env'))
    .on('end', function() {})
})

// gulp.task('env-ts', function() {
//   return gulp.src([config.assets + 'ts/env/env.ts'])
//     .pipe($.edit(function(src, callback) {
//       var error = null
//       src += 'export default ' + JSON.stringify(config.ejsConfig)
//       callback(error, src)
//     }))
//     .pipe($.rename({
//       suffix: '.edit',
//     }))
//     .pipe(gulp.dest(config.assets + 'ts/env'))
//     .on('end', function() {})
// })

gulp.task('env-php', function() {
  return gulp.src([config.src + 'php/app/env.php'])
    .pipe($.edit(function(src, callback) {
      var error = null
      src += '<?php' + '\n'
      src += 'define("ROOT", "' + config.path.root + '")\n'
      src += 'define("ENDPOINT", "' + config.path.endpoint + '")\n'
      callback(error, src)
    }))
    .pipe($.rename({
      suffix: '.edit',
    }))
    .pipe(gulp.dest(config.src + 'php/app'))
    .on('end', function() {})
})

gulp.task('clean-envs', function() {
  return gulp.src([
      config.assets + 'js/env/env.edit.js',
      config.src + 'php/app/env.edit.php'
    ])
    .pipe($.clean({
      force: true
    }))
    .on('end', function() {})
})

