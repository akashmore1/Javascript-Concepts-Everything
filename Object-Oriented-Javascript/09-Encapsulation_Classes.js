// Encapsulation means we define certain methods which can only be used in class.
// We cannot use them out side class
// Js doesn't fully support encapsulation
// We just use '_' before defining variable, that means it is protected.

class Person {
  constructor(name, age, movement) {
    this.name = name;
    this.age = age;
    // Protected, cannot be used outside class
    this._movement = movement;
  }
}

// technically _movement can be used outside class.
// It is convention used by developers to tell the variable is encapsulated.

// defining variable outside constructor function starting with # will result in a private field

//  and while defining method if we put static before it, this method will only be used within class.
