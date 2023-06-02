let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

let result = mix
  .map(function (ele) {
    return isNaN(parseInt(ele)) ? ele : "";
  })
  .reduce(function (acc, current) {
    return acc + current;
  });

console.log(result); // Elzero

console.log(`
--------------------------------------------

`);

let myString = "EElllzzzzzzzeroo";

let singles = myString
  .split("")
  .filter(function (ele, index) {
    return myString.indexOf(ele) === index;
  })
  .reduce(function (acc, current) {
    return acc + current;
  });

console.log(singles); // Elzero

console.log(`
--------------------------------------------

`);

let myArray = ["E", "l", "z", ["e", "r"], "o"];

let arrayFlat = myArray
  .reduce(function (acc, current) {
    return acc + current;
  })
  .split("")
  .filter(function (ele) {
    return ele !== ",";
  })
  .reduce(function (acc, current) {
    return acc + current;
  });

console.log(arrayFlat); // Elzero

// let myArraySolution = myArray
//   .reduce((ac, el) => `${ac},${el}`) // when you write (,) between them it will not add another one after the comma in array
//   .split(",")
//   .reduce((acc, el) => `${acc}${el}`);

// console.log(myArraySolution); // Elzero

// let myArray = ["E", "l", "z", ["e", "r"], "o"];

// let solution3 = myArray.reduce(function (acc, current) {
//   return acc.concat(current);
// }, []);
// console.log(solution3); // Elzero

console.log(`
--------------------------------------------

`);

let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

let invert = numsAndStrings
  .filter(function (ele) {
    return !isNaN(parseInt(ele));
  })
  .map(function (ele) {
    return -ele;
  });

console.log(invert);
// [-1, -10, 10, 20, -5, -3]

console.log(`
--------------------------------------------

`);

let nums = [2, 12, 11, 5, 10, 1, 99];

let complex = nums.reduce(function (acc, current) {
  return current % 2 === 1 ? acc + current : acc * current;
}, 1);

console.log(complex);

// 500
