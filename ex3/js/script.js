var textWrapper = "Hello This IS My third exercise With Animation Text";
var i=0;
var speed=20;
function typeWriter() {
    if (i < textWrapper.length) {
      document.querySelector("h1").innerHTML += textWrapper.charAt(i);
     
      i++;
      setTimeout(typeWriter, speed);
    }
  }
  var intervel=setInterval(typeWriter,1000);
  var a=document.querySelector(".navstart").offsetTop;
  var b = document.querySelector(".exnav");
  function scrollng(){
    if(window.scrollY >= a)
    {
      b.classList.add("sticky");
    }else{
      b.classList.remove("sticky");
    }
  }
  window.addEventListener('scroll',scrollng);
  console.log(a,b);