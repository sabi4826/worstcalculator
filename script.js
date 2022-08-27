document.addEventListener("DOMContentLoaded", start);

let num1;
let num2;
let convertedNumber1;
let convertedNumber2;
let result;
let opValue;
let roundValue;

function start() {
  console.log("start func loaded");

  // add eventlistener på "calculate" knap og "clear" knap:
  document.querySelector("#calculate").addEventListener("click", readNumbers);
  document.querySelector("#clear").addEventListener("click", clearResults);
}

function clearResults() {
  console.log("clearResults func loaded");

  // gem seneste resultat (TJEK) i en let:

  // clear liste:

  // append resultat i first input field:

  // fjern eventlistener "click":
  document.querySelector("#clear").removeEventListener("click", clearResults);

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
  console.log(opValue);

  // convert strings to numbers:
  convertedNumber1 = Number(num1);
  console.log("converted number is:", typeof convertedNumber1);

  convertedNumber2 = Number(num2);
  console.log("converted number is:", typeof convertedNumber2);

  // if sentence for operators - shoot new functions?:
  if (opValue === "add") {
    addNumbers();
  } else if (opValue === "sub") {
    subNumbers();
  } else if (opValue === "mul") {
    mulNumbers();
  } else {
    divNumbers();
  }

  // fjern eventlistener på "click":
  document.querySelector("#calculate").removeEventListener("click", readNumbers);
}

function addNumbers() {
  console.log("addNumbers func loaded");

  // add converted numbers:
  result = convertedNumber1 + convertedNumber2;
  console.log(result);

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

function toRoundOrNot() {
  console.log("toRoundOrNot func loaded");

  // tjek, om der er valgt round:
  roundValue = document.querySelector("#decimals").value;
  console.log(roundValue);

  if (roundValue === 0) {
    writeFirstResult();
  } else {
    doTheRound();
  }
}

function doTheRound() {
  console.log("doTheRound func loaded");

  // gør noget med let roundValue

  // indsæt decimaler

  writeFirstResult();
}

function writeFirstResult() {
  console.log("writeResult func loaded");

  appendToList();
}

function appendToList() {
  console.log("appendToList func loaded");

  scrollList();
}

function scrollList() {
  console.log("scrollList func loaded");
}
