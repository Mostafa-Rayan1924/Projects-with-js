let header = document.querySelector(".scroll .header");
let lis = document.querySelectorAll(".scroll ul li");
window.addEventListener("scroll", () => {
  if (scrollY > 10) {
    header.style.background = "white";
    header.style.boxShadow = "0 0 10px #ddd";
  } else {
    header.style.background = "none";
    header.style.boxShadow = "none";
  }
});
lis.forEach((item) => {
  item.addEventListener("click", (e) => {
    let li = document
      .querySelector(e.currentTarget.dataset.sec)
      .scrollIntoView({
        behavior: "smooth",
      });
  });
});

window.addEventListener("scroll", () => {
  if (scrollY > 200) {
    document.querySelector(".up").classList.add("came");
  } else {
    document.querySelector(".up").classList.remove("came");
  }
});
document.querySelector(".up").onclick = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
