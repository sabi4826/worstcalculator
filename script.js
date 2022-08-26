document.addEventListener("DOMContentLoaded", start);

function start() {
  console.log("start func loaded");

  // add eventlistener på "calculate" knap og "clear" knap:
  document.querySelector("#calculate").addEventListener("click", readFirstNumber);
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

function readFirstNumber() {
  console.log("readFirstNumber func loaded");

  // read first number:
  let num1 = document.querySelector("#firstnumber").value;
  console.log(num1);

  // read second number:
  let num2 = document.querySelector("#secondnumber").value;
  console.log(num2);

  // read operator + - * /:
  let opValue = document.querySelector("#operator").value;
  console.log(opValue);

  // if sentence for operators - shot new functions?:

  // fjern eventlistener på "click":
  document.querySelector("#calculate").removeEventListener("click", readFirstNumber);
}
