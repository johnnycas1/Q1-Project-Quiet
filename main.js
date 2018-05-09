    $(document).ready(function() {




  $( "#logo-container" ).mouseenter(function() {
    $(this).animate({ 'color': 'orange-text text-darken-3', 'font-size': '3em'}).mouseleave(function() {
$(this).animate({'color': 'orange-text text-darken-3' ,'font-weight': 'bold'});
    })


  $('#head1').mouseover(function(){
    console.log('clicked');
    $(this).animate({fontSize: '6em'}, 'slow').mouseleave(function(){
      $(this).animate({fontSize: '3em'}, 'slow')
    });


  })

  $('#contact1').mouseover(function(){
    console.log('clicked');
    $(this).css({color:'#039be5'})
  })


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



//making the bmi meter//


function getYourBmi() {

     var height = Number(document.getElementById("height").value);
     var heightunits = document.getElementById("heightunits").value;

     var BMI = weight / Math.pow(height, 2);
  
document.getElementById("output").innerHTML = Math.round(BMI * 100)/100;
     if (BMI < 18.5) document.getElementById("comment").innerHTML = "Underweight";
     if (BMI >= 18.5 && BMI <= 25) document.getElementById("comment").innerHTML = "Normal";
     if (BMI >= 25 && BMI <= 30) document.getElementById("comment").innerHTML = "Obese";
     if (BMI > 30) document.getElementById("comment").innerHTML = "Overweight";
     document.getElementById("answer").value = output;
 }

});
