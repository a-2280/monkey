const forageButton = document.getElementById("forage-button");
const food = document.getElementById("food");
const messageBoard = document.getElementById("message-board");
const messageContainer = document.querySelector(".message-container");

let foodCount = 10;

food.innerText = "Food:" + foodCount;

forageButton.addEventListener("click", () => {
  foodCount += 1;
  food.innerText = "Food:" + foodCount;

  const li = document.createElement("li");
  li.appendChild(document.createTextNode("You collected 1 food"));
  messageBoard.appendChild(li);
  messageContainer.scrollTop = messageContainer.scrollHeight;
});
