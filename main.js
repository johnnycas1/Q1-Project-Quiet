$(document).ready(function() {
    $('input#input_text, textarea#textarea1').characterCounter();
  });


document.addEventListener("DOMContentLoaded",() => {
console.log('ready');


$( "#" ).click(function () {
    location.href = "contact.html";
console.log('clicked');

});



$( "#leg" ).click(function () {
    location.href = "legworkout.html";
console.log('clicked');

});

$( "#arms" ).click(function () {
    location.href = "arms.html";
console.log('clicked');

});

$( "#abs" ).click(function () {
    location.href = "abs.html";
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
