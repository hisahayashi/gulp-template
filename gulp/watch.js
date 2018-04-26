var gulp = require('gulp');
var config = require('./config');
var $ = config.$;
const env = process.env.NODE_ENV;


gulp.task('watch', function() {
  gulp.watch(config.src + 'ejs/**/*.ejs', ['watch-js']);
  gulp.watch(config.assets + 'js/**/*', ['watch-js']);
  gulp.watch(config.assets + 'json/**/*', ['watch-js']);
  gulp.watch(config.src + 'php/**/*', ['watch-php']);

  var watch = gulp.watch(config.assets + 'sass/**/*', ['watch-css']);
  watch.on('change', function(e) {
    console.log('File ' + e.path + ' was ' + e.type + ', running tasks...');
  });
});

gulp.task('watch-js', function(callback) {
  runSequence(
    'env-js', 'ejs', 'webpack', 'uglify', 'clean-html', 'clean-envs', 'copy-json', callback
  );
});

gulp.task('watch-php', function(callback) {
  runSequence(
    'env-php', 'copy-php', 'clean-envs', callback
  );
});

gulp.task('watch-css', function(callback) {
  runSequence(
    'sass', 'pleeease', 'clean-css', callback
  );
});

