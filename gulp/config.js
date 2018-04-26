var gulp = require('gulp');
const env = process.env.NODE_ENV;

/* config */
var configDir = '../config/';

/* load gulp plugin */
var $ = require('gulp-load-plugins')({
  pattern: ['gulp-*', 'gulp.*'],
  replaceString: /\bgulp[\-.]/
});

/* environment setting */
var paths = {
  local: {
    root: '/',
    endpoint: '/',
  },
  staging: {
    root: 'http://test.example.com/',
    endpoint: 'http://test-api.example.com/',
  },
  production: {
    root: 'http://example.com/',
    endpoint: 'http://api.example.com/',
  }
};
var rootPath = paths.local;

switch (env) {
  case 'local':
    rootPath = paths.local;
    break;
  case 'staging':
    rootPath = paths.staging;
    break;
  case 'production':
    rootPath = paths.production;
    break;
}

console.log('NODE_ENV:', env);
console.log('rootPath:', rootPath);

var baseConfig = {
  sourceDir: 'src/',
  buildDir: 'build/'
};

var config = {

  src: baseConfig.sourceDir,
  dest: baseConfig.buildDir,
  assets: baseConfig.sourceDir + 'assets/',

  $: $,

  /* config */
  jsConfig: require(configDir + 'js.config'),
  sassConfig: require(configDir + 'sass.config'),
  ejsConfig: require(configDir + 'ejs.config'),

  /* environment setting */
  path: rootPath,
};

/* update ejsConfig */
config.ejsConfig.path.root = rootPath.root;
config.ejsConfig.path.endpoint = rootPath.endpoint
if(env === 'production'){
  config.ejsConfig.production = true;
}
else{
  config.ejsConfig.production = false;
}

module.exports = config;
