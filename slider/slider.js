let review = [
  {
    img: "avatar-03.png",
    title:
      "Mostafa ipsum dolor sit amet consectetur adipisicing elit. Voluptates praesentium dolor eaque aliquam, cupiditate quidem animi sapiente nihil illum ea tempora facilis repudiandae qui aut dolorem ratione, quae quas quia.",
    head: "mostafa rayan",
    job: "front end",
  },
  {
    img: "avatar-04.png",
    title:
      "boda ipsum dolor sit amet consectetur adipisicing elit. Voluptates praesentium dolor eaque aliquam, cupiditate quidem animi sapiente nihil illum ea tempora facilis repudiandae qui aut dolorem ratione, quae quas quia.",
    head: "boda eldood",
    job: "ux devleoper",
  },
  {
    img: "avatar-05.png",
    title:
      "farghaly ipsum dolor sit amet consectetur adipisicing elit. Voluptates praesentium dolor eaque aliquam, cupiditate quidem animi sapiente nihil illum ea tempora facilis repudiandae qui aut dolorem ratione, quae quas quia.",
    head: "farghaly",
    job: "back end",
  },
  {
    img: "avatar-06.png",
    title:
      "ahmed ipsum dolor sit amet consectetur adipisicing elit. Voluptates praesentium dolor eaque aliquam, cupiditate quidem animi sapiente nihil illum ea tempora facilis repudiandae qui aut dolorem ratione, quae quas quia.",
    head: "ahemd salah",
    job: "teacher",
  },
];
let pic = document.querySelector(".pic");
let name = document.querySelector(".name");
let jo = document.querySelector(".jo");
let p = document.querySelector(".p");
let left = document.querySelector(".left");
let right = document.querySelector(".right");

let index = 0;

function show() {
  let box = review[index];
  pic.src = box.img;
  name.innerHTML = box.head;
  p.innerHTML = box.title;
  jo.innerHTML = box.job;
}
show();
right.addEventListener("click", () => {
  index++;
  if (index > review.length - 1) {
    index = 0;
  }
  show();
});
left.addEventListener("click", () => {
  index--;
  if (index < 0) {
    index = review.length - 1;
  }
  show();
});
document.querySelector(".parent .box button").onclick = () => {
  let random = review[Math.floor(Math.random() * review.length)];
  pic.src = random.img;
  name.innerHTML = random.head;
  p.innerHTML = random.title;
  jo.innerHTML = random.job;
};
