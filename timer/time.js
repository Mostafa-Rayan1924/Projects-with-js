let days = document.querySelector(".time span");
let hour = document.querySelector(".hours span");
let min = document.querySelector(".min span");
let secss = document.querySelector(".secs span");
// the history we need to reach to them
// get time get the time with milliseconds
let time = new Date("mar 10, 2023 20:30").getTime();
console.log(time);
let counter = setInterval(() => {
  // get date now by millisecs
  let dateNow = new Date().getTime();
  //   find the diff between the time now and the time we need that variable has the time between today and the day of the history which we need to go
  let thegoal = time - dateNow;
  //   get day
  let day = Math.floor(thegoal / 1000 / 60 / 60 / 24);
  days.innerHTML = day;
  //   1000 to get sec 60 to get min 60 to get hours 24 to get days
  let hours = Math.floor((thegoal % (1000 * 60 * 60 * 24)) / 1000 / 60 / 60);
  //   the part 1 the diff date we use modules to get the hours remaining
  // the part 2 divide the days with hours
  hour.innerHTML = hours;
  let mins = Math.floor((thegoal % (1000 * 60 * 60)) / 1000 / 60);
  min.innerHTML = mins;
  let secs = Math.floor((thegoal % (1000 * 60)) / 1000);
  secss.innerHTML = secs;
  if (thegoal < 0) {
    clearInterval(counter);
  }
}, 1000);
