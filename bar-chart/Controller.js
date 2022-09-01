"use strict";
let clicked = false; // Keeps track on if mouse is clicked or not

function init() {
  // populate data array
  for (let i = 0; i < 40; i++) {
    data.push(getCustomersQty());
  }

  // display bars
  updateUI(data);

  // start loop
  setTimeout(loop, 1000);
}

function loop() {
  // Logic only applies if mouse is not clicked, otherwise it keeps looping til it isn't clicked anymore
  if (!clicked) {
    data.push(getCustomersQty());
    data.shift();
    updateUI(data);
  }
  setTimeout(loop, 1000);
}

function addEvent(node, customers) {
  // display number of customers
  node.addEventListener("mouseover", () => {
    displayData(node, customers);
  });
  // deletes the shown number of customers
  node.addEventListener("mouseout", () => {
    // console.log(node);
    displayData(node, customers, false);
  });
}

// change state of click controller
document.body.addEventListener("mousedown", () => {
  clicked = true;
});
document.body.addEventListener("mouseup", () => {
  clicked = false;
});

// initiates program
document.addEventListener("DOMContentLoaded", init);
