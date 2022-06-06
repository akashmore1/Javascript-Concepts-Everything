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

// In order to find first word in sentense string we use slice and indexOf together.
const firstWord = airLine.slice(0, airLine.indexOf(" "));
// to find sentence excluding last word, we use
const notLastWord = airLine.slice(0, airLine.lastIndexOf(" "));
console.log(firstWord, notLastWord);
// In order to cut first and last character
const cutFirstAndLastChar = airLine.slice(1, -1);
console.log(cutFirstAndLastChar);

const checkMiddleSit = (seatNumber) => {
  // seats containing b and e as theit last char are middle seats
  const s = seatNumber.slice(-1);
  if (s === "b" || s === "e") {
    return "Its a middle seat";
  } else {
    return "Its not a middle seat";
  }
};

console.log(checkMiddleSit("12e"));

// We can lowercase or uppercase all string with help of:
console.log(airLine.toLowerCase());
console.log(airLine.toUpperCase());

// Fix capitalization in name:
const passenger = "aKaSH";
const passengerLower = passenger.toLowerCase();
console.log(passengerLower);
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// comparing emails
const email = "hello@jonas.io";
const loginEmail = "    Hello@Jonas.Io    \n ";
const lowerEmail = loginEmail.toLowerCase();
// To eliminate trailing and ending space we use:
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);

// We can also write above like this:
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);

// replace method
const priceGb = "288,97$";
const priceUs = priceGb.replace("7", "8");
console.log(priceUs);
