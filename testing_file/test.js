const hello = () => alert("hi!");

//Create a button tha when pressed gives you an alert.
let button = document.querySelector("button");
button.onclick = hello;

//Select the input in the document
let input = document.querySelector("input");

input.addEventListener(keyup, hello);
