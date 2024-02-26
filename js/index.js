const menuBtnEl = document.querySelector(".menu-btn");
const menuEl = document.querySelector(".menu");
const closeEl = document.querySelector(".close");
const linksContainerEl = document.querySelector(".navbar-links");
const allItem = document.querySelectorAll(".nav-item");

menuBtnEl.addEventListener("click", () => {
  closeEl.classList.toggle("hidden");
  menuEl.classList.toggle("hidden");
  linksContainerEl.classList.toggle("active");

  console.log(menuEl, closeEl);
});

allItem.forEach((item) => {
  item.addEventListener("click", () => {
    linksContainerEl.classList.remove("active");
    closeEl.classList.add("hidden");
    menuEl.classList.remove("hidden");
  });
});

window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navber");

  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
