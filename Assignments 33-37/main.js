// Test Case 1
let num = 9; // "009"

num < 10
  ? console.log(`00${num}`)
  : num >= 10 && num < 100
  ? console.log(`0${num}`)
  : num >= 100
  ? console.log(`${num}`)
  : console.log();

//
//
//

let num111 = 9;
let str = "9";
let str2 = "20";

// Output

if (num111 == str) {
  console.log("{num1} Is The Same Value As {str}");
}
if (num111 == str && num111 !== str) {
  console.log("{num1} Is The Same Value As {str} But Not The Same Type");
}
if (num111 != str2 || num111 !== str2) {
  console.log("{num1} Is Not The Same Value Or The Same Type As {str2}");
}
if (str != str2 && typeof str === typeof str2) {
  console.log("{str} Is The Same Type As {str2} But Not The Same Value");
}

//
//
//

let num11 = 10;
let num22 = 30;
let num33 = "30";

if (
  num33 > num11 &&
  typeof num33 !== typeof num22 &&
  num33 > num11 &&
  num33 == num22 &&
  num33 !== num22 &&
  num33 != num11 &&
  typeof num33 !== typeof num11 &&
  typeof num33 !== typeof num22
) {
  console.log(`
      30 Is Larger Than 10 And Type string Not The Same Type As number
      30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number
      {num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}
      `);
}

/* 
if (((num33 > num11) && (typeof num33 !== typeof num22)) && ((num33 > num11) && (num33 == num22) && (num33 !== num22)) && ((num33 != num11) && (typeof num33 !== typeof num11) && (typeof num33 !== typeof num22)) ) {
    console.log("30 Is Larger Than 10 And Type string Not The Same Type As number" +
    "\n" + "30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number" +
    "\n" +"{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}");
}
*/


//
//

// Edit What You Want Here

let num1 = 15;
let num2 = 10;
let num3 = 15;
let num4 = 41;

/*
  Do Not Edit Below This Line
  Needed Output
  True 7 Times
*/

// Condition 1

if (num1 > num2) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 2

if (num1 > num2 && num1 < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 3

if (num1 > num2 && num1 === num3) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 4

if (num1 + num2 < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 5

if (num1 + num3 < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 6

if (num1 + num2 + num3 < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 7

if (num4 - (num1 + num3) + num2 === 21) {
  console.log("True");
} else {
  console.log("False");
}

// let num1 = 15;
// let num2 = 10;
// let num3 = 15;
// let num4 = 61;
