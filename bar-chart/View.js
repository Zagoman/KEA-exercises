"use strict";
const ul = document.querySelector("#bars");

function updateUI(entries) {
  ul.innerHTML = "";
  for (let i = 0; i < entries.length; i++) {
    let instance = document.createElement("li");
    instance.classList.add("bar");
    instance.style.height = (ul.offsetHeight / 32) * entries[i] + "px";
    // instance.style.width = ul.offsetWidth / 40;
    ul.insertAdjacentElement("beforeend", instance);
  }
}
