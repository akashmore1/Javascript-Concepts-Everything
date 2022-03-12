"use strict";

// 1st
console.log("Test start");

// 2nd
setTimeout(() => {
  console.log("0 sec timer");
}, 0);

// 3rd
Promise.resolve("Promise 1 resolved").then((res) => {
  console.log(res);
});

// 4th
console.log("Test End");

// Here  1st and 4th console will be executed first. As they are not part of any asychronous function.

// In background 2nd and 3rd will be working. But which one of them will be executed first?

// Here 2nd console will be executed in callback queue.
// And 3rd console will be part of microtask queue as it is part of promise.

// Microtask queue has more priority over callback queue in javascript.

// So 3rd console will be executed before 2nd console.

// Order in which consoles will be executed: (1, 4, 3, 2)
