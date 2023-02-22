let img = document.querySelector(".img");
let baba = document.querySelector(".header");
if (localStorage.length > 0) {
  img.src = localStorage.getItem("img");
}
if (localStorage.length > 0) {
  baba.style.background = localStorage.getItem("background");
}
function rayan(rayano) {
  img.src = rayano;
  localStorage.setItem("img", img.src);
}
function header(khalfea, opacity) {
  baba.style.background = khalfea;
  localStorage.setItem("background", baba.style.background);
}
