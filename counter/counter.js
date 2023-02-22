let count = 0;
let btns = document.querySelectorAll("button");
let span = document.querySelector(".value");
btns.forEach((item) => {
  item.addEventListener("click", (e) => {
    if (e.currentTarget.classList.contains("decrease")) {
      count--;
      if (count < 0) {
        span.style.color = "red";
      }
    } else if (e.currentTarget.classList.contains("increase")) {
      count++;
      if (count > 0) {
        span.style.color = "green";
      }
    } else {
      count = 0;
      span.style.color = "black";
    }
    span.innerHTML = count;
  });
});
