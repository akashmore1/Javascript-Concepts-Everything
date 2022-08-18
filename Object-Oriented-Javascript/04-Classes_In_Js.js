"use strict";

class PersonCl {
  constructor(p_name, p_birth_year) {
    this.personName = p_name;
    this.birthYear = p_birth_year;
  }

  calcAge() {
    return 2022 - this.birthYear;
  }
}

const akash = new PersonCl("Akash", 1998);
console.log(akash);
console.log(akash.calcAge());
// Again just to remenber:
console.log(akash.__proto__ === PersonCl.prototype);

// 1. Classes are not hoisted
// 2. classes are executed in strict mode.
// 3. classes just like functions are first class citizens.
// 👆This means classes can be passed to functions and returned from functions
// Actually classes are functions in JS behind the scenes
