let text = [
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa animi ab explicabo enim debitis quasi necessitatibus eligendi eius eos magni libero, sint magnam similique, pariatur atque dolorum unde quos ea!<br>",
  "text2 ipsum dolor sit amet consectetur adipisicing elit. Culpa animi ab explicabo enim debitis quasi necessitatibus eligendi eius eos magni libero, sint magnam similique, pariatur atque dolorum unde quos ea!<br>",
  "Lorem3 ipsum dolor sit amet consectetur adipisicing elit. Culpa animi ab explicabo enim debitis quasi necessitatibus eligendi eius eos magni libero, sint magnam similique, pariatur atque dolorum unde quos ea!<br>",
  "Lorem4 ipsum dolor sit amet consectetur adipisicing elit. Culpa animi ab explicabo enim debitis quasi necessitatibus eligendi eius eos magni libero, sint magnam similique, pariatur atque dolorum unde quos ea!<br>",
  "Lorem5 ipsum dolor sit amet consectetur adipisicing elit. Culpa animi ab explicabo enim debitis quasi necessitatibus eligendi eius eos magni libero, sint magnam similique, pariatur atque dolorum unde quos ea!<br>",
  "Lorem6 ipsum dolor sit amet consectetur adipisicing elit. Culpa animi ab explicabo enim debitis quasi necessitatibus eligendi eius eos magni libero, sint magnam similique, pariatur atque dolorum unde quos ea!<br>",
  "Lorem7 ipsum dolor sit amet consectetur adipisicing elit. Culpa animi ab explicabo enim debitis quasi necessitatibus eligendi eius eos magni libero, sint magnam similique, pariatur atque dolorum unde quos ea!<br>",
  "Lorem8 ipsum dolor sit amet consectetur adipisicing elit. Culpa animi ab explicabo enim debitis quasi necessitatibus eligendi eius eos magni libero, sint magnam similique, pariatur atque dolorum unde quos ea!<br>",
  "Lorem9 ipsum dolor sit amet consectetur adipisicing elit. Culpa animi ab explicabo enim debitis quasi necessitatibus eligendi eius eos magni libero, sint magnam similique, pariatur atque dolorum unde quos ea!<br>",
];
let btn = document.querySelector(".gen button");
let inp = document.querySelector(".gen input");

let p = document.querySelector(".gen p");

btn.addEventListener("click", () => {
  p.innerHTML = "";
  if (inp.value !== "" && inp.value > 0) {
    for (let i = 0; i < inp.value; i++) {
      p.innerHTML += `${text[Math.floor(Math.random() * text.length)]} <br>`;
    }
  }
});
