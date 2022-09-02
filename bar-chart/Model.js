"use strict";

const data = [];
// for (let i = 0; i < 40; i++) {
//   data.push(getCustomersQty());
// }

function getCustomersQty() {
  // Changed to 33 since it uses floor, as 32 it rounds down to 31;
  return Math.floor(Math.random() * 33);
}
