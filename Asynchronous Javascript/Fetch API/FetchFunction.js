"use strict";

const button = document.querySelector("button");

// The api used in below example 1 can return 500 somtimes  (https://fakestoreapi.com/products/1)

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

//-------------------------------------------------------------------------------------------------------------------------//
//***************************************** callback hell and error handling ********************************************//
//-------------------------------------------------------------------------------------------------------------------------//

// the response of first then() is taken as parameter to next then().
// So if we need to have two ajax calls, one dependant on another we return fetch()functionin first then().

const apiObject = fetch("https://jsonplaceholder.typicode.com/posts") //This url returns dummy array of objects
  .then(
    (response) => {
      return response.json(); // This ine returns a promise.
    },
    // We can add second to then function for the case of if promise is rejected.
    (error) => {
      console.log(error);
    }
  )
  .then((data) => {
    console.log(data); //This data is actual data that we need i.e. array of objects
    // If error occur appear at this fetch call, then we need to call 'error=>{}' again below in .then(data, error) like this.
    // There is a better way to hande this, we can add .catch() function at last then(), which will catch all errors globally for every fetch()
    return fetch("https://jsonplaceholder.typicode.com/posts/1/comments");
  })

  // let if if we need to have another fetch api  // This is better way to catch all fetch error globally.call which is dependant on above api response or call, we can return api call as above to avoid callback hell.
  // the response of above "return fetch()" is parameter of following then(response)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    // the parameter (data) here is value of "return response.json()"
    button.addEventListener("click", () => {
      consoleData(data); // yhe actual data that we need.
    });
  })
  // This is better way to catch all fetch error globally.
  .catch((error) => {
    console.log(error);
  })
  // Apart from then() and catch() there is finally method.
  // This finally method is executed in all cases independant of whether promise is fulfilled or rejected.
  .finally(() => {
    // Mostly this method is used for functions like stopping loader spinner.
    // This finally method works only bacause .catch() method itself returns a promise.
  });

function consoleData(data) {
  console.log(data);
}

//-------------------------------------------------------------------------------------------------------------------------//
//************************************************ Throwing errors manually ***********************************************//
//-------------------------------------------------------------------------------------------------------------------------//

const userID = 34;

const data3 = fetch(`https://reqres.in/api/users/${userID}`)
  .then((response) => {
    console.log(response.status);
    // Here response.ok is not present or true, we are throwing error.
    if (!response.ok) {
      throw new Error("No user found");
    }
    return response.json();
  })
  .then((data) => {
    console.log("userdata", data);
  })
  // Error we thrown above is catched below
  .catch((error) => {
    console.log("Error is " + error);
  });
