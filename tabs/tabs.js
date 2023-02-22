let lis = document.querySelectorAll(".tabs li");
lis.forEach((item) => {
  item.addEventListener("click", (e) => {
    lis.forEach((li) => {
      li.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
    let content = document.querySelectorAll(".content div").forEach((li) => {
      li.style.display = "none";
    });
    document.querySelectorAll(e.currentTarget.dataset.li).forEach((ele) => {
      ele.style.display = "block";
    });
  });
});
