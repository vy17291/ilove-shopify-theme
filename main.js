

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.querySelectorAll(".mySlides");
  console.log(slides);
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
const sideMenu = document.querySelector('.side-menu');
const closeSideMenu = document.querySelector('#close-brand');
closeSideMenu.addEventListener('click', () => {
  sideMenu.style.display = 'none';
})
const colapseMenuBtn = document.querySelector('.collapse-menu');
colapseMenuBtn.addEventListener('click', () => {
  sideMenu.style.display = 'block';
})