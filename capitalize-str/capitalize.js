"use strict";
const name = "Lucas";
const cap = capitalize(name);
console.log(cap);

function capitalize(name) {
  return name[0].toUpperCase() + name.substring(1).toLowerCase();
}
