"use strict";
const ul = document.querySelector("#bars");
const h2 = document.querySelector("h2");

function updateUI(entries) {
  // Reset list before desplaying new visual
  ul.innerHTML = "";

  for (let i = 0; i < entries.length; i++) {
    // create an instance to represent each bar
    let instance = document.createElement("li");

    //add styling to each bar according to position on array
    instance.classList.add("bar");
    instance.style.backgroundColor = `rgb(180, ${Math.floor(255 / 40) * i}, 120)`;
    instance.style.height = (ul.offsetHeight / 32) * entries[i] + "px";

    //addEvent belongs to Controller.js
    addEvent(instance, entries[i]);

    // Makes sure the new added element goes to the far right
    ul.insertAdjacentElement("beforeend", instance);
  }
}

// "bool = true" sets default value of argument bool to be true, if omitted
function displayData(node, customers, bool = true) {
  // Change the style to inherit, since inline styles override classes and ids
  node.style.backgroundColor = "inherit";
  node.classList.add("highlight");

  h2.textContent = `Customers: ${customers}`;

  // Use bool to determine if text should be displayed or not
  if (!bool) {
    updateUI(data);
    h2.textContent = `Customers: `;
  }
}
