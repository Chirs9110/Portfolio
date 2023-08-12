lightbox.option({
  resizeDuration: 200,
  fadeDuration:300,
  wrapAround: true,
  disableScrolling: true,
  albumLabel:	"%1/%2",
  alwaysShowNavOnTouchDevices:true,
});

$('.jumbotron').paroller();
 // JavaScript kód a folyamatjelző frissítéséhez
 window.addEventListener('scroll', function() {
  const windowHeight = window.innerHeight;
  const fullHeight = document.documentElement.scrollHeight;
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const progress = (scrollTop / (fullHeight - windowHeight)) * 100;
  document.getElementById('progress-bar-fill').style.width = progress + '%';
});

