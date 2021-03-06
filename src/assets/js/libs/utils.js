/*------------------------------------------------------------*/
/* console.log のかわり */
window.debug = function() {
  if( window.console && window.console.log ) {
    if( global.debug ){
      window.console.log.apply(console, arguments);
    }
  }
};

window.Utils = [];

/*------------------------------------------------------------*/
/*  */
Utils.twitterWebIntent = function( text, url, hashtag ) {
  debug( 'text: ' + text );
  debug( 'url: ' + url );
  debug( 'hashtag: ' + hashtag );
  var enc_text = encodeURIComponent( text );
  var enc_url = encodeURIComponent( url );
  var enc_hashtag = encodeURIComponent( hashtag );
  var url = 'https://twitter.com/share?url='+enc_url+'&hashtags=' + enc_hashtag + '&text=' + enc_text;
  window.open( url, '_blank' );
};

/*------------------------------------------------------------*/
/*  */
Utils.facebookFeed = function( name, description, picture, url ) {
  debug( 'name: ' + name );
  debug( 'description: ' + description );
  debug( 'picture: ' + picture );
  debug( 'url: ' + url );

  // if( !global.global.domain.match('toyota.jp') ){
  //   url = url.replace('toyota.jp', 'test-tohyo.hys-inc.jp');
  //   picture = picture.replace('toyota.jp', 'test-tohyo.hys-inc.jp');
  // }

  FB.ui({
    method: 'feed',
    // message: 'test message',
    // caption: 'caption',
    name: name,
    description: (
      description
    ),
    link: url,
    picture: picture
  },
  function(response) {
    if (response && !response.error_code) {
      // alert('Posting completed.');
    } else {
      // alert('Error while posting.');
    }
  });
};

/*------------------------------------------------------------*/
Utils.getDeviceOrientation = function(){
  // portrait
  if(window.innerHeight > window.innerWidth){
    return 'portrait';
  }
  // landscape
  else{
    return 'landscape';
  }
};

/*------------------------------------------------------------*/
/*  */
Utils.zeroPad = function( number, length ) {
  return( Array( length ).join( '0' ) + number ).slice( -length );
};

Utils.numComma = function( num ) {
  return String( num ).replace( /(\d)(?=(\d\d\d)+(?!\d))/g, '$1,' );
}

/*------------------------------------------------------------*/
/*  */
Utils.canvasDetector = {
  canCanvas: function() {
    return !!window.CanvasRenderingContext2D
  },
  canWebGL: function() {
    try {
      return !!window.WebGLRenderingContext && !!document.createElement('canvas').getContext('experimental-webgl');
    } catch (e) {
      return false;
    }
  }
};

/*------------------------------------------------------------*/
/*  */
Utils.formatDate = function(date, format) {
  if (!format) format = 'YYYY-MM-DD hh:mm:ss.SSS';
  format = format.replace(/YYYY/g, date.getFullYear());
  format = format.replace(/MM/g, ('0' + (date.getMonth() + 1)).slice(-2));
  format = format.replace(/DD/g, ('0' + date.getDate()).slice(-2));
  format = format.replace(/hh/g, ('0' + date.getHours()).slice(-2));
  format = format.replace(/mm/g, ('0' + date.getMinutes()).slice(-2));
  format = format.replace(/ss/g, ('0' + date.getSeconds()).slice(-2));
  if (format.match(/S/g)) {
    var milliSeconds = ('00' + date.getMilliseconds()).slice(-3);
    var length = format.match(/S/g).length;
    for (var i = 0; i < length; i++) format = format.replace(/S/, milliSeconds.substring(i, i + 1));
  }
  return format;
};

/*------------------------------------------------------------*/
/*  */
Utils.separate = function( num ) {
  return String( num ).replace( /(\d)(?=(\d\d\d)+(?!\d))/g, '$1,' );
};

/*------------------------------------------------------------*/
/*  */
Utils.browserLanguage = function() {
  var ua = window.navigator.userAgent.toLowerCase();
  try {
    // chrome
    if( ua.indexOf( 'chrome' ) != -1 ){
      return ( navigator.languages[0] || navigator.browserLanguage || navigator.language || navigator.userLanguage).substr(0,2);
    }
    // それ以外
    else{
      return ( navigator.browserLanguage || navigator.language || navigator.userLanguage).substr(0,2);
    }
  }
  catch( e ) {
    return undefined;
  }
}

