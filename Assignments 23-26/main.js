// Examples
console.log(100_000); // 100000
console.log(100000); // 100000
console.log(5e4 + 5e4); // 100000

// Your Solutions
console.log(1e5); // 100000
console.log(10 ** 5); // 100000
console.log(+(100000).toString()); // 100000
console.log(+(100000).toFixed()); // 100000
console.log(+(100000.12345).toFixed()); // 100000
console.log(parseInt(100000.12345)); // 100000
console.log(Math.round(99999.5)); // 100000
console.log(Math.ceil(99999.1)); // 100000
console.log(Math.floor(100000.9)); // 100000
console.log(Math.pow(10, 5)); // 100000
console.log(Math.trunc(100000.123456789)); // 100000
console.log(parseInt(100000.1234)); // 100000
console.log(Math.round(parseFloat(100000.1234))); // 100000
console.log(Math.max(1, 2, 3, 4, 100000)); // 100000

console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991

console.log(
  Math.pow(
    Math.ceil(++Number.MAX_SAFE_INTEGER / Number.MAX_SAFE_INTEGER),
    Math.ceil(++Number.MAX_SAFE_INTEGER / Number.MAX_SAFE_INTEGER) **
      Math.ceil(++Number.MAX_SAFE_INTEGER / Number.MAX_SAFE_INTEGER)
  )
); // 16

console.log(`${Number.MAX_SAFE_INTEGER}`.length); // 16

let myVar = "100.56789 Views";

console.log(parseInt(myVar)); // 100
console.log(+parseFloat(myVar).toFixed(2)); // 100.57

let num = 10;

console.log(Number.isInteger(num) + Number.isInteger(num)); // 2

let flt = 10.4;

console.log(Math.round(flt)); // 10
console.log(Math.floor(flt)); // 10
console.log(+flt.toFixed()); // 10
console.log(parseInt(flt)); // 10
console.log(Math.trunc(flt)); // 10

console.log(Math.floor(Math.random() * 5)); // 0 || 1 || 2 || 3 || 4
