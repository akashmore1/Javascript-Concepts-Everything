"use strict";

console.log("Hello World!");

const airLine = "TAP Air Portugal";
const plane = "A230a22";

// plane[0] should be 'A'
console.log(plane[0]);
console.log(plane[1]);

// We can apply this directly on string like this:
console.log("sdfsew"[4]);

// To find length of string
console.log(plane.length);

// To find index of certain letter in string
console.log(plane.indexOf("a")); // has O(n)
// To find last occurance of a char
console.log(plane.lastIndexOf("2"));
// We can even find index of a word
console.log(airLine.indexOf("Portugal"));

// the slice method:
// slice() method does not make changes in original array. I returns new array.
const slicedString = airLine.slice(4);
console.log(slicedString);
// The second argument to slice method is index to which slicing should stop.
// The second argument index does not included in new returned string.
const slicedString2 = airLine.slice(4, 7);
console.log(slicedString2);
// We can give negative values in arguments of slice method.
// .slice(-1) here char at index of -1 is last character.
