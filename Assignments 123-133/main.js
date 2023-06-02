let setOfNumbers = new Set([10]);

setOfNumbers.add(20).add(setOfNumbers.size);

console.log(setOfNumbers);

console.log([...setOfNumbers][2]);

console.log("-".repeat(50));
/////////////////////////////////////////////////////////////////

let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];

let newFriendsArray = Array.from(new Set(myFriends)).sort();

console.log(newFriendsArray);

console.log("-".repeat(50));
/////////////////////////////////////////////////////////////////

let myInfo = {
  username: "Osama",
  role: "Admin",
  country: "Egypt",
};

/*
let myMap = new Map([
  ["username", "Osama"],
  ["role", "Admin"],
  ["country", "Egypt"],
]);
*/

let myMap = new Map(Object.entries(myInfo));

console.log(myMap);
console.log(myMap.size);
console.log(myMap.has("role"));

console.log("-".repeat(50));
/////////////////////////////////////////////////////////////////

let theNumber = 100020003000;

console.log(
  +[
    ...new Set([...new Set([...`${theNumber}`])].copyWithin(true, false, true)),
  ].join("")
);

// console.log(+[...new Set(theNumber.toString())].sort().slice(true).join(""));

console.log("-".repeat(50));
/////////////////////////////////////////////////////////////////

let theName = "Elzero";

console.log([...theName]);
console.log(theName.split(""));
console.log([...new Set(theName)]);
console.log(Array.from(new Set(theName)));
console.log(Array.from(theName));
console.log(Object.assign([], theName));

// Needed Output
// ['E', 'l', 'z', 'e', 'r', 'o']

console.log("-".repeat(50));
/////////////////////////////////////////////////////////////////

let chars = ["A", "B", "C", "D", "E", 10, 15, 6];

let num = chars.filter((ele) => typeof ele === "number");

let string = chars.filter((ele) => isNaN(ele));

console.log(num.concat(string).copyWithin(0, num.length, num.length * 2));

/////////////////////////////////////////////////////////////////

let chars2 = ["A", "B", "C", 20, "D", "E", 10, 15, 6];

let num2 = chars2.filter((ele) => typeof ele === "number");

let string2 = chars2.filter((ele) => isNaN(ele));

/////////////////////////////////////////////////////////////////

console.log(num2.concat(string2).copyWithin(0, num2.length, num2.length * 2));

let chars3 = ["Z", "Y", "A", "D", "E", 10, 1];

let num3 = chars3.filter((ele) => typeof ele === "number");

let string3 = chars3.filter((ele) => isNaN(ele));

console.log(num3.concat(string3).copyWithin(0, num3.length, num3.length * 2));

console.log("-".repeat(50));
/////////////////////////////////////////////////////////////////

let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];

console.log(numsOne.concat(numsTwo));
console.log([...numsOne, ...numsTwo]);
console.log(Array.from(new Set([...numsOne, ...numsTwo])));

numsOne.push(...numsTwo);
console.log(numsOne);
console.log(Array.from(new Set(numsOne)));

// Needed Output
// [1, 2, 3, 4, 5, 6];

console.log("-".repeat(50));
/////////////////////////////////////////////////////////////////

let n1 = [10, 30, 10, 20];
let n2 = [30, 20, 10];

console.log(Math.max(...n1) * [...n1, ...n2].length);

// Needed Output
// 210;
