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
    }, sec * 10);
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

// 2nd combinator
