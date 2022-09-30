let arrayAnimali = [
  "🐱",
  "🦉",
  "🐾",
  "🦄",
  "🦋",
  "🐛",
  "🐝",
  "🐬",
  "🐱",
  "🦉",
  "🐾",
  "🦄",
  "🦋",
  "🐛",
  "🐝",
  "🐬",
];

let container = document.getElementById("container");

for (let i = 0; i < arrayAnimali.length; i++) {
  let animale = arrayAnimali[i];
  container.innerHTML += `<div onclick=uguali(event)>${animale}</div>`;
}

let animalecard;
let animalecard2;

function uguali(eventCLick) {
  animalecard = eventCLick.target;
  console.log(animalecard);
  animalecard2 = arrayAnimali[i++];
  if (animalecard === animalecard2) {
    //allora display none
  }
}
