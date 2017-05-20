/* ------------------------------------------------ */
/* variables */
/* ------------------------------------------------ */
var params = {};
params.local = {
  home: '/',
  apiRoot: '/',
};
params.stage = {
  home: 'http://example.com/test/',
  apiRoot: 'http://example.com/test/',
};
params.prod = {
  home: 'http://example.com/',
  apiRoot: 'http://example.com/',
};
var bsPort = 3000;

/* ------------------------------------------------ */
/* init */
/* ------------------------------------------------ */
var gulp = require('gulp');
$ = require('gulp-load-plugins')({
  pattern: ['gulp-*', 'gulp.*'],
  replaceString: /\bgulp[\-.]/
});

/* load plugins */
var runSequence = require('run-sequence');
var browserSync = require('browser-sync');
var bowerFiles = require('main-bower-files');
var webpackStream = require('webpack-stream');
var webpack = require('webpack');
var source = require('vinyl-source-stream');

var fs = require('fs');
var pkg = require('./package.json');
var webpackConfig = require('./webpack.config');

/* environment setting */
var publishEnv = 'local';
if ($.util.env.local) publishEnv = 'local';
else if ($.util.env.stage) publishEnv = 'stage';
else if ($.util.env.prod) publishEnv = 'prod';

var param = {};
switch (publishEnv) {
  case 'local':
    param = params.local;
    break;
  case 'stage':
    param = params.stage;
    break;
  case 'prod':
    param = params.prod;
    break;
}

// console.log('publishEnv: ' + publishEnv);
// console.log(param.home);

var paths = {
  assets: ['./src/assets/'],
  dist: ['./dist']
};

/* export JSON to EJS */
var dataPath = './src/data/ejs.json';
var ejsJSON = JSON.parse(fs.readFileSync(dataPath));

/* replace */
ejsJSON.path.home = param.home;

/* paths */
var selector = {
  ejs_data: [dataPath],
  html: ['./src/html/**/*.html'],
  ejs: ['./src/ejs/**/*.ejs'],
  img: ['./src/assets/img/**/*'],
  font: ['./src/assets/fonts/**/*'],
  video: ['./src/assets/video/*'],
  sound: ['./src/assets/sound/*'],
  js: ['./src/assets/js/**/*'],
  js_dev: ['./src/assets/js/**/*'],
  js_lib: ['./src/assets/js/libs/**/*'],
  js_include: ['./src/assets/js/include/**/*'],
  js_env: ['./src/assets/js/include/env.js'],
  json: ['./src/assets/json/**/*'],
  php: ['./src/php/**/*'],
  php_env: ['./src/php/app/env.php'],
  css: ['./src/assets/css/**/*'],
  sass: ['./src/assets/sass/**/*']
}

/* ------------------------------------------------ */
/* tasks */
/* ------------------------------------------------ */
gulp.task('env_js', function(callback) {
  return gulp.src(selector.js_env)
    .pipe($.edit(function(src, callback) {
      var err = null;
      var obj = ejsJSON;
      obj.prod = true;
      if ($.util.env.prod) obj.prod = false;
      src += 'var env = ' + JSON.stringify(obj);
      callback(err, src);
    }))
    .pipe($.rename({
      suffix: '.edit',
    }))
    .pipe(gulp.dest('./src/assets/js/include'))
    .on('end', function() {});
});

gulp.task('env_php', function(callback) {
  return gulp.src(selector.php_env)
    .pipe($.edit(function(src, callback) {
      var err = null;
      var obj = ejsJSON;
      obj.prod = true;
      if ($.util.env.prod) obj.prod = false;
      var src = '<?php' + '\n';
      src += 'define("API_KEY", "' + param.home + '");' + '\n';
      callback(err, src);
    }))
    .pipe($.rename({
      suffix: '.edit',
    }))
    .pipe(gulp.dest('./src/php/app/'))
    .on('end', function() {});
});

gulp.task('ejs', function(callback) {
  return gulp.src(selector.ejs)
    .pipe($.ejs(ejsJSON))
    .pipe($.rename({
      // suffix: '.min',
      extname: '.html'
    }))
    .pipe(gulp.dest(paths.dist + '/'))
    .on('end', function() {});
});

gulp.task('concat', function(callback) {
  return gulp.src(selector.js_include)
    .pipe($.concat('include.js'))
    .pipe(gulp.dest(paths.dist + '/assets/js'))
    .on('end', function() {});
});

gulp.task('webpack', function(callback) {
  if (publishEnv == 'prod' || publishEnv == 'stage') {
  }
  return webpackStream(webpackConfig, webpack)
    .pipe($.plumber())
    .pipe(gulp.dest(paths.dist + '/assets/js'));
});

gulp.task('uglify', function() {
  if (publishEnv == 'prod') {
    return gulp.src(paths.dist + '/assets/js/**/*.js')
      .pipe($.uglify())
      .pipe(gulp.dest(paths.dist + '/assets/js'))
      .on('end', function() {
        console.log('done');
      });
  }
});

