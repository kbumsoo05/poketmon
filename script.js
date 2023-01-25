const attack = document.querySelector("#attack");
const longWindow = document.querySelector("#log");
const enemyButton = document.querySelector("#enemyButton");
const enemyLevelSpan = document.querySelector("#enemyLevelSpan");
const enemyNameSpan = document.querySelector("#enemyNameSpan");

let myPet = { name: "찌끄레기", level: 1, type: 2 };
let enemy = [
  { name: "오물덩이", level: 1, type: 1 },
  { name: "뭉탱이", level: 1, type: 3 },
  { name: "뭉이", level: 1, type: 2 }
];
let countered;



function skillLog() {
  const newlog = document.createElement("span");
  newlog.innerText = `${myPet.name}(이)의 몸통박치기!`
  longWindow.appendChild(newlog);
}

function hitLog() {
  const newlog = document.createElement("span");
  const compat = myPet.type - countered.type;
  if (compat === 1) {
    newlog.innerText = "효과는 굉장했다!"
  } else if (compat === -1) {
    newlog.innerText = "효과는 별로였다..."
  } else {
    newlog.innerText = "효과는 미미했다."
  }
  longWindow.appendChild(newlog);
}

function enemySkillLog() {
  const newlog = document.createElement("span");
  newlog.innerText = `${countered.name}(이)의 몸통박치기!`
  longWindow.appendChild(newlog);
}

function hittedLog() {
  const newlog = document.createElement("span");
  const compat = myPet.type - countered.type;
  if (compat === -1) {
    newlog.innerText = "효과는 굉장했다!"
  } else if (compat === 1) {
    newlog.innerText = "효과는 별로였다..."
  } else {
    newlog.innerText = "효과는 미미했다."
  }
  longWindow.appendChild(newlog);
}

function allLog() {
  while (longWindow.firstChild) {
    longWindow.removeChild(longWindow.firstChild);
  }

  setTimeout(skillLog, 1000);
  setTimeout(hitLog, 2000);
  setTimeout(enemySkillLog, 3000);
  setTimeout(hittedLog, 4000);
}
attack.addEventListener("click", allLog);

function newEnemy(name, level, type) {
  this.name = name;
  this.level = level;
  this.type = type;
};


function setEnemy() {
  const num = Math.floor(Math.random() * 3)
  countered = enemy[num]
  enemyLevelSpan.textContent = countered.level;
  enemyNameSpan.textContent = countered.name;
}

setEnemy()
enemyButton.addEventListener("click", setEnemy)