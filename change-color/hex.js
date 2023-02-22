let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
let body = document.querySelector(".body");
let span = document.querySelector(".color");
let button = document.querySelector("button");

button.addEventListener("click", () => {
  let random = `#`;
  for (let i = 0; i < 6; i++) {
    random += arr[Math.floor(Math.random() * arr.length)];
  }
  body.style.background = random;
  span.innerHTML = random;
});
