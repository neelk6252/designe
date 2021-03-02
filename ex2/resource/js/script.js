var nav = document.querySelector("#navi");
var navbar = document.querySelector(".navi");
var navTop = nav.offsetTop;
function stickyNavigation() { 
   if(window.scrollY >= navTop ){
      navbar.classList.add("sticky");
      navbar.classList.remove(".nav li a:link,.nav li a:visited");
   }
   else{
      navbar.classList.remove("sticky");
      navbar.classList.add(".nav li a:link,.nav li a:visited");
   }
  }
  window.addEventListener('scroll', stickyNavigation);