var gulp = require('gulp');
var config = require('./config');
var $ = config.$;

var runSequence = require('run-sequence');


gulp.task('default', function(callback) {
  runSequence(

    // clean
    'clean',

    // environment
    'env-js', 'env-php',

    // html
    'html', 'clean-html',

    // js
    'concat', 'webpack', 'uglify',

    // css
    'sass', 'autoprefixer', 'minify-css', 'clean-css',

    // copy
    'copy-img', 'copy-json', 'copy-php', 'copy-video', 'copy-font', 'copy-sound',

    // environments
    'clean-envs',

    // preview
    'browser-sync', 'watch', callback
  );
});
