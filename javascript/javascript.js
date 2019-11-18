document.addEventListener('DOMContentLoaded', function() {
var parallax= document.querySelector(".parallax");

window.addEventListener("scroll", function() {

   var scrolledHeight= window.pageYOffset,
                limit= parallax.offsetTop+ parallax.offsetHeight;
                
  if(scrolledHeight > parallax.offsetTop && scrolledHeight <= limit) {
    parallax.style.backgroundPositionY=  (scrolledHeight - parallax.offsetTop) /1.5+ "px";
 
    } else {
     parallax.style.backgroundPositionY=  "0";
    }
     });

var scrollpos = window.scrollY;
var chart = document.querySelector(".chart");
var scrolltop = chart.scrollTop;

function add_class_on_scroll() {
    chart.classList.add("circle-chart__circle");
}

function remove_class_on_scroll() {
    chart.classList.remove("circle-chart__circle");
}

window.addEventListener('scroll', function(){ 
    //Here you forgot to update the value
    scrollpos = window.scrollY;
 remove_class_on_scroll();
    if(scrollpos > scrolltop + 160){
        add_class_on_scroll();
    }
    else {
        remove_class_on_scroll();
    }
    console.log(scrollpos);
});

});


