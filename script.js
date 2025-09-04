const forageButton = document.getElementById("forage");
const sleepButton = document.getElementById("sleep");
const caveButton = document.getElementById("cave");
const food = document.getElementById("food");
const day = document.getElementById("days");
const monkeys = document.getElementById("monkeys");
const understanding = document.getElementById("understanding");
const messageBoard = document.getElementById("message-board");
const messageContainer = document.querySelector(".message-container");

let foodCount = 10;
let monkeyCount = 3;
let dayCount = 1;
let understandingCount = 0;

const getRandomNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

forageButton.addEventListener("click", () => {
  const randomNumber = getRandomNumber(0, 3);
  const understandingChance = Math.random();

  if (understandingChance < 0.1) {
    understandingCount += 1;
    understanding.innerText = `Understanding: ${understandingCount}`;

    const li = document.createElement("li");
    li.appendChild(document.createTextNode(`Ape learn something!`));
    messageBoard.appendChild(li);
    messageContainer.scrollTop = messageContainer.scrollHeight;
  } else {
    foodCount += randomNumber;
    food.innerText = `Food: ${foodCount}`;

    const li = document.createElement("li");
    li.appendChild(
      document.createTextNode(`You collected ${randomNumber} food`)
    );
    messageBoard.appendChild(li);
    messageContainer.scrollTop = messageContainer.scrollHeight;
  }
});

sleepButton.addEventListener("click", () => {
  if (foodCount == 0 || foodCount - monkeyCount < 0) {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(`Monkeys starve!`));
    messageBoard.appendChild(li);
    messageContainer.scrollTop = messageContainer.scrollHeight;
  } else {
    foodCount -= monkeyCount;
    dayCount += 1;

    day.innerText = `Day: ${dayCount}`;
    food.innerText = `Food: ${foodCount}`;

    const li = document.createElement("li");
    li.appendChild(document.createTextNode(`Monkeys eat. Day passes.`));
    messageBoard.appendChild(li);
    messageContainer.scrollTop = messageContainer.scrollHeight;
  }
});

caveButton.addEventListener("click", () => {
  const randomNumber = Math.random();

  if (randomNumber < 0.5) {
    understandingCount += 3;
    understanding.innerText = `Understanding: ${understandingCount}`;

    const li = document.createElement("li");
    li.appendChild(document.createTextNode(`Understanding +3`));
    messageBoard.appendChild(li);
    messageContainer.scrollTop = messageContainer.scrollHeight;
  } else {
    monkeyCount -= 1;
    monkeys.innerText = `Monkeys: ${monkeyCount}`;

    const li = document.createElement("li");
    li.appendChild(document.createTextNode(`Monkey died...`));
    messageBoard.appendChild(li);
    messageContainer.scrollTop = messageContainer.scrollHeight;
  }
});
