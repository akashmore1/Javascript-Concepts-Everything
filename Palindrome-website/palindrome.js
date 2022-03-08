"use strict";

const input = document.querySelector(".input");

const button = document.querySelector(".button-click");

const mainAnswer = document.querySelector(".main-answer");

const body = document.querySelector("body");

let inputValue;
let result = ``;

const checkIfPalindrome = (inputValue) => {
  const stringArray = [...inputValue];
  const reverseArray = [];
  for (let i = 0; i < stringArray.length; i++) {
    reverseArray.unshift(stringArray[i]);
  }
  const reverseStringValue = reverseArray.join("");
  if (inputValue === reverseStringValue) {
    result = `Yes "${inputValue}" is a Palindrome!`;
  } else {
    result = `"${inputValue}" is Not a Palindrome`;
  }
  return result;
};

const onClickHandler = () => {
  inputValue = input.value;
  if (!inputValue) {
    mainAnswer.textContent = `Please enter a String`;
    mainAnswer.classList.add("main-answer-invalid");
    input.classList.add("focus-nostring", "invalid-string-window");
    setTimeout(() => {
      input.classList.remove("invalid-string-window");
    }, 400);
  } else {
    checkIfPalindrome(inputValue);
    mainAnswer.textContent = result;
    input.classList.remove("focus-nostring", "invalid-string-window");
    input.value = ``;
  }
};

const inputClickHandler = () => {
  input.classList.remove("focus-nostring");
  if (!input.value) {
    mainAnswer.textContent = ``;
  }
  mainAnswer.classList.remove("main-answer-invalid");
};

input.addEventListener("click", inputClickHandler);

button.addEventListener("click", onClickHandler);
