"use strict";

const input = document.querySelector(".input");
const button = document.querySelector(".button");
const answer = document.querySelector(".answer");

const onClickHandler = () => {
  let factorial = 1;
  const number = Number(input.value);
  for (let i = number; i > 0; i--) {
    factorial = factorial * i;
  }
  answer.textContent = factorial;
  //   return factorial;
};

button.addEventListener("click", onClickHandler);
