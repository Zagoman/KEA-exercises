for (let i = 0; i < 10; i++) {
  console.log(i);
}

for (let i = 1; i <= 10; i++) {
  console.log("1 to 10", i);
}

for (let i = 10; i >= 0; i--) {
  console.log("decreasing", i);
  if (i === 0) console.log("liftoff");
}

for (let i = 1; i < 20; i = i + 2) {
  console.log("odds", i);
}

for (let i = 1; i <= 16777216; i = i * 2) {
  console.log("doubles", i);
}

for (let i = 111; i < 140; i = i + 3) {
  console.log("plus 3", i);
}

for (let i = 100; i >= 0; i = i - 10) {
  console.log("i - 10", i);
}
