


      /*  MENU */
        
      function myFunction(x) {
        x.classList.toggle("change");
      }

      function openNav() {
      document.getElementById("myNav").style.display ="block";
      document.getElementById("myNav").style.height = "100%";

      }

      function closeNav() {
      document.getElementById("myNav").style.height = "0%";

      }



/* slideshow */
     
    var slideIndex = 1;
    showSlides(slideIndex);

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
    slides[slideIndex-1].style.display = "flex";
    dots[slideIndex-1].className += " active";
    }

       