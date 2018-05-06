var gulp = require('gulp');
var config = require('./config');
var $ = config.$;
const env = process.env.NODE_ENV;


gulp.task('sass', function() {
  return gulp.src([config.assets + 'sass/styles.scss'])
    .pipe($.sass({
      outputStyle: 'expanded',
      compass: false,
      includePaths: config.sassConfig.includePaths
    }).on('error', $.sass.logError))
    .pipe(gulp.dest(config.dest + 'assets/css/'));
});

gulp.task('autoprefixer', function() {
  return gulp.src([config.dest + 'assets/css/styles.css'])
    .pipe($.autoprefixer({
      browsers: config.sassConfig.prefixer,
      cascade: true
    }))
    .pipe(gulp.dest(config.dest + 'assets/css/'));
});

gulp.task('minify-css', function() {
  var sourcemaps = $.util.noop();
  if(env !== 'production'){
    sourcemaps = $.sourcemaps.write()
  }
  return gulp.src([config.dest + 'assets/css/styles.css'])
    .pipe($.sourcemaps.init())
    .pipe($.cleanCss())
    .pipe($.rename({
      suffix: '.min'
    }))
    .pipe(sourcemaps)
    .pipe(gulp.dest(config.dest + 'assets/css/'));
});

gulp.task('clean-css', function() {
  return gulp.src([
      config.dest + '/assets/css/styles.css',
      config.dest + '/assets/css/component',
      config.dest + '/assets/css/scene'
    ])
    .pipe($.clean({
      force: true
    }))
    .on('end', function() {});
});
