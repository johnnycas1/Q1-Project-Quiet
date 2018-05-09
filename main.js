    $(document).ready(function() {

    // $( "#logo-container" ).mouseenter( color:red ).mouseleave( color:orange );


  $( "#logo-container" ).mouseenter(function() {
    $(this).animate({ 'color': 'orange-text text-darken-3', 'font-size': '3em'}).mouseleave(function() {
$(this).animate({'color': 'orange-text text-darken-3' ,'font-weight': 'bold'});
    })


  $('#head1').mouseover(function(){
    console.log('clicked');
    $(this).animate({fontSize: '6em'}, 'slow').mouseleave(function(){
      $(this).animate({fontSize: '3em'}, 'slow')
    });
    // $(this).css({'font-size': '200%'})

  })

  $('#contact1').mouseover(function(){
    console.log('clicked');
    $(this).css({color:'#039be5'})
  })
    // $( this ).fadeOut( 900 );
    // $( this ).fadeIn( 700 );

});


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
}

});
