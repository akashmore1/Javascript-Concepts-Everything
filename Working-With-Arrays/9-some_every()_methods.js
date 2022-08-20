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

// ========================================================================================

// flat() and flatMap()
// if we have nested array and we want all elements in outside array, we use flat and flatMap
const arrNest = [1, [2, 3], 4, [4, 6]];
console.log(arrNest.flat()); // return [1,2,3,4,4,6]
// But flat method only works on 1 level.
// If array is deeply nested and we want above result, we use flatMap()
