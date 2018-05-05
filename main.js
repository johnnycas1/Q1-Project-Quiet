$(document).ready(function(){


  var instance = M.Carousel.init({
      fullWidth: true,
      indicators: true
    });

    // Or with jQuery

    $('.carousel.carousel-slider').carousel({
      fullWidth: true,
      indicators: true
    });

})

var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '390',
    width: '640',
    videoId: 'M7lc1UVf-VE',
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

$('.carousel-slider').carousel({fullWidth: true, padding:0},setTimeout(autoplay, 4500));
 function autoplay() {
   $('.carousel').carousel('next');
   setTimeout(autoplay, 7500);
    }
