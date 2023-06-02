// document.createElement("h4");
// console.log("Hello From JS File");

// console.error("error");

// console.table(["Osama", "Ahmed", "Ali"]);

// console.log(
//   "Hello From %cJS %cFile",
//   "color: red; font-size: 40px;",
//   "color: yellow; font-size: 30px; font-weight: bold;"
// );

// console.log(typeof "Osama Mohamed");
// console.log(typeof "Osama Mohamed");

// var user = "Sayed",
//   age = 18;

// // when you give id to an element in HTML page it becomes a global variable which you can use in js
// // and also you can change the content in that element by the id

// console.log(hello);

// hello.innerHTML = "option";

// - Variable Without Var  -> better type var before the variable but you can
//  create a variable without it like user = "Sayed";

/* 
In JS file you should declare the variable first then use it 
like this 
1) var user = "Sayed";s

2) console.log(user);

not like this 
2) console.log(user);

1) var user = "Sayed";

cuz it will give you undefined if you changed the order
*/

/*
	JavaScript is a loosely Typed Language because you dont have to identify the
  type of data of the variable you created like you dont have to say that osama 
	is a string or 18 is a number or true is a boolean and so on unlike other
  programming languages
*/
// var a = 1;
// var a = 3;

// console.log(a);

// console.log(
//   "Elzero \
// Web \
// School"
// );
// console.log("Elzero\nWeb\nSchool");

// console.log('Elzero Web "School"');

// let a = "we love";
// let b = "Javascript";

// console.log(a + "\n" + b);

// let a = "We Love";
// let b = "JavaScript";
// let c = "And";
// let d = "Programming";

// console.log(a + ' "" ' + b + "\n" + c + " " + d);

// console.log(a + ' "" ' + b + "\n" + c + " " + d);

// console.log(`${a} "" '' \\ ${b}
// ${c} ${d}`);

// console.log(`${a} ${b} ${c} ${d}`);

// let title = "Elzero";
// let desc = "Elzero Web School";

// let markup = `
//   <div class="card">
//     <div class="child">
//       <h2>${title}</h2>
//       <p>${desc}</p>
//     </div>
//   </div>
// `;

// document.write(markup);

let titleFirst = "Elzero",
  descSecond = "Elzero Web School",
  dateThird = "25/10";

let markup = `
  <div class="card">
    <div class="child">
      <h3>Hello ${titleFirst}</h3>
      <p>${descSecond}</p>
      <span>${dateThird}</span>
    </div>
  </div>
`;

let result = markup.repeat(4);

document.write(result);
