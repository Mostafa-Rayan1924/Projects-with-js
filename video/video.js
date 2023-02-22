let video = document.querySelector(".video video");
let btns = document.querySelectorAll(".video button");
let loader = document.querySelector(".loader");
btns.forEach((item) => {
  item.addEventListener("click", (e) => {
    if (e.currentTarget.classList.contains("play")) {
      video.play();
    } else {
      video.pause();
    }
  });
});
window.addEventListener("load", () => {
  loader.classList.add("hide");
});
