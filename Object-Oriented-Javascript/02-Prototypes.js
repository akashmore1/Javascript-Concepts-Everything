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

// hasOwnProperty:
// We can also add properties with the help of prototypes.

const Car = function (color, company, price) {
  this.color = color;
  this.company = company;
  this.price = price;
};

const aura = new Car("white", "Hyundai", 8.4);

Car.prototype.calcOnRoadPrice = function () {
  return this.price + 1;
};

Car.prototype.country = "Japan";

console.log(aura);
console.log(aura.hasOwnProperty("color")); // true
console.log(aura.hasOwnProperty("country")); // false
