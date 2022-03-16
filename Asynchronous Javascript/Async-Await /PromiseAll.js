"use strict";

const getAirLine = async (id) => {
  try {
    const response = await fetch(
      `https://api.instantwebtools.net/v1/airlines/${id}`
    );
    const dataJSON = await response.json();
    console.log(dataJSON);
    return dataJSON;
  } catch (err) {
    throw err;
  }
};

let dataOfAirline;

(async function () {
  /*
  try {
    // These are three promises, independant of each other.
    // Although they are asynchronous they run at diffetent times, check in network tab.
    // In order to run them parallely,there is a method.
    // Loading them parallely will result in reduction in time for loading.

    /*

    let dataOfAirline1 = await getAirLine(1);
    console.log(dataOfAirline1);
    let dataOfAirline2 = await getAirLine(2);
    console.log(dataOfAirline2);
    let dataOfAirline3 = await getAirLine(3);
    console.log(dataOfAirline3);
  } catch (err) {
    console.error(err);
  }

  */

  // We use Promise.all() function to run all promises parallely.
  // Promise.all() takes an array of promises as parameter.
  // and it will return a promise with array of data of all three promises.
  // So we can call Promise.all() as any other promises like below, store it in variable with awaiting promises.
  const data = await Promise.all([getAirLine(1), getAirLine(2), getAirLine(3)]);
  // Here data will be array of all responses from above 3 function calls.
  // So Promise.all() receives an array and returns an array.
  console.log("data", data);
})();
