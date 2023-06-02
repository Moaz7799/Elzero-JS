function sayHello(theName, theGender) {
  theGender === "Male"
    ? console.log(`Hello Mr ${theName}`)
    : theGender === "Female"
    ? console.log(`Hello Miss ${theName}`)
    : console.log(`Hello ${theName}`);
}

// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"

console.log("==========================");
//
//
//
//
//

function calculate(firstNum, secondNum, operation) {
  if (secondNum === undefined) {
    console.log("Second Number Not Found");
  } else if (operation === "add" || undefined) {
    console.log(firstNum + secondNum);
  } else if (operation === "subtract") {
    console.log(firstNum - secondNum);
  } else if (operation === "multiply") {
    console.log(firstNum * secondNum);
  } else {
    console.log(firstNum + secondNum);
  }
}

// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, "add"); // 50
calculate(20, 30, "subtract"); // -10
calculate(20, 30, "multiply"); // 600

console.log("==========================");
//
//
//
//
//

function ageInTime(theAge) {
  if (10 < theAge && theAge < 100) {
    console.log(`${theAge * 12} Months`);
    console.log(`${Math.round((theAge * 365) / 7)} Weeks`);
    console.log(`${theAge * 365} Days`);
    console.log(`${theAge * 365 * 24} Hours`);
    console.log(`${theAge * 365 * 24 * 60} Minutes`);
    console.log(`${theAge * 365 * 24 * 60 * 60} seconds`);
  } else {
    console.log("Age Out Of Range");
  }
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months

// console.log(`${theAge * 52.1429} weeks`);

console.log("==========================");

//
//
//
//
//

function createSelectBox(startYear, endYear) {
  document.write(`<select>`);
  for (let i = startYear; i <= endYear; i++) {
    document.write(`<option value="${i}">${i}</option>`);
  }
  document.write(`</select>`);
}
createSelectBox(2000, 2021);

//
//
//
//
//

let a = 1;

function multiply(...number) {
  for (let i = 0; i < number.length; i++) {
    if (typeof number[i] === "string") {
      continue;
    } else if (Number.isInteger(number[i]) === false) {
      a *= Math.trunc(number[i]);
    } else {
      a *= number[i];
    }
  }
  console.log(a);
  a = 1;
}

multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000
