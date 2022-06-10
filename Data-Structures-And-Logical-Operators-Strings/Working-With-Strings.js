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

// replace method take first string which matches. replaceAll() is not a function yet.
const announcement = "All passengers me to boarding door 23. Boarding door 23!";
console.log(announcement.replace("door", "gate")); // first door gets replace with gate.

// In order to replace all occurance of door we use regular expression.
console.log(announcement.replace(/door/g, "gate"));

// Methods returning booleans:
// includes() method
const planeSeat = "A320neo";
console.log(planeSeat.includes("A320"));

// startsWith() method
console.log(planeSeat.startsWith("Air")); // returns false
console.log(planeSeat.startsWith("A320")); // returns true

// Arr.reverse() function used to reverse the array
const arr = [1, 2, 3];
const revArr = arr.reverse();
console.log(revArr);

// split method is used to split string, it returns arrays of string.
const str = "Hi+there+I+am+Akash";
const strArr = str.split("+");
console.log(strArr);
// Following is the real life scenario where we will use split mostly.
const fullName = "Akash More";
const [firstName, lastName] = fullName.split(" ");
console.log(firstName, lastName);

// join() method works opposite of split() method.
// It joins array into a string.
const nameArr = ["Akash", "More"];
const fullNameStr = nameArr.join(" "); // this will create string with space in it.  => Akash More
const fullNameStrNoSpace = nameArr.join(""); // this will create string with no space in it  => AkashMore

// Write a function which takes name and returns capitalized name.
const capitalizeName = (name) => {
  const nameArr = name.split(" ");
  let capitalizedName;
  let fullNameArr;
  for (let n of nameArr) {
    // debugger;
    capitalizedName = n[0].toUpperCase() + n.slice(1);
    fullNameArr.push(capitalizedName);
  }

  return fullNameArr.join(" ");
};

console.log(capitalizeName("prateek kuhad"));
