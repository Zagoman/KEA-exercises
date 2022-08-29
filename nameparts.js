let firstName, middleName, lastName;
const nam = "Albus Percival Wulfric Brian Dumbledore";
console.log(nam.indexOf(" "));
firstName = nam.substring(0, nam.indexOf(" ")).trim();
middleName = nam.substring(nam.indexOf(" ") + 1, nam.lastIndexOf(" ")).trim();
lastName = nam.substring(nam.lastIndexOf(" ") + 1).trim();

console.log("firstName:", firstName);
console.log("middleName:", middleName);
console.log("lastName:", lastName);
