document.addEventListener("DOMContentLoaded", start);

let num1;
let num2;
let convertedNumber1;
let convertedNumber2;
let result;
let opValue;
let roundValue;
let addedRoundValue;
let checkbox;
let resultToAppend;

function start() {
  console.log("start func loaded");

  //fjern evt. eventlistener:
  // remove eventlistener for click on "calculate" and "clear results":
  document.querySelector("#calculate").removeEventListener("click", readNumbers);
  document.querySelector("#clear").removeEventListener("click", clearResults);

  // add eventlistener på "calculate" knap og "clear" knap:
  document.querySelector("#calculate").addEventListener("click", readNumbers);
  document.querySelector("#clear").addEventListener("click", clearResults);
}

function clearResults() {
  console.log("clearResults func loaded");

  // clear liste:
  document.getElementById("results").innerHTML = "";

  start();
}

function readNumbers() {
  console.log("readFirstNumber func loaded");

  // read first number:
  num1 = document.querySelector("#firstnumber").value;
  console.log("number 1 is:", num1);

  // read second number:
  num2 = document.querySelector("#secondnumber").value;
  console.log("number 2 is:", num2);

  // read operator + - * /:
  opValue = document.querySelector("#operator").value;
  console.log("operation picked is:", opValue);

  // convert strings to numbers:
  convertedNumber1 = Number(num1); // typeof is number
  convertedNumber2 = Number(num2);

  // check for operators and send to new calculating functions:
  if (opValue === "add") {
    addNumbers();
  } else if (opValue === "sub") {
    subNumbers();
  } else if (opValue === "mul") {
    mulNumbers();
  } else {
    divNumbers();
  }

  // remove eventlistener on "click":
  document.querySelector("#calculate").removeEventListener("click", readNumbers);
}

// functions that calculate:
function addNumbers() {
  console.log("addNumbers func loaded");

  // add converted numbers:
  result = convertedNumber1 + convertedNumber2;
  console.log("Result is:", result);

  toRoundOrNot();
}

function subNumbers() {
  console.log("subNumbers func loaded");

  // subtract numbers:
  result = convertedNumber1 - convertedNumber2;
  console.log("resultatet er:", result);

  toRoundOrNot();
}

function mulNumbers() {
  console.log("mulNumbers func loaded");

  // gang tallene med hinanden:
  result = convertedNumber1 * convertedNumber2;
  console.log("resultatet er:", result);

  toRoundOrNot();
}

function divNumbers() {
  console.log("divNumbers func loaded");

  // divider tallene med hinanden:
  result = convertedNumber1 / convertedNumber2;
  console.log("resultatet er:", result);

  toRoundOrNot();
}

// functions that check decimals & adds them:
function toRoundOrNot() {
  console.log("toRoundOrNot func loaded");

  // checkbox checked or not?: (src: https://www.javascripttutorial.net/javascript-dom/javascript-checkbox/)
  checkbox = document.querySelector("#doround");
  console.log(checkbox.checked); // console.log true or false

  if (checkbox.checked === false) {
    writeFirstResult();
  } else {
    doTheRound();
  }
}

function doTheRound() {
  console.log("doTheRound func loaded");

  // number of decimals value:
  roundValue = document.querySelector("#decimals").value; // typeof RoundValue is string!

  // add decimals 0 - 8:
  if (roundValue === "0") {
    // add decimals:
    result = result.toFixed(); // toFixed() makes a string
    // convert the string to number again:
    result = Number(result);
    console.log("rounded + converted result is:", typeof result, result);
  } else if (roundValue === "1") {
    result = result.toFixed(1);
    result = Number(result);
    console.log("rounded + converted result is:", result);
  } else if (roundValue === "2") {
    result = result.toFixed(2);
    result = Number(result);
    console.log("rounded + converted result is:", result);
  } else if (roundValue === "3") {
    result = result.toFixed(3);
    result = Number(result);
    console.log("rounded + converted result is:", result);
  } else if (roundValue === "4") {
    result = result.toFixed(4);
    result = Number(result);
    console.log("rounded + converted result is:", result);
  } else if (roundValue === "5") {
    result = result.toFixed(5);
    result = Number(result);
    console.log("rounded + converted result is:", result);
  } else if (roundValue === "6") {
    result = result.toFixed(6);
    result = Number(result);
    console.log("rounded + converted result is:", result);
  } else if (roundValue === "7") {
    result = result.toFixed(7);
    result = Number(result);
    console.log("rounded + converted result is:", result);
  } else if (roundValue === "8") {
    result = result.toFixed(8);
    result = Number(result);
    console.log("rounded + converted result is:", result);
  }

  writeFirstResult();
}

function writeFirstResult() {
  console.log("writeResult func loaded");

  // insert result in list:
  document.getElementById("results").innerHTML = result;

  // removes number + insert result in first field:
  document.getElementById("firstnumber").value = "";
  document.getElementById("firstnumber").value = result;

  // if sentence asking if list is full - if so go to scrollList():
  start();
}

function scrollList() {
  console.log("scrollList func loaded");

  document.querySelector("#results").scrollTo(0.1);
}
