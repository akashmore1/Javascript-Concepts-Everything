"use strict";

// find() method is same as filter method, it's callback functions return boolean.
// The only difference is filter returns array of all elements satifying condition
// find returns first value satisfying condition

const nums = [1, 2, 3, 4, 5, 6, 7, 8];

// find value greater than 3

const greateThan4 = nums.find(function (num) {
  return num > 3;
});

// find method is used in array of objects, where we match 1 value inside object and then return whole object
