const mobileMenu = document.querySelector(".mobile-menu");
const mobileMenuOpenBtn = document.querySelector(".header-menu-icon-open");
const mobileMenuCloseBtn = document.querySelector(".header-menu-icon-close");

// Mobile menu
mobileMenuOpenBtn.addEventListener("click", () => {
  mobileMenu.classList.add("is-open");
});

mobileMenuCloseBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("is-open");
});

// Close menu after clicking a link
const mobileMenuLinks = document.querySelectorAll(".mobile-menu-link, .header-register");

mobileMenuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("is-open");
  });
});