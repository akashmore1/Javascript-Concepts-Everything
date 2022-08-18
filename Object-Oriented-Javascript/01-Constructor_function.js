"use strict";

// Every other language needs a class and constructor function to create an instance(object).
// But in js we can create objects only with the help of constructor function.
// constructor function is always named in capitals.

const Person = function (name, id) {
  this.name = name;
  this.id = id;
};

const p1 = new Person("Akash", "1234");
console.log(p1);
const p2 = "Michael";

console.log(p1 instanceof Person); // return true
console.log(p2 instanceof Person); // return false
