// slide banner home
let SttSlide = 1;
showSlides(SttSlide);

// change button
function plusSlides(n) {
  showSlides(SttSlide += n);
}

// thumbnail image controls
function currentSlide(n) {
  showSlides(SttSlide = n);
}

function showSlides(n) {
  let GS = document.getElementsByClassName("mySlides");
  let get_dot = document.getElementsByClassName("brand__click-change");
  if (n > GS.length) {SttSlide = 1}
  if (n < 1) {SttSlide = GS.length}
  for (let i = 0; i < GS.length; i++) {
    GS[i].style.display = "none";
  }
  for (let i = 0; i < get_dot.length; i++) {
    get_dot[i].className = get_dot[i].className.replace(" active", "");
  }
  GS[SttSlide-1].style.display = "block";
  get_dot[SttSlide-1].className += " active";
}

//auto change slide
let SttAutoRun = 0;
AutoRunSlide();

function AutoRunSlide() {
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("brand__click-change");
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    SttAutoRun++;
    if (SttAutoRun > slides.length) {SttAutoRun = 1}    
    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[SttAutoRun-1].style.display = "block";  
    dots[SttAutoRun-1].className += " active";
    setTimeout(AutoRunSlide, 5000);
}

/*
    ======================================================================
*/
