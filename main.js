    $(document).ready(function() {
        $('input#input_text, textarea#textarea1').characterCounter();
      });


    document.addEventListener("DOMContentLoaded",() => {
    console.log('ready');

    //TO BE CHECKED FOR FUNCTIONALITY//

    // $( "#" ).click(function () {
    //     location.href = "contact.html";
    // console.log('clicked');
    //
    // });

    $( "#leg1" ).click(function () {
        location.href = "legworkout.html";
    });

    $( "#arms1" ).click(function () {
        location.href = "arms.html";
    });

    $( "#abs1" ).click(function () {
        location.href = "abs.html";
    });

    $( "#contact" ).click(function () {
        location.href = "contact.html";
    });

//TEST CODE//

  // var instance = M.Carousel.init({
  //     fullWidth: true,
  //     indicators: true
  //   });

    //Or with jQuery

    $('.carousel.carousel-slider').carousel({
      fullWidth: true,
      indicators: true
    });
});

// TEST CODE TO MAKE THE CAROUSEL AUTOPLAY
//
// $('.carousel-slider').carousel({fullWidth: true, padding:0});
//  function autoplay() {
//    $('.carousel').carousel('next');
//
//     }

var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '390',
    width: '640',
    videoId: 'player_uid_312879083_1',
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  })

  $(document).on('mouseover', '#player', function() {
    player.playVideo();
  });
  $(document).on('mouseout', '#player', function() {
    player.pauseVideo();
  });


  }
