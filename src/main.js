const navMenu = document.getElementById("nav-menu");
const navLink = document.querySelectorAll(".nav-link");
const hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("left-[0]");
  hamburger.classList.toggle("ri-close-large-line");
});

navLink.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.toggle("left-[0]");
    hamburger.classList.toggle("ri-close-large-line");
  });
});

// swiperjs best seller
const swiper1 = new Swiper(".swiper", {
  loop: true,
  autoplay: {
    delay: 1500,
  },
  spaceBetween: 25,
  grabCursor: true,
  breakpoints: {
    340: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1180: {
      slidesPerView: 4,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: ".button-next-c",
    prevEl: ".button-prev-c",
  },
});

// swiperjs Review
let swiper2 = new Swiper(".swiper2", {
  // Optional parameters
  loop: true,
  autoplay: {
    delay: 3000,
  },
  spaceBetween: 25,
  grabCursor: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination2",
    clickable: true,
  },

  breakpoints: {
    340: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1180: {
      slidesPerView: 3,
    },
  },
});
