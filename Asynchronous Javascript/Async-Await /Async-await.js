"use strict";

const whereAmI = async (lat, lng) => {
  // The following async code is equivalent to this code which we learnt in Fetch API
  //   fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       console.log(data);
  //     });

  try {
    const response = await fetch(
      `https://geocode.xyz/${lat},${lng}?geoit=json`
    );
    if (!response.ok) {
      throw new Error("Request sent before 3 seconds.");
    }
    const responseData = await response.json();
    console.log(responseData);

    // this Async function will return a promise.
    return responseData;
  } catch (error) {
    console.error(error);
  }
};

whereAmI(19.037, 72.873);
