let colorsArr = [
  "red",
  "green",
  "blue",
  "purple",
  "#f15025",
  "crimson",
  "teal",
  "yellow",
];
let btn = document.querySelector("button");
let span = document.querySelector(".color");

btn.addEventListener("click", function () {
  let random = randomNum();
  document.querySelector(".body").style.background = colorsArr[random];
  span.innerHTML = colorsArr[random];
});
function randomNum() {
  return Math.floor(Math.random() * colorsArr.length);
}
