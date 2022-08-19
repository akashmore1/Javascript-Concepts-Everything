"use strict";

// at() is a new method es2022 feature
// We can apply at() method on strings as well

const arr = [1, 2, 3, 4];
console.log(arr.at(2)); //return element at index 2

(arr[arr.length - 1] === arr.slice(-1)[0]) === arr.at(-1); // returns true
