"use strict";

document.querySelector(".again").addEventListener("click", () => {
  location.reload();
});

let score = 4;

const number = Math.trunc(Math.random() * 20) + 1;

const clickHandler = () => {
  const guessedNumber = Number(document.querySelector(".guess").value);
  //   When no number is selected
  if (!guessedNumber) {
    document.querySelector(".message").textContent = "No Number Inputted";
    document.querySelector("body").style.backgroundColor = "black";
    // document.querySelector("message").style.backgroundColor = "blue";
  }
  //   when correct guess
  else if (guessedNumber === number) {
    document.querySelector(".message").textContent =
      "You guessed correct number!";
    document.querySelector(".number").textContent = number;
    document.querySelector("body").style.backgroundColor = "green";
  } else if (guessedNumber >= number) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too high!";
      document.querySelector("body").style.backgroundColor = "black";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost the game";
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "red";
    }

    document.querySelector(".score").textContent = score;
  } else if (guessedNumber <= number) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too low!";
      document.querySelector("body").style.backgroundColor = "black";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost the game";
      document.querySelector("body").style.backgroundColor = "red";
      document.querySelector(".score").textContent = 0;
    }
  }
};

document.querySelector(".check").addEventListener("click", clickHandler);

document.querySelector("body").addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    clickHandler();
  }
});