gulp.task('sass', function() {
  return gulp.src(selector.sass)
    .pipe($.sass({
      style: 'expanded',
      compass: true
    }))
    .pipe(gulp.dest(paths.dist + '/assets/css/'));
});

gulp.task('pleeease', function() {
  return gulp.src([
      paths.dist + '/assets/css/styles.css'
    ])
    .pipe($.pleeease({
      autoprefixer: {
        browsers: ['> 1%', 'last 4 versions', 'Firefox ESR', 'Opera 12.1', 'Android 2.3'],
        cascade: true
      },
      minifier: true
    }))
    .pipe($.rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest(paths.dist + '/assets/css/'));
});

gulp.task('clean', function() {
  return gulp.src(paths.dist + '/')
    .pipe($.clean({
      force: true
    }))
    .on('end', function() {});
});

gulp.task('clean_css', function() {
  return gulp.src([
      paths.dist + '/assets/css/styles.css',
      paths.dist + '/assets/css/component',
      paths.dist + '/assets/css/scene'
    ])
    .pipe($.clean({
      force: true
    }))
    .on('end', function() {});
});

gulp.task('clean_html', function() {
  return gulp.src([
      paths.dist + '/_common',
      './src/html'
    ])
    .pipe($.clean({
      force: true
    }))
    .on('end', function() {});
});

gulp.task('clean_envs', function() {
  return gulp.src([
      // './src/assets/js/env.edit.js',
      // './src/php/app/env.edit.php'
    ])
    .pipe($.clean({
      force: true
    }))
    .on('end', function() {});
});

gulp.task('copy_img', function() {
  if (publishEnv == 'local') {
    return gulp.src(selector.img)
      .pipe(gulp.dest(paths.dist + '/assets/img/'));
  }
  else{
    return gulp.src(selector.img)
      .pipe($.imagemin())
      .pipe(gulp.dest(paths.dist + '/assets/img/'));
  }
});

gulp.task('copy_font', function() {
  return gulp.src(selector.font)
    .pipe(gulp.dest(paths.dist + '/assets/fonts/'));
});

gulp.task('copy_json', function() {
  return gulp.src(selector.json)
    .pipe(gulp.dest(paths.dist + '/assets/json/'));
});

gulp.task('copy_video', function() {
  return gulp.src(selector.video)
    .pipe(gulp.dest(paths.dist + '/assets/video/'));
});

gulp.task('copy_sound', function() {
  return gulp.src(selector.sound)
    .pipe(gulp.dest(paths.dist + '/assets/sound/'));
});

gulp.task('copy_php', function() {
  return gulp.src(selector.php)
    .pipe(gulp.dest(paths.dist + '/'));
});

gulp.task('bs_connect', function() {
  $.connectPhp.server({
    port: bsPort,
    base: './dist',
    bin: '/Applications/MAMP/bin/php/php5.6.2/bin/php',
    ini: '/Applications/MAMP/bin/php/php5.6.2/conf/php.ini'
  }, function() {
    browserSync.init(null, {
      server: {
        baseDir: paths.dist
      },
      port: bsPort,
      open: false,
      notify: true,
      xip: false
    });
  });
});


/* ------------------------------------------------ */
/* watch */
/* ------------------------------------------------ */
gulp.task('watch', function() {
  gulp.watch(selector.ejs, ['watchJS']);
  gulp.watch(selector.ejs_w, ['watchJS']);
  gulp.watch(selector.js_dev, ['watchJS']);
  gulp.watch(selector.js_lib, ['watchJS']);
  gulp.watch(selector.json, ['watchJS']);
  gulp.watch(selector.ejs_data, ['watchJS']);
  gulp.watch(selector.php, ['watchPHP']);

  var watch = gulp.watch(selector.sass, ['watchCSS']);
  watch.on('change', function(e) {
    console.log('File ' + e.path + ' was ' + e.type + ', running tasks...');
  });

});

gulp.task('watchJS', function(callback) {
  runSequence(
    'env_js', 'ejs', 'webpack', 'uglify', 'clean_html', 'clean_envs', 'copy_json', callback
  );
});

gulp.task('watchPHP', function(callback) {
  runSequence(
    'env_php', 'copy_php', 'clean_envs', callback
  );
});

gulp.task('watchCSS', function(callback) {
  runSequence(
    'sass', 'pleeease', 'clean_css', callback
  );
});


/* ------------------------------------------------ */
/* default */
/* ------------------------------------------------ */
gulp.task('default', function(callback) {
  runSequence(
    'clean',
    'env_js', 'env_php', 'ejs', 'concat', 'webpack', 'uglify', 'clean_html', 'clean_envs', 'copy_json', 'copy_php',
    'sass', 'pleeease', 'clean_css',
    'copy_img', 'copy_video', 'copy_font', 'copy_sound',
    'bs_connect', 'watch', callback
  );
});
