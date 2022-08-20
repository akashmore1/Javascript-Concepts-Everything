"use strict";

const persons = [
  { name: "Akash", age: 23 },
  { name: "Vishwesh", age: 24 },
];

// Find name of person whose age is 23 using find method
const personName = persons.findIndex(function (person) {
  return person.age === 23;
});

// findIndex() is similar to find(), it just returns index instead of value
