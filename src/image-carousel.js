export default function carousel() {
  let slideIndex = -1;
  let slides = document.querySelectorAll(".slide");

  function initialize() {
    renderDots();
    autoScrollSlides();
    nav();
  }

  function nav() {
    const previousSlide = document.querySelector(".previous");
    previousSlide.addEventListener("click", () => {
      if (slideIndex == 0) {
        slideIndex = slides.length - 1;
      } else {
        slideIndex--;
      }
      showSlide(slideIndex);
    });

    const nextSlide = document.querySelector(".next");
    nextSlide.addEventListener("click", () => {
      if (slideIndex == slides.length - 1) {
        slideIndex = 0;
      } else {
        slideIndex++;
      }
      showSlide(slideIndex);
    });

    const dots = document.querySelectorAll(".dot");
    for (let i = 0; i < dots.length; i++) {
      dots[i].addEventListener("click", () => {
        showSlide(i);
      });
    }
  }

  function showSlide(index) {
    slides[index].style.display = "block";
    for (let i = 0; i < slides.length; i++) {
      if (i != index) {
        slides[i].style.display = "none";
      }
    }
    activateDot(index);
  }

  function autoScrollSlides() {
    if (slideIndex == slides.length - 1) {
      slideIndex = 0;
    } else {
      slideIndex++;
    }
    showSlide(slideIndex);
    setTimeout(autoScrollSlides, 2000);
  }

  function renderDots() {
    const dotContainer = document.querySelector(".dot-container");
    for (let i = 0; i < slides.length; i++) {
      const dot = document.createElement("span");
      dot.classList.add("dot");
      dotContainer.appendChild(dot);
    }
  }

  function activateDot(index) {
    const dots = document.querySelectorAll(".dot");
    dots[index].classList.add("dot-active");
    for (let i = 0; i < dots.length; i++) {
      if (i != index) {
        dots[i].classList.remove("dot-active");
      }
    }
  }

  initialize();
}
