let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
console.log(myFriends.slice(myFriends.indexOf("Ahmed"), num)); // ["Ahmed", "Elham", "Osama"];

// Method 2
myFriends.splice(num, myFriends.indexOf("Elham"));

console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

//
//
//
//

let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// Write Your Code Here

friends.splice(friends.indexOf("Ahmed"), friends.indexOf("Eman"));

friends.splice(friends.indexOf("Gamal"), friends.indexOf("Osama"));

console.log(friends); // ["Eman", "Osama"]

//
//
//
//

let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

// Write One Single Line Of Code

console.log(finalArr.concat(arrOne, arrTwo).sort().reverse()); // ["Z", "X", "D", "C", "B", "A"]

//
//
//
//

let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(
  words[website.length][website.indexOf("G")]
    .slice(website.length)
    .toUpperCase()
); // ZERO

//
//
//
//

let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions

if (haystack.includes(needle) === true) {
  console.log("Found");
}

if (haystack.indexOf(needle) >= true) {
  console.log("Found");
}

if (haystack.lastIndexOf(needle) >= true) {
  console.log("Found");
}

//
//
//
//

let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

// Your Code Here

console.log(
  allArrs.concat(arr1, arr2).sort().slice(arr2.length).join("").toLowerCase()
); // fxy
