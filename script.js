const toggleButton = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-menu a');

// // Toggle the nav menu when the button is clicked
// toggleButton.addEventListener('click', () => {
//   navMenu.classList.toggle('active');
// });

// // Close the nav menu when any link inside it is clicked
// navLinks.forEach(link => {
//   link.addEventListener('click', () => {
//     navMenu.classList.remove('active');
//   });
// });
// // ----------------------------------------
// const englishPage = document.getElementById("english");
// const arabicPage = document.getElementById("arabic");
// const englishBtn = document.getElementById("en");
// const arabicBtn = document.getElementById("ar");

// arabicBtn.addEventListener("click",function(){
//   arabicPage.classList.add("active");
//   englishPage.classList.remove("active");
// })
// englishBtn.addEventListener("click",function(){
//   englishPage.classList.add("active");
//   arabicPage.classList.remove("active");
// })
// ----------------------------------------

// Function to get the active navigation elements
function getActiveNavElements() {
  const activeSection = document.querySelector("section.active"); // Get the active section
  return {
    toggleButton: activeSection.querySelector(".nav-toggle"), // Toggle button in active section
    navMenu: activeSection.querySelector(".nav-menu"), // Nav menu in active section
    navLinks: activeSection.querySelectorAll(".nav-menu a"), // Nav links in active section
  };
}

// Toggle the nav menu when the button is clicked
document.addEventListener("click", (event) => {
  if (event.target.closest(".nav-toggle")) {
    const { navMenu } = getActiveNavElements();
    navMenu.classList.toggle("active");
  }
});

// Close the nav menu when any link inside it is clicked
document.addEventListener("click", (event) => {
  if (event.target.closest(".nav-menu a")) {
    const { navMenu } = getActiveNavElements();
    navMenu.classList.remove("active");
  }
});

// Language toggle functionality
const englishPage = document.getElementById("english");
const arabicPage = document.getElementById("arabic");
const englishBtn = document.getElementById("en");
const arabicBtn = document.getElementById("ar");

// Function to switch to Arabic
arabicBtn.addEventListener("click", function () {
  arabicPage.classList.add("active");
  englishPage.classList.remove("active");
});

// Function to switch to English
englishBtn.addEventListener("click", function () {
  englishPage.classList.add("active");
  arabicPage.classList.remove("active");
});

// Set default language on page load
window.addEventListener("load", function () {
  englishPage.classList.add("active"); // Show English by default
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
