let firstcard;
let secondcard;
let cards = document.getElementsByClassName("cards");
function flip(userClick) {
  userClick.target.classList.add("clicked");
}
// let arrayAnimali = [
//   "🐱",
//   "🦉",
//   "🐾",
//   "🦄",
//   "🦋",
//   "🐛",
//   "🐝",
//   "🐬",
//   "🐱",
//   "🦉",
//   "🐾",
//   "🦄",
//   "🦋",
//   "🐛",
//   "🐝",
//   "🐬",
// ];

// let container = document.getElementById("container");

// for (let i = 0; i < arrayAnimali.length; i++) {
//   let animale = arrayAnimali[i];
//   container.innerHTML += `<div id="card" onclick=uguali(event)>${animale}</div>`;
// }

// let animalecard;
// let animalecard2;

// function uguali(eventClick) {
//   animalecard = eventClick.target;
//   console.log(animalecard);

//   if (animalecard !== undefined) {
//     animalecard2 = eventClick.target;
//   }
//   if (animalecard === animalecard2) {
//     animalecard.innerHTML.style = "background-color: black";
//     animalecard2.style = "background-color: black";
//   }
// }
