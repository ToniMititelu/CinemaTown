var mouseOverFunction = function () {
    this.style.backgroundColor = '#DC143C'
    this.style.color = 'white'
};

var mouseOutFunction = function () {
    this.style.backgroundColor = 'transparent'
    this.style.color = 'black'
};

var boxes = document.getElementsByClassName('box')
var links = ['/movies', '/prices', '/snacks']

for(i=0; i < boxes.length; i++) {
    boxes[i].onmouseover = mouseOverFunction;
    boxes[i].onmouseout = mouseOutFunction;
    var url = 'location.href = "' + links[i] + '"'
    boxes[i].setAttribute('onclick', url);
}


// --------------- Slideshow ------------------ //


var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {
      slideIndex = 1
  }    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 3000); 
}


