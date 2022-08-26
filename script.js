document.addEventListener("DOMContentLoaded", start);

let num1;
let num2;
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
  console.log(num1);

  // read second number:
  num2 = document.querySelector("#secondnumber").value;
  console.log(num2);

  // read operator + - * /:
  opValue = document.querySelector("#operator").value;
  console.log(opValue);

  // LAV STRINGS OM TIL NUMBERS HER????!!!! Se slides.

  // if sentence for operators - shot new functions?:
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

  // SKAL TALLENE LAVES OM TIL NUMBERS??? JA TAK!! I EN ANDEN FUNKTION, SÅ DET BLIVER GENERELT?
  // læg tallene sammen:
  result = num1 + num2;
  console.log(result);

  toRoundOrNot();
}

function subNumbers() {
  console.log("subNumbers func loaded");

  // træk tallene fra hinanden:
  result = num1 - num2;

  toRoundOrNot();
}

function mulNumbers() {
  console.log("mulNumbers func loaded");

  // gang tallene med hinanden:

  toRoundOrNot();
}

function divNumbers() {
  console.log("divNumbers func loaded");

  // divider tallene med hinanden:

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
