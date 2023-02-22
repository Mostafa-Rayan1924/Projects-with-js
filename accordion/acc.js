let btn = document.querySelectorAll("button");
btn.forEach((item) => {
  item.addEventListener("click", (e) => {
    let question = e.currentTarget.parentElement.parentElement;
    let body = question.querySelector(".body");
    let neg = question.querySelector(".neg");
    let minius = question.querySelector(".minius");
    body.classList.toggle("show");
    if (body.classList.contains("show")) {
      e.currentTarget.style.display = "none";
      neg.style.display = "block";
    } else {
      neg.style.display = "none";
      minius.style.display = "block";
    }
  });
});
