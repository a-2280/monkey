const forageButton = document.getElementById("forage");
const sleepButton = document.getElementById("sleep");
const food = document.getElementById("food");
const day = document.getElementById("days")
const messageBoard = document.getElementById("message-board");
const messageContainer = document.querySelector(".message-container");

let foodCount = 10;
let monkeyCount = 3;
let dayCount = 1;

food.innerText = "Food:" + foodCount;

const getRandomNumber = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

forageButton.addEventListener("click", () => {
  const randomNumber = getRandomNumber(0, 3);
  console.log(randomNumber)

  foodCount += randomNumber;
  food.innerText = "Food:" + foodCount;

  const li = document.createElement("li");
  li.appendChild(document.createTextNode(`You collected ${randomNumber} food`));
  messageBoard.appendChild(li);
  messageContainer.scrollTop = messageContainer.scrollHeight;
});

sleepButton.addEventListener("click", () => {
    foodCount -= monkeyCount;
    dayCount += 1;

    day.innerText = `Day: ${dayCount}`;
    food.innerText = `Food: ${foodCount}`;

    const li = document.createElement("li");
  li.appendChild(document.createTextNode(`Monkeys go to sleep`));
  messageBoard.appendChild(li);
  messageContainer.scrollTop = messageContainer.scrollHeight;
})