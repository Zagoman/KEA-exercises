"use strict";

const data = [];
for (let i = 0; i < 40; i++) {
  data.push(getCustomersQty());
}

function getCustomersQty() {
  //Fake data entry
  return Math.floor(Math.random() * 32);
}