/*------------------------------------------------------------*/
/* スマートフォンの判定 */
Utils.isSmartDevice = function() {
  var ua = navigator.userAgent;
  var flag = false;

  if( ( ua.indexOf( 'iPhone' ) > 0 && ua.indexOf( 'iPad' ) == -1 ) || ua.indexOf( 'iPod' ) > 0 || ua.indexOf( 'Android' ) > 0 && ua.indexOf( 'Mobile' ) > 0 ) {
    flag = 'smartphone';
  } else if( ua.indexOf( 'iPad' ) > 0 || ua.indexOf( 'Android' ) > 0 ) {
    flag = 'tablet';
  }
  return flag;
};

/*------------------------------------------------------------*/
/*
 *  OSを取得
 *  @return (win, mac, linux)
 */
Utils.getOS = function() {
  var os;
  var ua = window.navigator.userAgent.toLowerCase();
  if( ua.match( /win/ ) ) {
    os = "win";
  } else if( ua.match( /mac|ppc/ ) ) {
    os = "mac";
  } else if( ua.match( /linux/ ) ) {
    os = "linux";
  } else {
    os = "other";
  }
  return os;
}

/*------------------------------------------------------------*/
/*
 *  ブラウザ名を取得
 *  @return (ie6、ie7、ie8、ie9、ie10、ie11、chrome、safari、opera、firefox、unknown)
 */
Utils.getBrowser = function() {
  var ua = window.navigator.userAgent.toLowerCase();
  var ver = window.navigator.appVersion.toLowerCase();
  var name = 'unknown';

  if( ua.indexOf( "msie" ) != -1 ) {
    if( ver.indexOf( "msie 6." ) != -1 ) {
      name = 'ie6';
    } else if( ver.indexOf( "msie 7." ) != -1 ) {
      name = 'ie7';
    } else if( ver.indexOf( "msie 8." ) != -1 ) {
      name = 'ie8';
    } else if( ver.indexOf( "msie 9." ) != -1 ) {
      name = 'ie9';
    } else if( ver.indexOf( "msie 10." ) != -1 ) {
      name = 'ie10';
    } else {
      name = 'ie';
    }
  } else if( ua.indexOf( 'trident/7' ) != -1 ) {
    name = 'ie11';
  } else if( ua.indexOf( 'chrome' ) != -1 ) {
    name = 'chrome';
  } else if( ua.indexOf( 'safari' ) != -1 ) {
    name = 'safari';
  } else if( ua.indexOf( 'opera' ) != -1 ) {
    name = 'opera';
  } else if( ua.indexOf( 'firefox' ) != -1 ) {
    name = 'firefox';
  }
  return name;
};

/*------------------------------------------------------------*/
/*
 *  対応ブラウザかどうか判定
 *  @param browsers 対応ブラウザ名を配列で渡す(ie6、ie7、ie8、ie9、ie10、ie11、chrome、safari、opera、firefox)
 *  @return サポートしてるかどうかをtrue/falseで返す
 */
Utils.isSupported = function( browsers ) {
  var thusBrowser = getBrowser();
  for( var i = 0; i < browsers.length; i++ ) {
    if( browsers[ i ] == thusBrowser ) {
      return true;
      exit;
    }
  }
  return false;
};


/*------------------------------------------------------------*/
/*  */
Utils.normalize = function( point, scale ) {
  var norm = Math.sqrt( point.x * point.x + point.y * point.y );
  if( norm != 0 ) { // as3 return 0,0 for a point of zero length
    point.x = scale * point.x / norm;
    point.y = scale * point.y / norm;
  }
};

/*------------------------------------------------------------*/
/*  */
Utils.normalize3 = function( p, scale ) {
  var norm = Math.sqrt( p.x * p.x + p.y * p.y + p.z * p.z );
  if( norm != 0 ) { // as3 return 0,0 for a point of zero length
    p.x = scale * p.x / norm;
    p.y = scale * p.y / norm;
    p.z = scale * p.z / norm;
  }
  return p;
};

/*------------------------------------------------------------*/
/*  */
Utils.pointLength3 = function( p ) {
  return Math.sqrt( p.x * p.x + p.y * p.y + p.z * p.z );
};

/*------------------------------------------------------------*/
/*  */
Utils.getParams = function( params ) {
  var obj = params;
  var params = location.href.split( '?' )[ 1 ];

  var hash = function( key, value ) {
    var h = {};
    h[ key ] = value;
    return h;
  }

  if( params ) {
    params = params.split( '&' );
    for( var i = 0; i < params.length; i++ ) {
      var p = params[ i ].split( '=' );
      $.extend( obj, hash( p[ 0 ], p[ 1 ] ) );
      //debug( obj[i] );
    }
  }
  return obj;
};

