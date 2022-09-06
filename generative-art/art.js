"use strict";
const artworks = {};
for (let i = 1; i <= 9; i++) {
  artworks[`artwork${i}`] = document.querySelector(`#artwork${i}`);
}

console.log(artworks);

// Artwork 1
for (let i = 100; i < 300; i += 20) {
  let box = document.createElement("div");
  box.classList.add("box");
  box.style.width = i + "px";
  box.style.height = i + "px";
  artworks.artwork1.append(box);
}

// Artwork 2
for (let i = 0; i < 90; i += 10) {
  let box = document.createElement("div");
  box.classList.add("box");
  box.style.transform = `rotate(${i}deg)`;
  artworks.artwork2.append(box);
}

// Artwork 3
for (let i = 0; i < 200; i += 10) {
  let circle = document.createElement("div");
  circle.classList.add("circle");
  circle.style.width = i + "px";
  circle.style.height = i + "px";

  artworks.artwork3.append(circle);
}

// Artwork 4
for (let i = -90; i < 90; i += 20) {
  let box = document.createElement("div");
  box.classList.add("box");
  box.style.transform = `translate(${i}px, ${i}px)`;
  artworks.artwork4.append(box);
}

// Artwork 5
for (let i = 1; i < 512; i *= 2) {
  let circle = document.createElement("div");
  circle.classList.add("circle");
  circle.style.width = i + "px";
  circle.style.height = i + "px";

  artworks.artwork5.append(circle);
}

// Artwork 6

for (let i = -20; i < 45; i += 5) {
  let circle = document.createElement("div");
  circle.classList.add("circle");
  circle.style.transform = `translateX(${i - 50}px)`;
  circle.style.transform = `rotate(${i * 4}deg)`;

  artworks.artwork6.append(circle);
}
