"use strict";

const getAirLine = async (id) => {
  try {
    const response = await fetch(
      `https://api.instantwebtools.net/v1/airlines/${id}`
    );
    const dataJSON = await response.json();
    return dataJSON;
  } catch (err) {
    throw err;
  }
};

// 1st Combinator is Promise.race()

/*
    Promise.race() accepts an array of promises and returns a promise.
    This returned promise is settled when when any one of the input promises is settled.
    And by settled means it does not depend on whether promise is fullfilled or rejected.
    If one of the promise in input promises is rejected first before any other promise is settles then rejected value is returned.
*/

(async function () {
  const data = await Promise.race([
    getAirLine(1),
    getAirLine(2),
    getAirLine(3),
  ]);
  console.log("data", data);
})();

// Mostly Promise.race() is used along with in case of timeout.
// An ajax call is raced along with times which after some time throws error.
// So if ajax call does not respond after some allotted time, time out error is thrown.

const timeout = function (sec) {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error("Request took too long"));
    }, sec * 1000);
  });
};

(async function () {
  const data = await Promise.race([
    getAirLine(1),
    getAirLine(2),
    getAirLine(3),
    timeout(1),
  ]);
  console.log("data", data);
})();

//------------------------------------------------------------------------------------------------------------------------------------------------------//

// 2nd combinator is Promise.allSettled() <- modern(ES2020)

/*
    Promise.allSettled() works like Promise.all().
    The only difference between them is 
    Promise.allSettled() will return array of responses even if one of the input promise is rejected.
    Unlike Promise.all() which will short circuit the rejected promise. 
*/

const allSettled = Promise.allSettled([
  Promise.resolve("1st resolve"),
  Promise.reject(new Error("rejected")),
  Promise.resolve("2nd resolve"),
]);

(async () => {
  const allSettle = await allSettled;
  console.log("allSettled", allSettle);
})();

//------------------------------------------------------------------------------------------------------------------------------------------------------//

// 3rd combinator is Promise.any() <- modern(ES2021)

/*
    Promise.any() acts like Promise.race()
    The only difference is it will ignore all rejected promises.
    It will return response of first resolved promise. 
    It will only return reject if all promises in given input promise array are rejected.
*/

const any = Promise.any([
  Promise.resolve("1st resolve"),
  Promise.reject(new Error("rejected")),
  Promise.resolve("2nd resolve"),
])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
  });
