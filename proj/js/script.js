window.onscroll = function() {myFunction()};

var navbar = document.querySelector("section");
var nav= document.querySelector('nav');
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    nav.classList.add("sticky");
  } else if(window.pageYOffset < sticky) {
    nav.classList.remove("sticky");
  }
  else{
    nav.classList.remove("sticky");
  }
}



$('.count').each(function () {
  $(this).prop('Counter',0).animate({
      Counter: $(this).text()
  }, {
      duration: 6000,
      easing: 'swing',
      step: function (now) {
          $(this).text(Math.ceil(now));
      }
  });
});




  $(window).scroll(function() {
    $(".slideanim").each(function(){
      var pos = $(this).offset().top;
  
      var winTop = $(window).scrollTop();
      if (pos < winTop + 600) {
        $(this).addClass("slide");
      }
    });
  });
  
  $(window).scroll(function() {
    $(".slideaniml").each(function(){
      var pos1 = $(this).offset().top;
  
      var winTop1 = $(window).scrollTop();
      if (pos1 < winTop1 + 400) {
        $(this).addClass("slidel");
      }
    });
  });

  $(window).scroll(function() {
    $(".slideanimr").each(function(){
      var pos2 = $(this).offset().top;
  
      var winTop2 = $(window).scrollTop();
      if (pos2 < winTop2 + 400) {
        $(this).addClass("slider");
      }
    });
  });



   


