const menu = document.querySelector(".burger");
const nav = document.querySelector(".nav-links");
const link = document.querySelectorAll(".links");

menu.addEventListener("click", () => {
  nav.classList.toggle("active");
});

link.forEach((l) =>
  l.addEventListener("click", () => {
    nav.classList.remove("active");
  })
);
