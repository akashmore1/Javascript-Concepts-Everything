// Every object have prototypal inheritance.
// e.g.
let arr1 = new Array();
// here arr1 will have prototype which is equal to prototype in Array constructor function.
console.log(arr1.__proto__ === Array.prototype); // return true.

// prototypal chain:
// Objects(functins, arrays, hashtables) will have prototypal inheritance.
const student = {
  name: "Akash",
  branch: "Computer Science",
};
// we can apply student.hasOwnProperty() although student object does not have hasOwnProperty method.
// This is because of prototypal inheritance.
// object student's prototype is constructor which has this property, so we can use it.
// again that constructor has prototype base Object.
// This is called as prototypal chaining.
// base Object will not have any prototype.
