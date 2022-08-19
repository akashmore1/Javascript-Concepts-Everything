"use strict";

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  calcBirthYear = function () {
    return 2022 - this.age;
  };
}

class Student extends Person {
  constructor(name, age, courses) {
    // First we need to call Person constructor function here and pass name age from here.
    // This we do using super() function
    super(name, age);
    // Here courses is an extra attribute in class as there is alway in case of inheritance
    this.course = courses;
  }
}

const akash = new Student("Akash", "23", "Computer");

akash.calcBirthYear();
