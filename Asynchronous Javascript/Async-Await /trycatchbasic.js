"use strict";

// when we use try catch methods, we don't get error in console.
// And execution is not stopped.
// Only if we throw error in catch block then only program will have error.
// Like following block has error of assignment to constant value.
try {
  const x = 4;
  x = 3;
  console.log(x);
} catch (err) {
  alert(err);
}
