"use strict";
// // Functions modifying global scope items
// function hire(person) {
//   person.hired = true;
// }
// function fire(person) {
//   person.hired = false;
// }

// const person1 = {
//   name: "Tom",
//   hired: true,
// };

// // fire(person1);
// // console.log(person1);
// // hire(person1);
// // console.log(person1);

// /**
//  * Function to call another function
//  */

// // function hireOrFire(action, person) {
// //   action(person);
// // }

// // hireOrFire(console.log, person1);
// function consoleTree(arg) {
//   console.log(arg);
// }
// function consoleTwig(func, arg, arg2) {
//   func(arg, arg2);
// }
// function consoleLodge(func, arg, arg2) {
//   func(arg, arg2);
// }
// consoleLodge(consoleTwig, consoleTree, "gif");

// async function loadJSON(url, callback) {
//   if (url && callback) {
//     const response = await fetch(url);
//     const data = await response.json();
//     callback(data[0]);
//   } else {
//     console.error("Parameters not correct");
//   }
// }

// let url = "https://lucaszago.dk/vlp/wp-json/wp/v2/event";
// loadJSON(url, (data) => {
//   console.log(data);
// });

// const people = ["Harry", "Ron", "Hermione", "Neville"];

// // function sayHello(a, b, c, d) {
// //   console.log(`a: ${a}, b: ${b}, c: ${c}, d: ${d}`);
// // }

// // people.forEach(sayHello);

// people.forEach((a, b, c, d) => {
//   console.log(`a: ${a}, b: ${b}, c: ${c}, d: ${d}`);
// });
const alphabet = ["a", "b", "c", "d", "e"];

function isVowel(letter) {
  const LCletter = letter.toLowerCase();
  if (LCletter == "a" || LCletter == "e" || LCletter == "i" || LCletter == "o" || LCletter == "u" || LCletter == "y") {
    return true;
  }
  return false;
}

const vowelArr = alphabet.filter(isVowel);
console.log(vowelArr);
