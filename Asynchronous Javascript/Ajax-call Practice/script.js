"use strict";

let apiJSON;
const mainDiv = document.querySelector(".main");

// Ajax stands for asynchronous javascript and XML
// XHR object = XMLHttpRequest object.
// We can ask for data  in any format: json, xml, txt, html but prefer JSON.

// Firt step: Creating new xhr object.
const xhrRequest = new XMLHttpRequest();

// open the object: specify request type(GET, PUT, POST, DELETE, PATCH), request url() and boolean(synchronous status<mostly true>)
xhrRequest.open("GET", "https://fakestoreapi.com/products/1", true);

// Sending xhr request is important as without it nothing will happen.
xhrRequest.send();

// Here 'load' event listener is used to to executing following callback function after api data is fetched.
// As xhr requests are asynchronous.
xhrRequest.addEventListener("load", function () {
  // Here we are converting text to JSON
  apiJSON = JSON.parse(xhrRequest.responseText);
  console.log(JSON.parse(xhrRequest.responseText));

  // We can write html using template literal like this and insert javascript expressions ->
  const html = `<div>
    <h1 class="title">${apiJSON.title}</h1>
    <div class="catagory">${apiJSON.category}</div>
    <div class="description">${apiJSON.description}</div>
    <img src="${apiJSON.image}" alt="An Image" />
    <div class="price">${apiJSON.price}</div>
    </div>`;

  // insertAdjacentHTML() function is used to insert html in DOM.
  // It takes 2 arguments ("<need research>, html elements")
  mainDiv.insertAdjacentHTML("beforeend", html);
});
