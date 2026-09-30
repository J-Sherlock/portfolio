document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const nav = document.querySelector("nav");

  hamburger.addEventListener("click", function () {
    const isOpen = hamburger.classList.toggle("active");

    nav.classList.toggle("active");
    hamburger.setAttribute("aria-expanded", String(isOpen));
  });

  // Close menu when a link is clicked
  document.querySelectorAll(".nav-list a").forEach((link) => {
    link.addEventListener("click", function () {
      hamburger.classList.remove("active");
      nav.classList.remove("active");
      hamburger.setAttribute("aria-expanded", "false");
    });
  });
});
