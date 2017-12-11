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