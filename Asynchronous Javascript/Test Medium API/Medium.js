"use strict";

const getMediumData = async (url) => {
  const response = await fetch(url);
  const resData = await response.json();
  console.log(resData);
};

const mediumURL =
  "https://bootcamp.uxdesign.cc/case-study-visitor-management-in-a-condominium-f2ecc41a5aa0";

getMediumData(mediumURL);
