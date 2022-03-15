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

    // When we use returned value of whereAmI() outside function like below in comments, we do not get error catch even if use catch(err){}.
    // In order to get access to error in function outside function where it is called, we need to throw error again in catch block inside function.

    throw error;
  }
};

whereAmI(19.037, 72.873);

// We need to understand 1 thing that whereAmI() will return a promise, so we can apply like below:
// Below line of code will give us returned value of ahereAmI().
// whereAmI(19.037, 72.873)
// .then((data)=>{console.log(data)})
// .catch((err)=>{console.error(err)})  // After throwing error in catch inside whereAmI(), here error wil be accessible.
// But this approach is not ideal as we are using both async-await and then().
// There is a way in which we can use only async-await and get returned value of whereAmI();

//-----------------------------------------------------------------------------------------------//

// Below function pattern is very infortant. It is called iife function.
// We can use iffe function to apply await to return promise of whereAmI().

let data;

(async function () {
  try {
    data = await whereAmI(19.037, 72.873);
  } catch (err) {
    console.error(err);
  }
})();

console.log(data);
