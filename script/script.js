let firstcard;
let secondcard;
let cards = document.getElementsByClassName("cards");
function flip(userClick) {
  userClick.target.classList.add("clicked");
  if (firstcard === undefined) {
    firstcard = userClick.target;
  } else {
    secondcard = userClick.target;
    for (let i = 0; i < cards.length; i++) {
      cards[i].removeAttribute("onclick");
    }
    setTimeout(function () {
      let sonoUgali = controllaElementi();
      if (sonoUgali === true) {
        firstcard.classList.replace("clicked", "match");
        secondcard.classList.replace("clicked", "match");
      } else {
        firstcard.classList.remove("clicked");
        secondcard.classList.remove("clicked");
      }
      firstcard = undefined;
      secondcard = undefined;
      let carteRimanenti = document.querySelectorAll(".cards:not(.match)");
      for (let i = 0; i < carteRimanenti.length; i++) {
        carteRimanenti[i].setAttribute("onclick", "flip(event)");
      }
      // for (let i = 0; i < cards.length; i++) {
      //   cards[i].setAttribute("onclick", "flip(event)");
      //   firstcard = undefined;
      //   secondcard = undefined;
      // }
    }, 1000);
  }
}
function controllaElementi() {
  if (firstcard.innerHTML === secondcard.innerHTML) {
    return true;
  } else {
    return false;
  }
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
