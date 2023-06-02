document.write("<h1>Elzero</h1>");

document.querySelector("h1").style.color = "Blue";
document.querySelector("h1").style.fontSize = "80px";
document.querySelector("h1").style.fontWeight = "bold";
document.querySelector("h1").style.textAlign = "center";
document.querySelector("h1").style.fontFamily = "arial";

console.log(
  "%cElzero %cWeb %cSchool",
  "color: red; font-size: 40px",
  "color: green; font-weight: bold; font-size: 40px",
  "color: white; font-size: 40px; background-color: blue"
);

console.group("Group 1");
console.log("Message One");
console.log("Message Two");
console.group("Child Group");
console.log("Message One");
console.log("Message Two");
console.group("Grand Child Group");
console.log("Message One");
console.log("Message Two");
console.groupEnd();
console.groupEnd();
console.groupEnd();
console.group("Group 2");
console.log("Message One");
console.log("Message Two");

console.table(["Elzero", "Ahmed", "Sameh", "Gamal", "Aya"]);

// console.log("Iam In Console");
// document.write("Iam In Page");

/*
console.log("Iam In Console");
document.write("Iam In Page");
*/
