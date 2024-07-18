const slides = document.querySelectorAll(".slide");
let counter = 0;
const totalSlides = slides.length;

slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

const slideImage = () => {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
};

const nextSlide = () => {
  counter = (counter + 1) % totalSlides;
  slideImage();
};

setInterval(nextSlide, 5000); 





