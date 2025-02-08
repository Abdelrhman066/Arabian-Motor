const toggleButton = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-menu a');

// Toggle the nav menu when the button is clicked
toggleButton.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// Close the nav menu when any link inside it is clicked
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
  });
});




document.addEventListener("DOMContentLoaded", function () {
  new Swiper(".mySwiper", {
      loop: true,
      navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
      },
      pagination: {
          el: ".swiper-pagination",
          clickable: true,
      },
      autoplay: {
          delay: 3000, // Change slides every 3 seconds
      },
  });
});




document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper('.swiper-container', {
      loop: true,               // Enable looping
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      },
      autoplay: {
          delay: 3000,          // 3-second auto-slide
      },
      slidesPerView: 1,         // Show one slide at a time
      spaceBetween: 10,         // Space between slides
  });
});
