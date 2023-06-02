window.onload = function () {
  document.querySelector("h1").style.color = "Blue";
};
/*
  window.onload = function () it means that when the page is fully loaded and all elements are created then search for h1
  and change its color that is if you want to keep the script on top of your page
*/

// the window is the object, the onload is an event

// for best practice better put the script tag in the end of the page

/*
  console page is used for testing your code and functions you create and see if there is any warning or error or info
  also try to love console as you will see the logic of your code and understand how it works'

  document.write("<h1>HELLO WORLD</h1>")   -> for creating or writing an Element
  document.querySelector("h1").style.color = 'blue'   -> to select the element and change its properties
  document.querySelector("h1").style.fontSize = '80px' 
*/

/*
  output to screen 
  - window.alert("") -> it makes an alert on top of the page of a message or anything but better don't use it
  as it stops the content after it and will be harmful for the website
  - document.write("") -> write an element directly to the page
  - document.createElement("") -> more professional to use it to add element to the page, create an element then add it to the
  specific place you want in the page
  - console.log("") -> to output a message in the console tab
*/

// window.alert("message from JS file");

// document.write("<h1>Hello <span>Page</span></h1>");

// console.log("Hello From JS File");

/*
    Console Methods
    - log -> outputs a message
    - error -> give an error in a specific line of the code
    - table -> the data in is presented inside a table

    Web API (javascript can access the web API and use its properties
            like using the console and many more to get the information or work you want from it,
            so web API is not from javascript but you can access it using JS language)
            https://developer.mozilla.org/en-US/docs/Web/API

    Styling Console
    - Directive %c -> add this symbol before the word you want to style, you can add more than 2 symbols,
    first symbol for first style and second symbol for second style and so on
*/

console.log("log");
console.error("Error");
console.table(["Osama", "Ahmed", "Sayed"]);

console.log(
  "Hello From %cJS %cFile",
  "color: red; font-size:40px",
  "color:blue; font-size:40px"
);

/*
    ES6 -> ECMAScript : it is the standard that you should write by, it wil cause that all programming languages
    to have the same syntax or same look in typing them

    ex: all employees work from 8am to 4pm

    https://elzero.org/javascript-2021-what-is-ecmascript/
    http://es6-features.org/#Constants
*/

var myName = "Osama";

console.log("Hello " + myName); //for javascript language
console.log(`Hello ${myName}`); //following ES6 rules, it will be similar to python language in printing print(f"Hello {my_name}")


/*
  Identifiers
  - Name Conventions And Rules
  - Reserved Words  (ex:  if, var, function)
*/

var userName = "Sayed";

console.log(userName);

/*
  -The way of naming is called camelCase
  first is small and the next word the first letter of it is capital

  -there is many other codecases like  slash case, snake case, Dash case, Pascal case
*/

/*
  -you can't start the variable name with number, but only in the middle or at end
  -variable can't have spaces in between
  -you can name the variable with underscore at any place ex: _us1_er1_
  -you can name the variable with dollar sign at any place ex: $_us1_$er1_$
  -you can't name the variable with any special character either in the beginning or middle or at end
  like these characters -> # @ 
  -the identifier is case sensitive -> it means that any capital letter will make difference from small later
  like this =  "user"  is not equal to "User" is not equal to "useR"
*/

/*
  Var
  - Redeclare (Yes)
  - Access Before Declare (Undefined = no valuable information given to you to solve the problem)
  - Variable Scope Drama [Added To Window] ()
  - Block Or Scope Function

  Let
  - Redeclare (No => Error)
  - Access Before Declare (Error = helps you to know the problem and solve it)
  - Variable Scope Drama ()
  - Block Or Scope Function

  Const
  - Redeclare (No => Error)
  - Access Before Declare (Error = helps you to know the problem and solve it)
  - Variable Scope Drama ()
  - Block Or Scope Function
*/

// any variable created by var will be inside the window object
// But any variable created by let will not be inside the window object

/*
  -A global scope is variable that has been declared in the root of the file 
  and you can use it any in place inside the document (much heavier)

  -Local Scope occurs when you create a variable inside a function.
  By doing that, the visibility and accessibility of the variable
  is only allowed within that function. (Lighter)
*/

/*
  var is a function scope which can be accessed outiside its block inside the function

  let and const are a block scope which can only be accessed in the block scope and not in the function scope
*/

/*
  String Syntax + Character Escape Sequences
  \ Escape + Line Continue   => escape is like ignore the next character
  it is from my side not yours
  \n  => add it between words to write them in different lines or under each other
*/

console.log('Elzero Web "School"');
console.log("Elzero Web 'School'");
console.log('Elzero Web "School"');
console.log("Elzero Web 'School'");
console.log("Elzero \\ Web 'School'");
console.log(
  "Elzero \
Web \
School"
);
console.log("Elzero\nWeb\nSchool");

/*
  you can't write double quotes in double quotes
  you can't write single quotes in single quotes

  ex: console.log('Elzero Web 'School'');
  ex: console.log("Elzero Web "School"");
  instead you can 
  ex: console.log("Elzero Web \"School\"");

  if you really want to type backslash then write another backslash before it
  ex: console.log("Elzero \\ Web 'School'");
*/

/*
  Concatenation
*/

let a = "We Love";
let b = "JavaScript";

document.write(a + " " + b); //=> another way to add a space between two variables

console.log(a, b); //=> when you add comma between the two variables
//it will put space between them automatically
console.log(a, b); /* => when you add comma between the two variables
it will put space between them automatically */

/*
  Template Literals (Template Strings)
*/

// First Example

// let a = "We Love";
// let b = "JavaScript";
// let c = "And";
// let d = "Programming";

// console.log(`${a} ${b} ${c} ${d}`);

/*
	this way will make you add spaces or any character way easier
  each space between the variables will; actually count
*/

// console.log(a + " \"\" " + b +
// "\n" + c + " " + d);

// console.log(`${a} "" '' \\ ${b}
// ${c} ${d}`);

//  ${}   => this is for writing the variable in it

// the new ECMA 6 way is much way easier the second one i mean
/*
 console.log(`${a} "" '' \\ ${b}  
 ${c} ${d}`); 
*/

// Second Example

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


// you can use i += 2 and any other thing not only i++
// break can ve written between to colons or directly after if without colons