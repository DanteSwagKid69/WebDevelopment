const carouselbb = document.querySelector(".carousel-top-list");
const trackbb = carouselbb.querySelector(".carousel__track");
const slidesbb = Array.from(trackbb.children);
// const nextButton = carousel.querySelector(".carousel__button--right");
// const prevButton = carousel.querySelector(".carousel__button--left");
// const dotsNav = carousel.querySelector(".carousel__nav");
// const dots = Array.from(dotsNav.children);

// const slideWidth = slidesbb[0].getBoundingClientRect().width;


//Arange the slides next to one another


const setSlidePosition = (slide, index, slideWidth) => {
  slide.style.left = slideWidth * index + "px";
};


const INIT = (t) => {
  const carousels = Array.from(document.querySelectorAll(".carousel"));
  console.log(carousels);
  carousels.forEach(carousel => {
    const track = carousel.querySelector(".carousel__track");
    const slides = Array.from(track.children);
    const slideWidth = slides[0].getBoundingClientRect().width;
    console.log(slideWidth);

    for (let i = 0; i < slides.length; i++) {
      setSlidePosition(slides[i], i, slideWidth);
    }
  });
}

const moveToSlide = (track, currentSlide, targetSlide) => {
  track.style.transform = "translateX(-" + targetSlide.style.left + ")";
  currentSlide.classList.remove("current-slide");
  targetSlide.classList.add("current-slide");
};

const hideShowArrows = (slides, prevButton, nextButton, targetIndex) => {
  if (targetIndex === 0) {
    prevButton.classList.add("is-hidden");
    nextButton.classList.remove("is-hidden");
  } else if (targetIndex === slides.length - 1) {
    prevButton.classList.remove("is-hidden");
    nextButton.classList.add("is-hidden");
  } else {
    prevButton.classList.remove("is-hidden");
    nextButton.classList.remove("is-hidden");
  }
};

const updateDots = (currentDot, targetDot) => {
  currentDot.classList.remove("current-slide");
  targetDot.classList.add("current-slide");
};

//When I click left, move left
const PrevSlide = (t) => {
  const carousel = t.parentElement;
  const prevButton = carousel.querySelector(".carousel__button--left");
  const nextButton = carousel.querySelector(".carousel__button--right");
  const track = carousel.querySelector(".carousel__track");
  const slides = Array.from(track.children);
  const currentSlide = track.querySelector(".current-slide");
  const prevSlide = currentSlide.previousElementSibling;
  const dotsNav = carousel.querySelector(".carousel__nav");
  const currentDot = dotsNav.querySelector(".current-slide");
  const prevDot = currentDot.previousElementSibling;
  const prevIndex = slides.findIndex((slide) => slide === prevSlide);

  moveToSlide(track, currentSlide, prevSlide);
  updateDots(currentDot, prevDot);
  hideShowArrows(slides, prevButton, nextButton, prevIndex);
};

const NextSlide = (t) => {
  const carousel = t.parentElement;
  const prevButton = carousel.querySelector(".carousel__button--left");
  const nextButton = carousel.querySelector(".carousel__button--right");
  const track = carousel.querySelector(".carousel__track");
  const slides = Array.from(track.children);
  const currentSlide = track.querySelector(".current-slide");
  const nextSlide = currentSlide.nextElementSibling;
  const dotsNav = carousel.querySelector(".carousel__nav");
  const currentDot = dotsNav.querySelector(".current-slide");
  const nextDot = currentDot.nextElementSibling;
  const nextIndex = slides.findIndex((slide) => slide === nextSlide);

  moveToSlide(track, currentSlide, nextSlide);
  updateDots(currentDot, nextDot);
  hideShowArrows(slides, prevButton, nextButton, nextIndex);
};

const DotsHandler = (t) => {
  const carousel = t.parentElement.parentElement;
  const prevButton = carousel.querySelector(".carousel__button--left");
  const nextButton = carousel.querySelector(".carousel__button--right");
  const track = carousel.querySelector(".carousel__track");
  const slides = Array.from(track.children);
  const dotsNav = carousel.querySelector(".carousel__nav");
  const currentDot = dotsNav.querySelector(".current-slide");
  const dots = Array.from(dotsNav.children);
  const currentSlide = track.querySelector(".current-slide");

  const dotIndex = dots.findIndex((dot) => dot === t);
  const targetSlide = slides[dotIndex];
  const targetDot = dots[dotIndex];

  moveToSlide(track, currentSlide, targetSlide);
  updateDots(currentDot, targetDot);
  hideShowArrows(slides, prevButton, nextButton, dotIndex);
};

// //When I click the nav indicators, move to that slide
// dotsNav.addEventListener("click", (e) => {
//   //What indicator was clicked on?
//   const targetDot = e.target.closest("button");

//   if (!targetDot) return;

//   const currentSlide = track.querySelector(".current-slide");
//   const currentDot = dotsNav.querySelector(".current-slide");
//   const targetIndex = dots.findIndex((dot) => dot === targetDot);
//   const targetSlide = slides[targetIndex];

//   moveToSlide(track, currentSlide, targetSlide);
//   updateDots(currentDot, targetDot);
//   hideShowArrows(slides, prevButton, nextButton, targetIndex);
// });
