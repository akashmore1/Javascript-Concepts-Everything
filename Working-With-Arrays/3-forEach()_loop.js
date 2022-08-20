"use strict";

// forEach() method is similar like for.. of.. loop

const arr = [1, 2, 3, 4];

// Print all elements in array

// with for.. of..
for (let num of arr) {
  console.log(num);
}

// with forEach()
arr.forEach((num, index, array) => {
  console.log(num, index, array);
});
