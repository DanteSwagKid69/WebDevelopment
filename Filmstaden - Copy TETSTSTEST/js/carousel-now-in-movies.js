const nimCarousel = document.querySelector(".carousel-now-in-movies");
const nimTrack = nimCarousel.querySelector(".carousel-nim__track");
const nimSlides = Array.from(nimTrack.children);
const nimNextButton = nimCarousel.querySelector(".carousel-nim__button--right");
const nimPrevButton = nimCarousel.querySelector(".carousel-nim__button--left");
const nimDotsNav = nimCarousel.querySelector(".carousel-nim__nav");
const nimDots = Array.from(nimDotsNav.children);

const nimSlideWidth = nimSlides[0].getBoundingClientRect().width;

console.log(nimSlideWidth);

const nimSetSlidePosition = (slide, index) => {
  slide.style.left = nimSlideWidth * index + "px";
};
nimSlides.forEach(nimSetSlidePosition);

const nimMoveSlide = (nimTrack, nimCurrentSlide, nimTargetSlide) => {
  nimTrack.style.transform = "translateX(-" + nimTargetSlide.style.left + ")";
  nimCurrentSlide.classList.remove("nim-current-slide");
  nimTargetSlide.classList.add("nim-current-slide");
};

const nimChangeDots = (currentDot, targetDot) => {
  currentDot.classList.remove("carousel-nim__selected-dot");
  targetDot.classList.add("carousel-nim__selected-dot");
};

const nimHideArrows = (nimSlides, nimPrevButton, nimNextButton, nimTargetIndex) => {
    if (nimTargetIndex === 0)
    {
        nimPrevButton.classList.add("carousel-nim__hidden");
        nimNextButton.classList.remove("carousel-nim__hidden");
    } else if (nimTargetIndex === nimSlides.length - 1)
    {
        nimPrevButton.classList.remove("carousel-nim__hidden");
        nimNextButton.classList.add("carousel-nim__hidden");
    } else {
        nimPrevButton.classList.remove("carousel-nim__hidden");
        nimNextButton.classList.remove("carousel-nim__hidden");
    }
};

nimNextButton.addEventListener("click", (e) => {
  const nimCurrentSlide = nimTrack.querySelector(".nim-current-slide");
  const nimTargetSlide = nimCurrentSlide.nextElementSibling;
  const nimCurrentDot = nimDotsNav.querySelector(".carousel-nim__selected-dot");
  const nimNextDot = nimCurrentDot.nextElementSibling;
  const nimIndex = nimSlides.findIndex(slide => slide === nimTargetSlide);
  nimMoveSlide(nimTrack, nimCurrentSlide, nimTargetSlide);
  nimChangeDots(nimCurrentDot, nimNextDot);
  nimHideArrows(nimSlides, nimPrevButton, nimNextButton, nimIndex);
  console.log(nimTargetSlide);
});

nimPrevButton.addEventListener("click", (e) => {
  const nimCurrentSlide = nimTrack.querySelector(".nim-current-slide");
  const nimTargetSlide = nimCurrentSlide.previousElementSibling;
  const nimCurrentDot = nimDotsNav.querySelector(".carousel-nim__selected-dot");
  const nimPrevDot = nimCurrentDot.previousElementSibling;
  const nimIndex = nimSlides.findIndex(slide => slide === nimTargetSlide);
  nimMoveSlide(nimTrack, nimCurrentSlide, nimTargetSlide);
  nimChangeDots(nimCurrentDot, nimPrevDot);
  nimHideArrows(nimSlides, nimPrevButton, nimNextButton, nimIndex);
  console.log(nimTargetSlide);
});

nimDotsNav.addEventListener("click", (e) => {
  const nimTargetDot = e.target.closest("button");
  const nimCurrentDot = nimDotsNav.querySelector(".carousel-nim__selected-dot");

  if (!nimTargetDot) return;

  const nimCurrentSlide = nimCarousel.querySelector(".nim-current-slide");
  const nimDotindex = nimDots.findIndex((dot) => dot === nimTargetDot);
  const nimTargetSlide = slides[nimDotindex];

  nimChangeDots(nimCurrentDot, nimTargetDot);
  nimMoveSlide(nimTrack, nimCurrentSlide, nimTargetSlide);
  nimHideArrows(nimSlides, nimPrevButton, nimNextButton, nimDotindex);
});
