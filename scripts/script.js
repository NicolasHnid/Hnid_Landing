// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex + n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
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

var slideIndex = 0;
var count = 4000
var check = false;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var slide = document.getElementById('mySlides');
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1} 
    slides[slideIndex-1].style.display = "block"; 
    slide.onmouseenter = function () {
        check = true;
    }
    slide.onmouseleave = function () {
      check = false;
  } 
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  dots[slideIndex-1].className += " active";
}

let timerId = setInterval(() => showSlides, count);

function show() {
setTimeout(() => { 
  if (check) {
    clearInterval(timerId);
    show();
  }
  else {
    showSlides();
    show();
  } 
}, count);
}

show();

const btnUp = {
  el: document.querySelector('.totop-button'),
  shows() {
    this.el.classList.add('totop-button_show');
  },
  hide() {
    this.el.classList.remove('totop-button_show');
  },
  addEventListener() {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      scrollY > 400 ? this.shows() : this.hide();
    });
    document.querySelector('.totop-button').onclick = () => {
      this.scrolling = true;
      this.hide();
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  }
}

btnUp.addEventListener();

