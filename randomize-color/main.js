"use strict";
/**
 * Model
 */

/**
 * View
 */
const HTML = {
  body: document.querySelector("body"),
};
function randomColor() {
  return {
    r: Math.floor(Math.random() * 256),
    g: Math.floor(Math.random() * 256),
    b: Math.floor(Math.random() * 256),
  };
}

function rgbToCSS(colorObject) {
  return `rgb(${colorObject.r},${colorObject.g},${colorObject.b})`;
}
function randomBackground(elem) {
  elem.style.backgroundColor = rgbToCSS(randomColor());
}

/**
 * Controller
 */
function init() {
  randomBackground(HTML.body);
}

document.addEventListener("DOMContentLoaded", init);
