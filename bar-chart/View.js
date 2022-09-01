"use strict";
const ul = document.querySelector("#bars");
const h2 = document.querySelector("h2");

function updateUI(entries) {
  ul.innerHTML = "";
  for (let i = 0; i < entries.length; i++) {
    let instance = document.createElement("li");
    instance.classList.add("bar");
    instance.style.backgroundColor = `rgb(180, ${Math.floor(255 / 40) * i}, 120)`;
    instance.style.height = (ul.offsetHeight / 32) * entries[i] + "px";
    addEvent(instance, entries[i]);
    // instance.style.width = ul.offsetWidth / 40;
    ul.insertAdjacentElement("beforeend", instance);
  }
}

function displayData(node, customers, bool = true) {
  // console.log(node.offsetHeight);
  node.style.backgroundColor = "inherit";
  node.classList.add("highlight");

  h2.textContent = `Customers: ${customers}`;

  if (!bool) {
    updateUI(data);
    h2.textContent = `Customers: `;
  }
}
