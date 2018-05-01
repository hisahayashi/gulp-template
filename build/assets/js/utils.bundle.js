/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var g;\n\n// This works in non-strict mode\ng = (function() {\n\treturn this;\n})();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || Function(\"return this\")() || (1, eval)(\"this\");\n} catch (e) {\n\t// This works if the window reference is available\n\tif (typeof window === \"object\") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n\n\n//# sourceURL=webpack:///(webpack)/buildin/global.js?");

/***/ }),

/***/ "./src/assets/js/utils/utils.js":
/*!**************************************!*\
  !*** ./src/assets/js/utils/utils.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global) {/*------------------------------------------------------------*/\n/* console.log のかわり */\nwindow.debug = function() {\n  if( window.console && window.console.log ) {\n    if( global.debug ){\n      window.console.log.apply(console, arguments);\n    }\n  }\n};\n\nwindow.Utils = [];\n\n/*------------------------------------------------------------*/\n/*  */\nUtils.twitterWebIntent = function( text, url, hashtag ) {\n  debug( 'text: ' + text );\n  debug( 'url: ' + url );\n  debug( 'hashtag: ' + hashtag );\n  var enc_text = encodeURIComponent( text );\n  var enc_url = encodeURIComponent( url );\n  var enc_hashtag = encodeURIComponent( hashtag );\n  var url = 'https://twitter.com/share?url='+enc_url+'&hashtags=' + enc_hashtag + '&text=' + enc_text;\n  window.open( url, '_blank' );\n};\n\n/*------------------------------------------------------------*/\n/*  */\nUtils.facebookFeed = function( name, description, picture, url ) {\n  debug( 'name: ' + name );\n  debug( 'description: ' + description );\n  debug( 'picture: ' + picture );\n  debug( 'url: ' + url );\n\n  // if( !global.global.domain.match('toyota.jp') ){\n  //   url = url.replace('toyota.jp', 'test-tohyo.hys-inc.jp');\n  //   picture = picture.replace('toyota.jp', 'test-tohyo.hys-inc.jp');\n  // }\n\n  FB.ui({\n    method: 'feed',\n    // message: 'test message',\n    // caption: 'caption',\n    name: name,\n    description: (\n      description\n    ),\n    link: url,\n    picture: picture\n  },\n  function(response) {\n    if (response && !response.error_code) {\n      // alert('Posting completed.');\n    } else {\n      // alert('Error while posting.');\n    }\n  });\n};\n\n/*------------------------------------------------------------*/\nUtils.getDeviceOrientation = function(){\n  // portrait\n  if(window.innerHeight > window.innerWidth){\n    return 'portrait';\n  }\n  // landscape\n  else{\n    return 'landscape';\n  }\n};\n\n/*------------------------------------------------------------*/\n/*  */\nUtils.zeroPad = function( number, length ) {\n  return( Array( length ).join( '0' ) + number ).slice( -length );\n};\n\nUtils.numComma = function( num ) {\n  return String( num ).replace( /(\\d)(?=(\\d\\d\\d)+(?!\\d))/g, '$1,' );\n}\n\n/*------------------------------------------------------------*/\n/*  */\nUtils.canvasDetector = {\n  canCanvas: function() {\n    return !!window.CanvasRenderingContext2D\n  },\n  canWebGL: function() {\n    try {\n      return !!window.WebGLRenderingContext && !!document.createElement('canvas').getContext('experimental-webgl');\n    } catch (e) {\n      return false;\n    }\n  }\n};\n\n/*------------------------------------------------------------*/\n/*  */\nUtils.formatDate = function(date, format) {\n  if (!format) format = 'YYYY-MM-DD hh:mm:ss.SSS';\n  format = format.replace(/YYYY/g, date.getFullYear());\n  format = format.replace(/MM/g, ('0' + (date.getMonth() + 1)).slice(-2));\n  format = format.replace(/DD/g, ('0' + date.getDate()).slice(-2));\n  format = format.replace(/hh/g, ('0' + date.getHours()).slice(-2));\n  format = format.replace(/mm/g, ('0' + date.getMinutes()).slice(-2));\n  format = format.replace(/ss/g, ('0' + date.getSeconds()).slice(-2));\n  if (format.match(/S/g)) {\n    var milliSeconds = ('00' + date.getMilliseconds()).slice(-3);\n    var length = format.match(/S/g).length;\n    for (var i = 0; i < length; i++) format = format.replace(/S/, milliSeconds.substring(i, i + 1));\n  }\n  return format;\n};\n\n/*------------------------------------------------------------*/\n/*  */\nUtils.separate = function( num ) {\n  return String( num ).replace( /(\\d)(?=(\\d\\d\\d)+(?!\\d))/g, '$1,' );\n};\n\n/*------------------------------------------------------------*/\n/*  */\nUtils.browserLanguage = function() {\n  var ua = window.navigator.userAgent.toLowerCase();\n  try {\n    // chrome\n    if( ua.indexOf( 'chrome' ) != -1 ){\n      return ( navigator.languages[0] || navigator.browserLanguage || navigator.language || navigator.userLanguage).substr(0,2);\n    }\n    // それ以外\n    else{\n      return ( navigator.browserLanguage || navigator.language || navigator.userLanguage).substr(0,2);\n    }\n  }\n  catch( e ) {\n    return undefined;\n  }\n}\n\n/*------------------------------------------------------------*/\n/* スマートフォンの判定 */\nUtils.isSmartDevice = function() {\n  var ua = navigator.userAgent;\n  var flag = false;\n\n  if( ( ua.indexOf( 'iPhone' ) > 0 && ua.indexOf( 'iPad' ) == -1 ) || ua.indexOf( 'iPod' ) > 0 || ua.indexOf( 'Android' ) > 0 && ua.indexOf( 'Mobile' ) > 0 ) {\n    flag = 'smartphone';\n  } else if( ua.indexOf( 'iPad' ) > 0 || ua.indexOf( 'Android' ) > 0 ) {\n    flag = 'tablet';\n  }\n  return flag;\n};\n\n/*------------------------------------------------------------*/\n/*\n *  OSを取得\n *  @return (win, mac, linux)\n */\nUtils.getOS = function() {\n  var os;\n  var ua = window.navigator.userAgent.toLowerCase();\n  if( ua.match( /win/ ) ) {\n    os = \"win\";\n  } else if( ua.match( /mac|ppc/ ) ) {\n    os = \"mac\";\n  } else if( ua.match( /linux/ ) ) {\n    os = \"linux\";\n  } else {\n    os = \"other\";\n  }\n  return os;\n}\n\n/*------------------------------------------------------------*/\n/*\n *  ブラウザ名を取得\n *  @return (ie6、ie7、ie8、ie9、ie10、ie11、chrome、safari、opera、firefox、unknown)\n */\nUtils.getBrowser = function() {\n  var ua = window.navigator.userAgent.toLowerCase();\n  var ver = window.navigator.appVersion.toLowerCase();\n  var name = 'unknown';\n\n  if( ua.indexOf( \"msie\" ) != -1 ) {\n    if( ver.indexOf( \"msie 6.\" ) != -1 ) {\n      name = 'ie6';\n    } else if( ver.indexOf( \"msie 7.\" ) != -1 ) {\n      name = 'ie7';\n    } else if( ver.indexOf( \"msie 8.\" ) != -1 ) {\n      name = 'ie8';\n    } else if( ver.indexOf( \"msie 9.\" ) != -1 ) {\n      name = 'ie9';\n    } else if( ver.indexOf( \"msie 10.\" ) != -1 ) {\n      name = 'ie10';\n    } else {\n      name = 'ie';\n    }\n  } else if( ua.indexOf( 'trident/7' ) != -1 ) {\n    name = 'ie11';\n  } else if( ua.indexOf( 'chrome' ) != -1 ) {\n    name = 'chrome';\n  } else if( ua.indexOf( 'safari' ) != -1 ) {\n    name = 'safari';\n  } else if( ua.indexOf( 'opera' ) != -1 ) {\n    name = 'opera';\n  } else if( ua.indexOf( 'firefox' ) != -1 ) {\n    name = 'firefox';\n  }\n  return name;\n};\n\n/*------------------------------------------------------------*/\n/*\n *  対応ブラウザかどうか判定\n *  @param browsers 対応ブラウザ名を配列で渡す(ie6、ie7、ie8、ie9、ie10、ie11、chrome、safari、opera、firefox)\n *  @return サポートしてるかどうかをtrue/falseで返す\n */\nUtils.isSupported = function( browsers ) {\n  var thusBrowser = getBrowser();\n  for( var i = 0; i < browsers.length; i++ ) {\n    if( browsers[ i ] == thusBrowser ) {\n      return true;\n      exit;\n    }\n  }\n  return false;\n};\n\n\n/*------------------------------------------------------------*/\n/*  */\nUtils.normalize = function( point, scale ) {\n  var norm = Math.sqrt( point.x * point.x + point.y * point.y );\n  if( norm != 0 ) { // as3 return 0,0 for a point of zero length\n    point.x = scale * point.x / norm;\n    point.y = scale * point.y / norm;\n  }\n};\n\n/*------------------------------------------------------------*/\n/*  */\nUtils.normalize3 = function( p, scale ) {\n  var norm = Math.sqrt( p.x * p.x + p.y * p.y + p.z * p.z );\n  if( norm != 0 ) { // as3 return 0,0 for a point of zero length\n    p.x = scale * p.x / norm;\n    p.y = scale * p.y / norm;\n    p.z = scale * p.z / norm;\n  }\n  return p;\n};\n\n/*------------------------------------------------------------*/\n/*  */\nUtils.pointLength3 = function( p ) {\n  return Math.sqrt( p.x * p.x + p.y * p.y + p.z * p.z );\n};\n\n/*------------------------------------------------------------*/\n/*  */\nUtils.getParams = function( params ) {\n  var obj = params;\n  var params = location.href.split( '?' )[ 1 ];\n\n  var hash = function( key, value ) {\n    var h = {};\n    h[ key ] = value;\n    return h;\n  }\n\n  if( params ) {\n    params = params.split( '&' );\n    for( var i = 0; i < params.length; i++ ) {\n      var p = params[ i ].split( '=' );\n      $.extend( obj, hash( p[ 0 ], p[ 1 ] ) );\n      //debug( obj[i] );\n    }\n  }\n  return obj;\n};\n\n/*------------------------------------------------------------*/\n/*  */\nUtils.getQuery = function() {\n  var query = window.location.search.substring( 1 );\n  var parms = query.split( '&' );\n  var p = {};\n\n  for( var i = 0; i < parms.length; i++ ) {\n    var pos = parms[ i ].indexOf( '=' );\n    if( pos > 0 ) {\n      var key = parms[ i ].substring( 0, pos );\n      var val = parms[ i ].substring( pos + 1 );\n      p[ key ] = val;\n    }\n  }\n  return p;\n}\n\n/*------------------------------------------------------------*/\n/*  */\nUtils.addSmoothScroll = function(){\n  $('a[href^=\"#\"]').on('click.scroll',function() {\n    var href = this.hash;\n    var $target = $(href == '#_top' ? 'body' : href );\n    if ($target.size()) {\n\n      $.smoothScroll({\n        scrollElement: $('html,body'),\n        scrollTarget: $target,\n        direction: 'top',\n        offset: 0,\n        speed: 600,\n        easing: 'easeInOutExpo',\n        preventDefault: true,\n        beforeScroll: function(){},\n        afterScroll: function(){}\n      });\n    }\n    return false;\n  });\n}\n\n/*------------------------------------------------------------*/\n/*  */\nUtils.removeSmoothScroll = function(){\n  $('a[href^=\"#\"]').off('click.scroll' );\n}\n\n/*------------------------------------------------------------*/\n/*  */\nUtils.updateMediaMatch = function(){\n  var obj = {};\n  obj.smp = false;\n  obj.tablet = false;\n  obj.pc = false;\n  var browser = Utils.getBrowser();\n  if( browser != 'ie6' && browser != 'ie7' && browser != 'ie8' && browser != 'ie9' ){\n    obj.smp = window.matchMedia( '(max-width: 667px)' ).matches;\n    obj.tablet = window.matchMedia( '(min-width: 668px) and (max-width: 1024px)' ).matches;\n    obj.pc = window.matchMedia( '(min-width: 1025px)' ).matches;\n  }\n  return obj;\n}\n\n/*------------------------------------------------------------*/\n/*  */\n// iOSのバージョン判断\nUtils.iosVersion = function (){\n  var ua = navigator.userAgent;\n  if( ua.indexOf('iPhone') > 0 ) {\n    ua.match(/iPhone OS (\\w+){1,3}/g);\n    var version = (RegExp.$1.replace(/_/g, '')+'00').slice(0,3);\n    return version;\n  }\n}\n\n/*------------------------------------------------------------*/\n/*  */\n// Androidのバージョン判断\nUtils.androidVersion = function() {\n  var ua = navigator.userAgent;\n  if( ua.indexOf('Android') > 0 ) {\n    var version = parseFloat(ua.slice(ua.indexOf('Android')+8));\n    return version;\n  }\n}\n\n/*------------------------------------------------------------*/\n/*  */\nUtils.ieVersion = function(){\n  var ua = navigator.userAgent.toLowerCase();\n  var appVersion = window.navigator.appVersion.toLowerCase();\n  var version = undefined;\n\n  // debug(ua, appVersion);\n\n  if (ua.indexOf('msie') != -1) {\n    if (ua.indexOf('msie 6.') != -1) {\n      version = 6;\n    }\n    else if (ua.indexOf('msie 7.') != -1) {\n      version = 7;\n    }\n    else if (ua.indexOf('msie 8.') != -1) {\n      version = 8;\n    }\n    else if (ua.indexOf('msie 9.') != -1) {\n      version = 9;\n    }\n  }\n  else{\n  }\n  return version;\n}\n\n/*------------------------------------------------------------*/\n/*  */\nUtils.isEnableDevice = function(){\n  debug('iosVersion', Utils.iosVersion(), 'androidVersion', Utils.androidVersion(), 'ieVersion', Utils.ieVersion());\n  if(Utils.iosVersion() < 710 || Utils.androidVersion() < 4.1 || Utils.ieVersion() < 10 ) {\n    return false;\n  }\n  else {\n    return true;\n  }\n}\n\n\n/*------------------------------------------------------------*/\n/* set requestAnimationFrame to window (with vendor prefixes) */\n;\n( function( w, r ) {\n  w[ 'r' + r ] = w[ 'r' + r ] || w[ 'webkitR' + r ] || w[ 'mozR' + r ] || w[ 'msR' + r ] || w[ 'oR' + r ] || function( c ) {\n    w.setTimeout( c, 1000 / 60 );\n  };\n} )( window, 'equestAnimationFrame' );\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///./src/assets/js/utils/utils.js?");

/***/ }),

/***/ 0:
/*!********************************************!*\
  !*** multi ./src/assets/js/utils/utils.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/assets/js/utils/utils.js */\"./src/assets/js/utils/utils.js\");\n\n\n//# sourceURL=webpack:///multi_./src/assets/js/utils/utils.js?");

/***/ })

/******/ });