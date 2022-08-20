"use strict";

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

// filter only even numbers
// filter() method takes a callback function which returns boolean value
const evenNums = nums.filter((num) => {
  return num % 2 === 0;
});

console.log(evenNums);
