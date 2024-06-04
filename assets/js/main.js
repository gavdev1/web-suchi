const bar = document.querySelector("#bar");
const menuContainer = document.querySelector("nav");
const menu = document.querySelector(".menu__elements");
const close = document.querySelector(".menu__close");
const dark = document.querySelector("#dark");

bar.addEventListener("click", (e) => menu.classList.add("menu__visible"));

close.addEventListener("click", (e) => menu.classList.remove("menu__visible"));

dark.addEventListener("click", () => {
  if (!document.body.classList.contains("dark-theme")) {
    document.body.classList.add("dark-theme");
    dark.className = "ri-sun-line";
    return;
  }

  document.body.classList.remove("dark-theme");
  dark.className = "ri-moon-line";
});

window.addEventListener("scroll", () =>
  window.scrollY >= 100
    ? menuContainer.classList.add("menu__scroll")
    : menuContainer.classList.remove("menu__scroll")
);
