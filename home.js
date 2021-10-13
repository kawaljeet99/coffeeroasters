const navList = document.getElementById("nav-list");
const menuOpen = document.getElementById("menu-open");
const menuClose = document.getElementById("menu-close");

menuOpen.addEventListener("click", () => {
  menuOpen.classList.add("hidden");
  menuClose.classList.remove("hidden");
  navList.classList.add("visible");
});

menuClose.addEventListener("click", () => {
  menuClose.classList.add("hidden");
  menuOpen.classList.remove("hidden");
  navList.classList.remove("visible");
});
