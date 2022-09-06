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
  let userInput = getUserInput(HTML.input);
  let colorValues = getColorValues(userInput);
  updateUI(colorValues);
}

document.addEventListener("DOMContentLoaded", init);
HTML.input.addEventListener("input", init);

function getColorValues(hexCode) {
  let rgb = getRgbValue(hexCode);
  let hsl = getHslValue(rgb);
  let hex = hexCode;
  return {
    rgb,
    hsl,
    hex,
  };
}

function updateUI(colorValues) {
  showHex(colorValues.hex, HTML.hexSpan);
  showRgb(colorValues.rgb, HTML.rgbSpan);
  showHsl(colorValues.hsl, HTML.hslSpan);
  updateBgColor(colorValues.rgb, HTML.colorBox);
}

function getUserInput(inputNode) {
  return inputNode.value;
}

function RGBToCSS(rgb) {
  return `rgb(${rgb.r},${rgb.g},${rgb.b})`;
}

function getRgbValue(hexCode) {
  return {
    r: parseInt(hexCode.substr(1, 2), 16),
    g: parseInt(hexCode.substr(3, 2), 16),
    b: parseInt(hexCode.substr(5, 2), 16),
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
function showHex(color, node) {
  node.textContent = `HEX: ${color}`;
}

function showRgb(color, node) {
  node.textContent = `RGB: ${color.r}, ${color.g}, ${color.b}`;
}

function showHsl(color, node) {
  node.textContent = `HSL: ${color.h}, ${color.s}, ${color.l}`;
}

function updateBgColor(color, node) {
  node.style.backgroundColor = RGBToCSS(color);
}
