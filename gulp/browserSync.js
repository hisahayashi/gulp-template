var gulp = require('gulp');
var config = require('./config');
var $ = config.$;

var browserSync = require('browser-sync');
var port = 8000;

gulp.task('browser-sync', function() {

  $.connectPhp.server({
    port: port,
    base: config.dest,
    bin: '/usr/bin/php',
    ini: '/etc'
  },
  function() {
    browserSync.init(null, {
      server: {
        baseDir: config.dest
      },
      port: port,
      open: false,
      notify: true,
      xip: false
    });
  });

});
