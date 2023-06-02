let dateNow = new Date();
let birthDate = new Date("feb 18 2003");
let dateDiff = dateNow - birthDate;

let seconds = dateDiff / 1000;
console.log(`${seconds.toFixed()} Seconds`);

let minutes = seconds / 60;
console.log(`${minutes.toFixed()} Minutes`);

let hours = minutes / 60;
console.log(`${hours.toFixed()} Hours`);

let days = hours / 24;
console.log(`${days.toFixed()} Days`);

let months = days / 30;
console.log(`${months.toFixed()} Months`);

let years = days / 365;
console.log(`${years.toFixed()} Years`);

console.log("-".repeat(66));
////////////////////////////////////////////////////

console.log(new Date("1980-01-01T00:00:01"));

console.log("-".repeat(66));
////////////////////////////////////////////////////

dateNow.setDate(0);
console.log(dateNow);

var yearMonths = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

console.log(
  `Previous Month Is ${
    yearMonths[dateNow.getMonth()]
  } And Last Day Is ${dateNow.getDate()}`
);

// Needed Output
// "Sat Apr 30 2022 18:13:20 GMT+0200 (Eastern European Standard Time)"
// "Previous Month Is April And Last Day Is 30"

console.log("-".repeat(66));
////////////////////////////////////////////////////

console.log(new Date("feb 18 2003"));
console.log(new Date(2003, 1, 18));
console.log(new Date("2003-02-18T00:00:00"));

// Needed Output
// "Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)"
// "Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)"
// "Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)"

console.log("-".repeat(66));
////////////////////////////////////////////////////

/*
const t0 = performance.now();

for (let i = 1; i <= 99999; i++) {
  console.log(i);
}

const t1 = performance.now();

console.log(`Loop Took ${Math.trunc(t1 - t0)} Milliseconds.`);
*/

// Needed Output
// "Loop Took 1921 Milliseconds."

////////////////////////////////////////////////////

function* gen() {
  let index = 14;
  let num = 140;
  let sum = index + num;
  yield index;
  while (true) {
    yield sum;
    sum += num += 200;
  }
}

// After yielding index, the function enters a while loop that will run indefinitely. 
//Inside the loop, the function yields sum and then updates sum and num by adding 200 to num and adding the result to sum.

let generator = gen();

console.log(generator.next()); // {value: 14, done: false}
console.log(generator.next()); // {value: 154, done: false}
console.log(generator.next()); // {value: 494, done: false}
console.log(generator.next()); // {value: 1034, done: false}
console.log(generator.next()); // {value: 1774, done: false}
console.log(generator.next()); // {value: 2714, done: false}
console.log(generator.next()); // {value: 3854, done: false}
console.log(generator.next()); // {value: 5194, done: false}
console.log(generator.next()); // {value: 6734, done: false}

console.log("-".repeat(66));
////////////////////////////////////////////////////

function* genNumbers() {
  yield* [1, 2, 2, 2, 3, 4, 5];
}

function* genLetters() {
  yield* ["A", "B", "B", "B", "C", "D"];
}

function* genAll() {
  yield* new Set(genNumbers());
  yield* new Set(genLetters());
}

let generator1 = genAll();

console.log(generator1.next()); // {value: 1, done: false}
console.log(generator1.next()); // {value: 2, done: false}
console.log(generator1.next()); // {value: 3, done: false}
console.log(generator1.next()); // {value: 4, done: false}
console.log(generator1.next()); // {value: 5, done: false}
console.log(generator1.next()); // {value: "A", done: false}
console.log(generator1.next()); // {value: "B", done: false}
console.log(generator1.next()); // {value: "C", done: false}
console.log(generator1.next()); // {value: "D", done: false}

console.log("-".repeat(66));
////////////////////////////////////////////////////

// main.js File

import calc from "./mod-one.js";
import * as modOne from "./mod-two.js";

console.log(calc(modOne.numOne, modOne.numTwo, modOne.numThree)); // 60

// mod-one.js File
/*
export default function (one, two, three) {
  return one + two + three;
}
*/

// mod-two.js File
/*
let a = 10;
let b = 20;
let c = 30;

export { a as numOne, b as numTwo, c as numThree };
*/
