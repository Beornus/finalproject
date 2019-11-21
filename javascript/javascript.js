
document.addEventListener('DOMContentLoaded', function() {

var parallax= document.querySelector(".parallax");
document.getElementsByTagName("video")[0].controls = false;

window.addEventListener("scroll", function() {

   var scrolledHeight= window.pageYOffset,
                limit= parallax.offsetTop+ parallax.offsetHeight;
                
  if(scrolledHeight > parallax.offsetTop && scrolledHeight <= limit) {
    parallax.style.backgroundPositionY=  (scrolledHeight - parallax.offsetTop) /1.5+ "px";
 
    } else {
     parallax.style.backgroundPositionY=  "0";
    }
     });

function playing(){
	var video = document.querySelector("#video");
	if (video.paused === false) {
		if (video.hasAttribute("controls")) {
     video.removeAttribute("controls")   
	  } else {
	     video.setAttribute("controls","controls")   
	  }
	}
}

});

function pausePlayVideo(elt) {
	elt.controls = true;
	if (!elt.controls) {
		if (elt.paused) {
			elt.play();
		} else {
			elt.pause();
		}
	}
}

