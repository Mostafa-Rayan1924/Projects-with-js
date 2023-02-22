let lis = document.querySelectorAll(".menu ul li");
let boxs = document.querySelectorAll(".menu .box");
lis.forEach((item) => {
  item.addEventListener("click", (e) => {
    lis.forEach((ele) => {
      ele.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
    boxs.forEach((box) => {
      box.style.display = "none";
    });
    document.querySelectorAll(e.currentTarget.dataset.menu).forEach((eles) => {
      eles.style.display = "block";
    });
  });
});
