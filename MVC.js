"use strict";

//Model
const model = ["peter", "paul", "mary"];
const h2names = document.querySelector("#names");
const inputName = document.querySelector("#name");
const button = document.querySelector("button");

function init() {
  button.addEventListener("click", btn_click);
}
init();

function btn_click() {
  addNameToModel(inputName.value);
  updateView();
}
updateView();
//controller

function addNameToModel(name) {
  model.push(name);
}

// View
console.log(model);
function updateView() {
  h2names.textContent = model.join(" ");
}
