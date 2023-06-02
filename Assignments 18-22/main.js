// Replace ? With Arithmetic Operators
console.log(((10 * 20 * 15) % 3) * 190 * 10 * 400); // 0

//----------------------------------------------------
// His way

/*let num = 3;

// Solution One
console.log(num + num); // 6

// Solution Two
console.log(num * --num); // 6

// Soultion Three
console.log(num++ * num); // 6

// Soultion Four
console.log(num ** num / num - num); // 6

// Solution Five
console.log((++num * --num) / --num); // 6

// Solution Six
console.log(num ** (num ** num) / num - num); // 6
*/

/*----------------------------------------------------
my way

let num = 3;

// Solution One
console.log(num + num); // 6

// Solution Two
console.log(((num * num) / num) * --num); // 6

// Soultion Three
console.log(num ** num + num); // 6

// Soultion Four
console.log(++num * +true * num - num); // 6

// Solution Five
console.log(num + true * num); // 6

// Solution Six
console.log((num / num) * num * num - num); // 6

----------------------------------------------------------*/
let num = "10";

// Solution One
console.log(+num + +num); // 20

// Solution Two
console.log(+num + --num + --num - --num); // 20
// console.log(10 + 9 + 8 - 7);
// Solution Three
console.log(--num * --num - +num - +num); // 20
// console.log(6 * 5 - 5 - 5);
// Solution Four
console.log(+num * +num - +num); // 20
// console.log(5 * 5 - 5);

let points = 10;

// Write Your Code Here
points += 3;
console.log(points); // 13

// Write Your Code Here
points -= 5;
console.log(points); // 8;
