"use strict";

const data = 4;

// Promise is object, when new Promise accepts a callback function as argument.
// This argument function accepts two parameter resolve and reject.
const promiseObj = new Promise((resolve, reject) => {
  if (data === 4) {
    // Resolve is for when promise is fullfilled.
    resolve("Resolved");
  } else {
    // Reject is for when promise is rejected.
    reject(new Error("Rejected"));
  }
});

promiseObj
  // .then() is executed when promise is fullfilled and resolve's argument is parameter here.
  .then((data) => {
    console.log(data);
  })
  // .catch() is executed wheb promise is rejected with error. Reject's argument is parameter here.
  .catch((err) => {
    console.error(err);
  });

// Promisifying setTimeout

const wait = (sec) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, sec * 1000);
  });
};

// wait function is returning promise, so we can apply methods like then() and catch().
wait(1)
  .then(() => {
    console.log("Promised after 1 sec");
    return wait(1);
  })
  // Again above function return wait which return promise. So applying then method:
  .then(() => {
    console.log("Promised after 2 sec");
    return wait(1);
  })
  .then(() => {
    console.log("Promised after 3 sec");
    return wait(1);
  })
  .then(() => {
    console.log("Promised after 4 sec");
  });

// Direct resolve and reject

Promise.resolve("Resolved").then((res) => {
  console.log(res);
});
Promise.reject(new Error("Rejected")).catch((err) => {
  console.error(err);
});
