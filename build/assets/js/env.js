var env = {"path":{"root":"/","endpoint":"/"},"meta":{"title":"test","description":"","keywords":""},"facebook":{"appid":"0000000000000000"},"ga":{"id":"UA-xxx-1"},"production":false,"store@sparkles":{}}

window.fbAsyncInit = function() {
  FB.init({
    appId      : env.facebook.appid,
    xfbml      : true,
    version    : 'v2.2'
  });

  // FB.Event.subscribe( 'edge.create', function(response) {
  // });

  // FB.Event.subscribe( 'edge.remove', function(response) {
  // });

  // FB.Event.subscribe( 'comment.create', function(response) {
  // });

  // FB.Event.subscribe( 'comment.remove', function(response) {
  // });
};

(function(d, s, id){
   var js, fjs = d.getElementsByTagName(s)[0];
   if (d.getElementById(id)) {return;}
   js = d.createElement(s); js.id = id;
   js.src = "//connect.facebook.net/ja_JP/sdk.js";
   fjs.parentNode.insertBefore(js, fjs);
 }(document, 'script', 'facebook-jssdk'));

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
ga('create', env.ga.id, 'auto');
ga('send', 'pageview');
