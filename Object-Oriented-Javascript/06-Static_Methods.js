"use strict";

const akash = {
  name: "Akash",
  age: 23,
};

// I always wondered
// why we have we can apply akash.hasOwnProperty('name'), but
// while using finding key we need to do Object.keys(akash)
// akash.keys() will give an error.

// Reason

// The reason keys() method is not present in prototype of akash unlike hasOwnProperty.
// keys() method is attached to constructor of akash, thats why it is not available to everu object

// We can easily create methods attached to constructor, just like Object.keys()

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

// normally while adding method we use prototype
Person.prototype.greet = function () {
  console.log("Hi");
};
// Here we can call
const jonas = new Person("Jonas", 32);
jonals.greet();

// in order to write method attached to constructor we don't use prototype.
Person.sayHello = function () {
  console.log("Hello");
};
// But here we cannot call sayHello method on jonas because it is not present on prototype
// To call sayHello method,
Person.sayHello();

// ============================================================================================= //

// but if we want to define these methos in class attached to constructor function, we use static keyword
class Car {
  constructor(color, company) {
    this.color = color;
    this.company = company;
  }

  static printColor() {
    console.log(this.color);
  }
}
// Now printColor method is attached to constructor function Car.
// We cannot apply it on object created on Car
Car.printColor(); // is valid

const bmw = new Car("black", "BMW");
// bmw.printColor()         -> will give error
