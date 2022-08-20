"use strict";

// map function is similar like forEach it just returns a brand new array

const arr = [1, 2, 3, 4];

const doubleArr = arr.map(function (element, index, array) {
  return {
    double: element * 2,
    index: index,
    array: array,
  };
});

console.log(doubleArr);
