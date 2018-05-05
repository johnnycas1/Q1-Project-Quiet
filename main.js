document.addEventListener("DOMContentLoaded",() => {
console.log('ready');

//this is a link to the leg's workout page//

$( "#leg" ).click(function () {
    location.href = "legworkout.html";
console.log('clicked');

});

$( "#arms" ).click(function () {
    location.href = "arms.html";
console.log('clicked');

});

  var instance = M.Carousel.init({
      fullWidth: true,
      indicators: true
    });

    //Or with jQuery

    $('.carousel.carousel-slider').carousel({
      fullWidth: true,
      indicators: true
    });


});
//
$('.carousel-slider').carousel({fullWidth: true, padding:0},setTimeout(autoplay, 4500));
 function autoplay() {
   $('.carousel').carousel('next');
   setTimeout(autoplay, 7500);
    }

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
  })
  }
