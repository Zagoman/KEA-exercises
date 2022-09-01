"use strict";
function init() {
  for (let i = 0; i < 40; i++) {
    data.push(getCustomersQty());
  }

  updateUI(data);

  setTimeout(loop, 1000);
}

function loop() {
  data.push(getCustomersQty());
  data.shift();
  updateUI(data);
  setTimeout(loop, 1000);
}

document.addEventListener("DOMContentLoaded", init);
