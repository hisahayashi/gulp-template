var gulp = require('gulp');
var config = require('./config');
var $ = config.$;
const env = process.env.NODE_ENV;


gulp.task('copy-img', function() {
  if (env === 'local' || env === undefined) {
    return gulp.src(config.assets + 'img/')
      .pipe(gulp.dest(config.dest + 'assets/img/'));
  }
  else{
    return gulp.src(config.assets + 'img/')
      .pipe($.imagemin())
      .pipe(gulp.dest(config.dest + 'assets/img/'));
  }
});

gulp.task('copy-font', function() {
  return gulp.src(config.assets + 'font/')
    .pipe(gulp.dest(config.dest + 'assets/fonts/'));
});

gulp.task('copy-json', function() {
  return gulp.src(config.assets + 'json/')
    .pipe(gulp.dest(config.dest + 'assets/json/'));
});

gulp.task('copy-video', function() {
  return gulp.src(config.assets + 'video/')
    .pipe(gulp.dest(config.dest + 'assets/video/'));
});

gulp.task('copy-sound', function() {
  return gulp.src(config.assets + 'sound/')
    .pipe(gulp.dest(config.dest + 'assets/sound/'));
});

gulp.task('copy-php', function() {
  return gulp.src(config.assets + 'php/')
    .pipe(gulp.dest(config.dest));
});
