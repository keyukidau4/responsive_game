let menuIcon = document.querySelector(".menu-icon");
let menu = document.querySelector(".menu");

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("move");
  menu.classList.toggle("active");
});

// Notification

let bell = document.querySelector(".notification");
let bellIcon = document.querySelector("#bell-icon");

bellIcon.addEventListener("mouseover", () => {
  bell.classList.add("active");
});

bellIcon.addEventListener("mouseout", () => {
  bell.classList.remove("active");
});

// trending slide swiper

var swiper = new Swiper(".trending-content", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay:{
    delay:5000,
    disableOnInteraction:false,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    1068: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
  },
});

//new effect coverflow swiper

var swiper1 = new Swiper(".new-content", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  autoplay:{
    delay:5000,
    disableOnInteraction:false,
  },
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});
