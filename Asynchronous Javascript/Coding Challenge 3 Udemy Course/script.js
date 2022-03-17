"use strict";

// Part 1

const imgContainer = document.querySelector(".images");

const wait = function (sec) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`${sec} seconds passed.`);
    }, sec * 1000);
  });
};

const createImage = function (imagePath) {
  return new Promise((resolve, reject) => {
    const img = document.createElement("img");
    img.src = imagePath;
    img.addEventListener("load", function () {
      imgContainer.append(img);
      resolve(img);
    });

    // If there is error loading image then we reject promise;
    img.addEventListener("error", function () {
      reject(new Error("Unable to Load Image"));
    });
  });
};

let currentImage;

const loadImage = async function () {
  try {
    let image = await createImage("image.jpeg");
    console.log("Image 1 loaded");
    await wait(2);
    image.style.display = "none"; //If we don't apply css, image2 will not be displayed.

    image = await createImage("image2.jpg");
    console.log("Image 2 loaded");
    await wait(2);
  } catch (err) {
    console.error(err);
  }
};

// loadImage();

// Part 2

const loadAll = async (imgArr) => {
  try {
    const imgs = imgArr.map(async (img) => {
      await createImage(img);
    });
    console.log(imgs);

    const imagesEl = await Promise.all(imgs);
    console.log("imageEl", imagesEl);
  } catch (err) {
    console.error(err);
  }
};

loadAll(["image.jpeg", "image2.jpg"]);
