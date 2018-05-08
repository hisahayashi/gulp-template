var gulp = require('gulp');
var config = require('./config');
var runSequence = require('run-sequence');
var $ = config.$;
const env = process.env.NODE_ENV;


gulp.task('watch', function() {

  var watch;

  watch = gulp.watch(config.src + 'ejs/**/*.ejs', ['watch-html']);
  watch = gulp.watch(config.assets + 'ts/**/*', ['watch-js']);
  watch = gulp.watch(config.assets + 'js/**/*', ['watch-js']);
  watch = gulp.watch(config.assets + 'json/**/*', ['watch-js']);
  watch = gulp.watch(config.src + 'php/**/*', ['watch-php']);
  watch = gulp.watch(config.assets + 'sass/**/*', ['watch-css']);

  watch.on('add', function(e) {
    console.log('File ' + e.path + ' was ' + e.type + ', running tasks...');
  });

  watch.on('change', function(e) {
    console.log('File ' + e.path + ' was ' + e.type + ', running tasks...');
  });
});

gulp.task('watch-html', function(callback) {
  runSequence(
    'env-js', 'html', 'clean-html', callback
  );
});

gulp.task('watch-js', function(callback) {
  runSequence(
    'env-js', 'concat', 'concat-libs', 'webpack', 'uglify', 'copy-json', callback
  );
});

gulp.task('watch-php', function(callback) {
  runSequence(
    'env-php', 'copy-php', callback
  );
});

gulp.task('watch-css', function(callback) {
  runSequence(
    'sass', 'autoprefixer', 'minify-css', 'clean-css', callback
  );
});

