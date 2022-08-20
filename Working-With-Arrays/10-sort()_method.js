"use strict";

// sort makes changes in original array
// sort can directly applied on array of strings

const names = ["vishwesh", "omkar", "akash"];
console.log(names.sort());

const nums = [2, 3, 7, 4, 8, 22, 2, 4, 6, 3, 99];

// return < 0, a, b keep order
// return > 0, a, b change order
nums.sort(function (a, b) {
  if (a > b) {
    return 1;
  }
  if (a < b) {
    return -1;
  }
});
