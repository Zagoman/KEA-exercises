"use strict";
/**
 * Global Variables
 */
const HTML = {
  input: document.querySelector("input[type=color]"),
  rgbSpan: document.querySelector(".rgb"),
  hexSpan: document.querySelector(".hex"),
  hslSpan: document.querySelector(".hsl"),
  colorBox: document.querySelector(".color_box"),
};

/**
 * Model
 */

/**
 * Controller
 */
function init() {
  console.log("init");
  updateUI();
}

document.addEventListener("DOMContentLoaded", init);
HTML.input.addEventListener("input", updateUI);

function updateUI() {
  showHex(HTML.hexSpan, HTML.input);
  showRgb(HTML.rgbSpan, HTML.input);
  showHsl(HTML.hslSpan, HTML.input);
  updateBgColor(HTML.colorBox, HTML.input);
}

function getHexValue(inputNode) {
  return inputNode.value;
}

function getRgbValue(hexCode) {
  return {
    r: Number(parseInt(hexCode.substr(1, 2), 16)),
    g: Number(parseInt(hexCode.substr(3, 2), 16)),
    b: Number(parseInt(hexCode.substr(5, 2), 16)),
  };
}

function getHslValue(rgbObj) {
  let decCount = 2;
  let r = rgbObj.r;
  let g = rgbObj.g;
  let b = rgbObj.b;
  r /= 255;
  g /= 255;
  b /= 255;

  let h, s, l;

  const min = Math.min(r, g, b);
  const max = Math.max(r, g, b);

  if (max === min) {
    h = 0;
  } else if (max === r) {
    h = 60 * (0 + (g - b) / (max - min));
  } else if (max === g) {
    h = 60 * (2 + (b - r) / (max - min));
  } else if (max === b) {
    h = 60 * (4 + (r - g) / (max - min));
  }

  if (h < 0) {
    h = h + 360;
  }

  l = (min + max) / 2;

  if (max === 0 || min === 1) {
    s = 0;
  } else {
    s = (max - l) / Math.min(l, 1 - l);
  }
  // multiply s and l by 100 to get the value in percent, rather than [0,1]
  s *= 100;
  l *= 100;

  return {
    h: Math.round(h),
    s: `${s.toFixed(decCount)}%`,
    l: `${l.toFixed(decCount)}%`,
  }; // just for testing
}
/**
 * View
 */
function showHex(node, inputNode) {
  node.textContent = `HEX: ${getHexValue(inputNode)}`;
}

function showRgb(node, inputNode) {
  let rgbObj = getRgbValue(getHexValue(inputNode));
  node.textContent = `RGB: ${rgbObj.r}, ${rgbObj.g}, ${rgbObj.b}`;
}

function showHsl(node, inputNode) {
  let hslObj = getHslValue(getRgbValue(getHexValue(inputNode)));
  node.textContent = `HSL: ${hslObj.h}, ${hslObj.s}, ${hslObj.l}`;
}

function updateBgColor(node, inputNode) {
  node.style.backgroundColor = `${getHexValue(inputNode)}`;
}
