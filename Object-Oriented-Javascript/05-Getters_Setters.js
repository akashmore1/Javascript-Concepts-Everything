"use strict";

// Remember when you tried to add peoperty in constructor function and assign value to it using class method it gave error.
// We actually use get and set for above scenario

class Person {
  constructor(pName, pYear) {
    this.name = pName;
    this.birthYear = pYear;
    // this._isMilenial = this.isMilenial();
  }

  get age() {
    return 2022 - this.birthYear;
  }

  set isMilenial(birthYear) {
    if (birthYear <= 2000) this.isMilenial = true;
    else this.isMilenial = false;
  }

  get isMilenial() {
    return this.isMilenial;
  }
}

const p1 = new Person("Akash", 1998);
console.log(p1);

// 🛑👆 This code has error. Learn about getters and setters afterwords
