"use strict";
let clicked = false;
function init() {
  for (let i = 0; i < 40; i++) {
    data.push(getCustomersQty());
  }

  updateUI(data);

  setTimeout(loop, 1000);
}

function loop() {
  if (!clicked) {
    data.push(getCustomersQty());
    data.shift();
    updateUI(data);
  }
  setTimeout(loop, 1000);
}

function addEvent(node, customers) {
  node.addEventListener("mouseover", () => {
    // console.log(node);
    displayData(node, customers);
  });
  node.addEventListener("mouseout", () => {
    // console.log(node);
    displayData(node, customers, false);
  });
}
document.body.addEventListener("mousedown", () => {
  clicked = true;
});
document.body.addEventListener("mouseup", () => {
  clicked = false;
});
document.addEventListener("DOMContentLoaded", init);
