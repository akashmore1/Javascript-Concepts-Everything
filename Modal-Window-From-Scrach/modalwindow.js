"use strict";
const modal = document.querySelector(".content");

const button = document.querySelectorAll(".opener");

const overlay = document.querySelector("#overlay");

const body = document.querySelector(".body");

const cancelButton = document.querySelector(".cancel-button");

cancelButton.addEventListener("click", () => {
  modal.classList.add("js-handle");
  overlay.classList.remove("overlay");
  //   button.classList.add("js-handle");
  console.log("button");
});

const onclickHandler = () => {
  modal.classList.remove("js-handle");
  overlay.classList.add("overlay");
};

for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("click", onclickHandler);
}
