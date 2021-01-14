/* js Carousel */

"use strict";

let slideIndex = 1;
showSlides(slideIndex);

//Auto slide

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  console.log(slides);
  console.log(dots);
  console.log(n);

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// Auto advance; comment out to switch off or change milliseconds (5000) to set desired interval
// setInterval(function () {
//   document.getElementById("next").click();
// }, 5000);

setInterval(() => {
  document.getElementById("next").click();
}, 5000);

// if (document.getElementById != null) {
//   document.write("Yes it's a DOM2 compliant browser");
// } else document.write("No it's not a DOM compliant browser");
