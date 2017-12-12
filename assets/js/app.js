function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

$(document).ready(function(){
  $('.testimonials-carousel').slick({
    slidesToShow:1,
  	slidesToScroll: 1,
 	  autoplay: true,
  	autoplaySpeed: 3000,
  });
});

$(function() {
  $('#section05').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $('section.about').offset().top}, 500, 'linear');
  });
});

$(window).scroll(function() {
  if ($(document).scrollTop() > 200) {
    $('.topnav').addClass('color-change');
  } else {
    $('.topnav').removeClass('color-change');
  }
});