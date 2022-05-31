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