/*------------------------------------------------------------*/
/*  */
Utils.getQuery = function() {
  var query = window.location.search.substring( 1 );
  var parms = query.split( '&' );
  var p = {};

  for( var i = 0; i < parms.length; i++ ) {
    var pos = parms[ i ].indexOf( '=' );
    if( pos > 0 ) {
      var key = parms[ i ].substring( 0, pos );
      var val = parms[ i ].substring( pos + 1 );
      p[ key ] = val;
    }
  }
  return p;
}

/*------------------------------------------------------------*/
/*  */
Utils.addSmoothScroll = function(){
  $('a[href^="#"]').on('click.scroll',function() {
    var href = this.hash;
    var $target = $(href == '#_top' ? 'body' : href );
    if ($target.size()) {

      $.smoothScroll({
        scrollElement: $('html,body'),
        scrollTarget: $target,
        direction: 'top',
        offset: 0,
        speed: 600,
        easing: 'easeInOutExpo',
        preventDefault: true,
        beforeScroll: function(){},
        afterScroll: function(){}
      });
    }
    return false;
  });
}

/*------------------------------------------------------------*/
/*  */
Utils.removeSmoothScroll = function(){
  $('a[href^="#"]').off('click.scroll' );
}

/*------------------------------------------------------------*/
/*  */
Utils.updateMediaMatch = function(){
  var obj = {};
  obj.smp = false;
  obj.tablet = false;
  obj.pc = false;
  var browser = Utils.getBrowser();
  if( browser != 'ie6' && browser != 'ie7' && browser != 'ie8' && browser != 'ie9' ){
    obj.smp = window.matchMedia( '(max-width: 667px)' ).matches;
    obj.tablet = window.matchMedia( '(min-width: 668px) and (max-width: 1024px)' ).matches;
    obj.pc = window.matchMedia( '(min-width: 1025px)' ).matches;
  }
  return obj;
}

/*------------------------------------------------------------*/
/*  */
// iOSのバージョン判断
Utils.iosVersion = function (){
  var ua = navigator.userAgent;
  if( ua.indexOf('iPhone') > 0 ) {
    ua.match(/iPhone OS (\w+){1,3}/g);
    var version = (RegExp.$1.replace(/_/g, '')+'00').slice(0,3);
    return version;
  }
}

/*------------------------------------------------------------*/
/*  */
// Androidのバージョン判断
Utils.androidVersion = function() {
  var ua = navigator.userAgent;
  if( ua.indexOf('Android') > 0 ) {
    var version = parseFloat(ua.slice(ua.indexOf('Android')+8));
    return version;
  }
}

/*------------------------------------------------------------*/
/*  */
Utils.ieVersion = function(){
  var ua = navigator.userAgent.toLowerCase();
  var appVersion = window.navigator.appVersion.toLowerCase();
  var version = undefined;

  // debug(ua, appVersion);

  if (ua.indexOf('msie') != -1) {
    if (ua.indexOf('msie 6.') != -1) {
      version = 6;
    }
    else if (ua.indexOf('msie 7.') != -1) {
      version = 7;
    }
    else if (ua.indexOf('msie 8.') != -1) {
      version = 8;
    }
    else if (ua.indexOf('msie 9.') != -1) {
      version = 9;
    }
  }
  else{
  }
  return version;
}

/*------------------------------------------------------------*/
/*  */
Utils.isEnableDevice = function(){
  debug('iosVersion', Utils.iosVersion(), 'androidVersion', Utils.androidVersion(), 'ieVersion', Utils.ieVersion());
  if(Utils.iosVersion() < 710 || Utils.androidVersion() < 4.1 || Utils.ieVersion() < 10 ) {
    return false;
  }
  else {
    return true;
  }
}


/*------------------------------------------------------------*/
/* set requestAnimationFrame to window (with vendor prefixes) */
;
( function( w, r ) {
  w[ 'r' + r ] = w[ 'r' + r ] || w[ 'webkitR' + r ] || w[ 'mozR' + r ] || w[ 'msR' + r ] || w[ 'oR' + r ] || function( c ) {
    w.setTimeout( c, 1000 / 60 );
  };
} )( window, 'equestAnimationFrame' );
