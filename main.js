    $(document).ready(function() {
      console.log('ready master Johnny');

    $( "#logo-container" ).mouseenter(function() {
      $(this).animate({ 'color': 'orange-text text-darken-3', 'font-size': '3em'}).mouseleave(function() {
      $(this).animate({'color': 'orange-text text-darken-3' ,'font-weight': 'bold'});
      })
    });

    $( "#logo-container1" ).mouseenter(function() {
      $(this).animate({ 'color': 'orange-text text-darken-3', 'font-size': '5em'}).mouseleave(function() {
      $(this).animate({'color': 'orange-text text-darken-3' ,'font-weight': 'bold'});
      })
    });

    $('#chesttext').mouseover(function(){
      $(this).animate({fontSize: '3em'}, 'slow').mouseleave(function(){
        $(this).animate({fontSize: '3em'}, 'slow').css({color:'#ef6c00'})
      });
    })

    $('#girlpushup').mouseover(function(){
      $(this).animate({fontSize: '3em'}, 'slow').mouseleave(function(){
        $(this).animate({fontSize: '3em'}, 'slow').css({color:'#ef6c00'})
      });
    })

    $('#contact1').mouseover(function(){
      $(this).css({color:'#ef6c00'})
     })

    $('#calltoAction').mouseover(function(){
      $(this).css({color:'#790103'})
    })

    $('#calltoAction2').mouseover(function(){
      $(this).animate({fontSize: '4em'}, 'slow').mouseleave(function(){
        $(this).animate({fontSize: '2.5em'}, 'slow')
      });
    })

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

    $('.carousel.carousel-slider').carousel({
      fullWidth: true,
      indicators: true
    });

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
