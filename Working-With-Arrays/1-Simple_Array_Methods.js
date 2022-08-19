"use strict";

let arr = ["a", "b", "c", "d", "e", "f"];

// slice()
console.log(arr.slice(2));
console.log(arr.slice(-1));
console.log(arr.slice()); // is equal to
console.log([...arr]);

// splice()
// Makes changes in original array
arr.splice(2); // only elements at index 0, 1 are present
// If we pass only one argument, all elemment from index to last will be removed in original array
console.log(arr);
// If we pass 2nd arugument:
arr.splice(2, 2); //Here 2 elements from 2nd index will be removed.
// This is very important, while removing any middle element from an array we can use this method
arr.splice(2, 1); // This will remove 2nd index element
// If we add 3rd argument in the array, that value will be added to index(1st argument)
arr.splice(3, 0, 4); // number 4 will be added to 3rd index and 0 elements will be removed from array.
// This method is very important while adding any element in middle of an array

// reverse()
// Important thing about this is reverse() method makes changes in original value
const arr2 = ["a", "b", "c", "d"];
arr2.reverse();
console.log(arr2); // reversed array

// concat()
// This does not make any changes in original arrays
const arr_1 = [1, 2, 3];
const arr_2 = [4, 5, 6];
const nums = arr_1.concat(arr_2); //[1,2,3,4,5,6]
console.log(nums);
// The above concat method is same as
const nums1 = [...arr1, ...arr2];
