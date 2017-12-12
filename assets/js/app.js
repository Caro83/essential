/* Menu hamburger */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

$(document).ready(function(){
  $(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if (scroll < 300) {
      $(".topnav").css("background" , "transparent");
      $(".topnav").css("color", "#fff");
      $(".topnav a").css("color", "#fff");
    }

    else{
      $(".topnav").css("background" , "#fff");
      $(".topnav").css("color", "#000");
      $(".topnav a").css("color", "#000");
    }
  })
})

/* Change la couleur de la navbar en scrollant */
/*$(window).scroll(function() {
  if ($(document).scrollTop() > 200) {
    $('.topnav').addClass('color-change');
  } else {
    $('.topnav').removeClass('color-change');
  }
});

/* BOuton scroll down */
$(function() {
  $('#section05').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $('section.about').offset().top}, 500, 'linear');
  });
});

/* Carrousel */
$(document).ready(function(){
  $('.testimonials-carousel').slick({
    slidesToShow:1,
  	slidesToScroll: 1,
 	  autoplay: true,
  	autoplaySpeed: 3000,
  });
});


