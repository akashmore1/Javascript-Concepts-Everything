"use strict";

// there is another way to create prototypal inheritance using Object.create.

// 1. First create a object:
const Person = {
  name: this.name,
  age: this.age,
  calcAge: function () {
    return 2022 - this.age;
  },
};

// 2. Create an object we want to create based on Person object
const akash = Object.create(Person);

// 3. Now we can add values to akash:
akash.name = "Akash";
akash.age = "23";

console.log(akash);
console.log(akash.calcAge());
