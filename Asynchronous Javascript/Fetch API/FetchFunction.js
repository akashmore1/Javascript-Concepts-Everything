"use strict";

// Fetch function takes url as argument and then returns a promise, which can be stored in a variable.
const data = fetch("https://fakestoreapi.com/products/1")
  // Here then mehod accepts a callback function which takes 1 argument, which is response.
  // This response contains response status and url etc. But it does not contain actual api data(json, xml).
  .then((response) => {
    console.log("response", response);
    // As this response does not contain actaul api data, we call json() method on it.
    // response.json will again return a promise, which we will return to apply then method again as below.
    return response.json();
  })
  // On above .then we again apply then() method as it returned promise because of response.json()
  .then((data) => {
    console.log("data", data);
    // the data returned by this .then() is actual data we are looking for.
  });
