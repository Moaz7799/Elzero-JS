let start = 10;
let end = 100;
let exclude = 40;

// for (let i = start; start <= end; start += i) {
//   if (start == exclude) {
//     continue;
//   }
//   console.log(start);
// }

for (let i = start; i <= end; i += start) {
  if (i == exclude) {
    continue;
  }
  console.log(i);
}

/* Output
10;
20;
30;
50;
60;
70;
80;
90;
100;
*/

console.log("###############");
//
//
//
//

let start1 = 10;
let end1 = 0;
let stop1 = 3;

// for (let i = start1; start1 >= stop1; start1--) {
//   if (start1 === i) {
//     console.log(start1);
//   } else {
//     console.log(`0${start1}`);
//   }
// }

for (let i = start1; i >= stop1; i--) {
  if (i === start1) {
    console.log(`${i}`);
  } else {
    console.log(`0${i}`);
  }
}

/* Output
10;
09;
08;
07;
06;
05;
04;
03;
*/
console.log("###############");
//
//
//
//
//

let start2 = 1;
let end2 = 6;
let breaker2 = 2;

for (let i = start2; i <= end2; i++) {
  console.log(i);
  for (let j = breaker2; j < end2; j += breaker2) {
    console.log(`-- ${j}`);
  }
}

// Output
/*
1
-- 2
-- 4
2
-- 2
-- 4
3
-- 2
-- 4
4
-- 2
-- 4
5
-- 2
-- 4
6
-- 2
-- 4
*/
console.log("###############");
//
//
//
//
//

let index = 10;
let jump = 2;
let end3 = 0;

for (;;) {
  console.log(index);
  index -= jump;
  if (index == jump) {
    break;
  }
}

// Output
/*
10
8
6
4
*/

console.log("###############");
//
//
//
//
//

let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";
num = letter.length;

for (let i = letter.indexOf(letter); i < friends.length; i++) {
  if (friends[i].startsWith(letter.toUpperCase())) {
    continue;
  }
  console.log(`${num} => ${friends[i]}`);
  num++;
}

// Output
/*
("1 => Sayed");
("2 => Eman");
("3 => Mahmoud");
("4 => Osama");
("5 => Sameh");
*/

console.log("###############");
//
//
//
//
//

let start4 = 0;
let swappedName = "elZerO";
let result = "";

for (let i = start4; i < swappedName.length; i++) {
  if (swappedName[i] === swappedName[i].toLowerCase()) {
    result += swappedName[i].toUpperCase();
  } else if (swappedName[i] === swappedName[i].toUpperCase()) {
    result += swappedName[i].toLowerCase();
  }
}
console.log(result);

// Output
// "ELzERo"

console.log("###############");
//
//
//
//
//

let start5 = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];

for (let i = mix[start5]; i < mix.length; i++) {
  if (typeof mix[i] !== typeof start5) {
    continue;
  }
  console.log(mix[i]);
}

// Output
/*
2
3
4
*/
