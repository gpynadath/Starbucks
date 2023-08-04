const btn = document.getElementById("menu-btn");
const btn2 = document.getElementById("menu");

function navToggle() {
  btn.classList.toggle("open");
  btn2.classList.toggle("hidden");
  document.body.classList.toggle("noscroll");
}

btn.addEventListener("click", navToggle);
