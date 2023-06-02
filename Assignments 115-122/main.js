let myNumbers = [1, 2, 3, 4, 5];

// Write Your Destructuring Assignment Here
let [aa, , , , ee] = myNumbers;

console.log(aa * ee); // 5

////////////////////////////////////////////////////////
console.log(`------------------------------------------------`);

let mySkills = [
  "HTML",
  "CSS",
  "JavaScript",
  ["PHP", "Python", ["Django", "Laravel"]],
];

// Write Your Destructuring Assignment Here
let [a, b, c, [d, e, [f, g]]] = mySkills;

console.log(`My Skills: ${a}, ${b}, ${c}, ${d}, ${e}, ${f}, ${g}`);

// My Skills: HTML, CSS, JavaScript, PHP, Python, Django, Laravel

////////////////////////////////////////////////////////
console.log(`------------------------------------------------`);

let arr1 = ["Ahmed", "Sameh", "Sayed"];
let arr2 = ["Mohamed", "Gamal", "Amir"];
let arr3 = ["Haytham", "Shady", "Mahmoud"];

// Play With Arrays To Prepare For Destructuring
let allArrays = arr3.concat(arr2, arr1);

// Write Your Destructuring Assignment Here
let [, aaa, bbb, , , , ccc, ,] = allArrays;

console.log(`My Best Friends: ${aaa}, ${bbb}, ${ccc}`);

// My Best Friends: Shady, Mahmoud, Ahmed

////////////////////////////////////////////////////////
console.log(`------------------------------------------------`);

const member = {
  age: 30,
  working: false,
  country: "Egypt",
  hobbies: ["Reading", "Swimming", "Programming"],
};

// Write Your Destructuring Assignment Here
let {
  age: a1,
  working: w,
  country: c1,
  hobbies: [h1, , h3],
} = member;

console.log(`My Age Is ${a1} And Iam ${w ? "" : "Not"} Working`);
// My Age Is 30 And Iam Not Working

console.log(`I Live in ${c1}`);
// I Live in Egypt

console.log(`My Hobbies: ${h1} And ${h3}`);
// My Hobbies: Reading And Programming

////////////////////////////////////////////////////////
console.log(`------------------------------------------------`);

const game = {
  title: "YS",
  developer: "Falcom",
  releases: {
    "Oath In Felghana": ["USA", "Japan"],
    "Ark Of Napishtim": {
      US: "20 USD",
      JAP: "10 USD",
    },
    Origin: "30 USD",
  },
};

// Write Your Destructuring Assignment/s Here
let { title: t, developer: dd } = game;

let {
  "Oath In Felghana": [u, j],
  "Ark Of Napishtim": { US: u_price, JAP: j_price },
  Origin: or,
} = game.releases;

let [o, a2] = Object.keys(game.releases);

console.log(`My Favourite Games Style Is ${t} Style`);
// My Favourite Games Style Is YS Style

console.log(`And I Love ${dd} Games`);
// And I Love Falcom Games

console.log(`My Best Release Is ${o} It Released in ${u} & ${j}`);
// My Best Release Is Oath In Felghana It Released in USA & Japan

console.log(`Although I Love ${a2}`);
// Although I Love Ark Of Napishtim

console.log(`${a2} Price in USA Is ${u_price}`);
// Ark Of Napishtim Price in USA Is 20 USD

console.log(`${a2} Price in Japan Is ${j_price}`);
// Ark Of Napishtim Price in Japan Is 10 USD

console.log(`Origin Price Is ${or}`);
// Origin Price Is 30 USD

////////////////////////////////////////////////////////
console.log(`------------------------------------------------`);

console.log(
  `Assignment 06 has already been solved in a separate challenge file on codepen.io`
);
