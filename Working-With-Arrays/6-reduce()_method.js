"use strict";

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

// find sum of all values in reduce methods
const sumOfNums = nums.reduce(function (
  accumelator,
  currentValue,
  index,
  array
) {
  return accumelator + currentValue;
},
0);

// Highest value in array using reduce()
const highestValue = nums.reduce(function (accum, currentValue, index, array) {
  if (accum < currentValue) {
    accum = currentValue;
  }
  console.log(index);
  return accum;
}, -Infinity);
console.log(highestValue);
