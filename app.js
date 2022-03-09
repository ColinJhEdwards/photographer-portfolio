const menu = document.querySelector(".burger");
const nav = document.querySelector(".nav-links");

menu.addEventListener("click", () => {
  nav.classList.toggle("active");
});
