const hamburger__ = document.getElementById("hamburger__");
const close__ = document.getElementById("close__");
const sideMenu = document.getElementById("sideMenu");
hamburger__.addEventListener("click", (e) => {
  e.preventDefault();
  sideMenu.classList.toggle("sidemenu__");
});
close__.addEventListener("click", (e) => {
  e.preventDefault();
  sideMenu.classList.add("sidemenu__");
});
