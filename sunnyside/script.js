const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  if (window.pageYOffset >= 100) {
    navbar.classList.add("bg-blue-primary");
    navbar.classList.remove("bg-transparent");
  } else {
    navbar.classList.remove("bg-blue-primary");
    navbar.classList.add("bg-transparent");
  }
});
