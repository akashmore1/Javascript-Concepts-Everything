// While creating object methods we use prototype in js.

const Person = function (name, birthYear) {
  this.name = name;
  this.birthYear = birthYear;
};

const akash = new Person("Akash", 1998);
const snehal = new Person("Snehal", 1993);

Person.prototype.calcAge = function () {
  return 2022 - this.birthYear;
};

console.log(akash.calcAge());
console.log(akash);
console.log(akash.__proto__);
console.log(akash.__proto__ === Person.prototype); // return true
console.log(Person.prototype.isPrototypeOf(akash)); // return true
