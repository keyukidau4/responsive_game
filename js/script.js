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

// slide swiper

var swiper = new Swiper(".trending-content", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
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
