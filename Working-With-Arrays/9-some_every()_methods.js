"use strict";

// some()
// some() method is mixture of find and includes method
// if array has element satifying given condition some returns true
const arr = [1, 2, 3, 4];
const ifSquareIsPresent = arr.some(function (num) {
  return arr.includes(num ** (1 / 2));
});
// 👆returns true

// every()
// every is similar as some return true or false
// Its just some checks if any one element matches condition, while every checks if all values matches condition
