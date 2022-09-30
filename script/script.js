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

function shuffle(a) {
  let currentIndex = a.length;
  let temporaryValue, randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = a[currentIndex];
    a[currentIndex] = a[randomIndex];
    a[randomIndex] = temporaryValue;
  }
  return a;
}

let interval;

function startTimer() {
  let s = 0,
    m = 0,
    h = 0;
  interval = setInterval(function () {
    timer.innerHTML = "Tempo: " + m + " min " + s + " sec";
    s++;
    if (s == 60) {
      m++;
      s = 0;
    }
    if (m == 60) {
      h++;
      m = 0;
    }
  }, 1000);
}

function startGame() {
  let arrayShuffle = shuffle(arrayAnimali);

  clearInterval(interval);
  arrayComparison = [];

  let lista = document.getElementById("griglia");
  while (lista.hasChildNodes()) {
    lista.removeChild(lista.firstChild);
  }

  for (let i = 0; i < 16; i++) {
    let box = document.createElement("div");
    let element = document.createElement("div");
    element.className = "icon";
    document.getElementById("griglia").appendChild(box).appendChild(element);
    element.innerHTML = arrayShuffle[i];
  }

  startTimer();

  let icon = document.getElementsByClassName("icon");
  let icons = [...icon];

  for (let i = 0; i < icons.length; i++) {
    icons[i].addEventListener("click", displayIcon);
    icons[i].addEventListener("click", openModal);
  }
}

document.body.onload = startGame();

function displayIcon() {
  let iconsFind = document.getElementsByClassName("find");

  let icon = document.getElementsByClassName("icon");
  let icons = [...icon];

  this.classList.toggle("show");
  arrayComparison.push(this);

  let len = arrayComparison.length;
  if (len === 2) {
    if (arrayComparison[0].innerHTML === arrayComparison[1].innerHTML) {
      arrayComparison.forEach(function (elemento) {
        elemento.classList.add("find", "disabled");
      });
      arrayComparison = [];
    } else {
      icons.forEach(function (item) {
        item.classList.add("disabled");
      });
      setTimeout(function () {
        arrayComparison.forEach(function (elemento) {
          elemento.classList.remove("show");
        });
        icons.forEach(function (item) {
          item.classList.remove("disabled");
          for (let i = 0; i < iconsFind.length; i++) {
            iconsFind[i].classList.add("disabled");
          }
        });
        arrayComparison = [];
      }, 700);
    }
  }
}

let modal = document.getElementById("modal");
let timer = document.querySelector(".timer");

function openModal() {
  if (iconsFind.length == 16) {
    clearInterval(interval);
    modal.classList.add("active");
    document.getElementById("totalTime").innerHTML = timer.innerHTML;
    closeModal();
  }
}

function closeModal() {
  closeicon.addEventListener("click", function (e) {
    modal.classList.remove("active");
    startGame();
  });
}

function playAgain() {
  modal.classList.remove("active");
  startGame();
}
