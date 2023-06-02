// // /*
// //   Function
// //   DRY = don't repeat yourself
// //   - What Is Function ?
// //   - User-Defined vs Built In
// //   - Syntax + Basic Usage
// //   - Example From Real Life
// //   - Parameter + Argument
// //   - Practical Example
// // */

// // // Built in function like (.log)

// // /*
// // Basic Usage :

// // function sayHello() {
// //   console.log(`Hello Osama`);
// // }
// // sayHello();

// // */

// // /*

// // function sayHello(Parameter) {
// //   console.log(`Hello ${Parameter}`);
// // }

// // sayHello(Argument);

// // - Parameter = the variable that you will add to the function to do you task on it
// // - like the water bottle you will add to the fridge to be cooled

// // - Argument = the value of the variable

// // more simpler way to understand :
// // Parameter = variable
// // Argument  = value of variable

// // */

// // function sayHello(userName) {
// //   console.log(`Hi ${userName}`);
// // }

// // sayHello("Osama");
// // sayHello("Sayed");
// // sayHello("Ali");

// //
// //
// //
// //
// //

// // /*
// //   Function Advanced Examples
// // */

// // function sayHello(userName, age) {
// //   if (age < 20) {
// //     console.log(`App is Not Suitable For You`);
// //   } else {
// //     console.log(`Hello ${userName} Your Age is ${age}`);
// //   }
// // }

// // sayHello("Osama", 38);
// // sayHello("Sayed", 40);
// // sayHello("Ali", 18);

// // function generateYears(start, end, exclude) {
// //   for (let i = start; i <= end; i++) {
// //     if (i === exclude) {
// //       continue;
// //     }
// //     console.log(i);
// //   }
// // }

// // generateYears(1982, 2021, 2020);

// //
// //
// //
// //
// //

// // /*
// //   Function
// //   - Return  = you can return the result of variable to be stored in a variable or console logged
// //   - ( ASI ) Automatic Semicolon Insertion [No Line Terminator Allowed]
// //   - Interrupting  = if you want to interrupt the main function by using return `Interrupting`
// // */

// // // after the return no code can be executed nor be reached, it breaks after the return
// // // the return and the function of the return must be on same line

// // function generate(start, end) {
// //   for (let i = start; i <= end; i++) {
// //     if (i === 15) {
// //       return `Interrupting`; // when number 15 is reached the return will stop the main function
// //     }
// //     console.log(i);
// //   }
// // }

// // generate(10, 20);

// //
// //
// //
// //
// //

// // /*
// //   Function
// //   - Default Function Parameters
// //   - Function Parameters Default [Undefined]
// //   - Old Strategies [Condition + Logical Or]
// //   - ES6 Method  (beside the parameter add = "")
// // */

// // function sayHello(username = "Unknown", age = "Unknown") {
// //   // if (age === undefined) {
// //   //   age = "Unknown";
// //   // }
// //   // age = age || "Unknown";   // truthy falsy pattern
// //   return `Hello ${username} Your Age Is ${age}`;
// // }

// // console.log(sayHello());

// //
// //
// //
// //
// //

// // /*
// //   Function
// //   - Rest Parameters   = by adding 3 dots ( ... )
// //   - used when you don't know the number of arguments that wil be given

// //   - Only One Allowed
// //   - Must Be Last Element
// // */

// // // The Rest Parameter will Add the arguments into an Array

// // function calc(...numbers) {
// //   // console.log(Array.isArray(numbers));
// //   let result = 0;
// //   for (let i = 0; i < numbers.length; i++) {
// //     result += numbers[i]; // result = result + numbers[i]
// //   }
// //   return `Final Result Is ${result}`;
// // }

// // console.log(calc(10, 20, 10, 30, 50, 30));

// //
// //
// //
// //
// //

// // /*
// //   Function Advanced Practice
// //   - Parameters
// //   - Default
// //   - Rest
// //   - Loop
// //   - Condition
// // */

// // function showInfo(us = "Un", ag = "Un", rt = 0, show = "Yes", ...sk) {
// //   document.write(`<div>`);
// //   document.write(`<h2>Welcome, ${us}</h2>`);
// //   document.write(`<p>Age: ${ag}</p>`);
// //   document.write(`<p>Hour Rate: $${rt}</p>`);
// //   if (show === "Yes") {
// //     if (sk.length > 0) {
// //       for (let i = 0; i < sk.length; i++) {
// //         document.write(`<p>- ${sk[i]}</p>`);
// //       }
// //     } else {
// //       document.write(`<p>Skills: No Skills</p>`);
// //     }
// //   } else {
// //     document.write(`<p>Skills Is Hidden</p>`);
// //   }
// //   document.write(`</div>`);
// // }

// // // document.write(`<p>Skills: ${sk.join(" | ")}</p>`);  ( instead of line 185 -187)

// // showInfo("Osama", 38, 20, "Yes", "Html", "CSS", "JavaScript");

// //
// //
// //
// //
// //

// /*
//   Function - Random Argument Challenge
//   ====================================
//   Create Function showDetails
//   Function Accept 3 Parameters [a, b, c]
//   Data Types For Info Is
//   - String => Name
//   - Number => Age
//   - Boolean => Status
//   Argument Is Random
//   Data Is Not Sorted Output Depend On Data Types
//   - Use Ternary Conditional Operator
// */
// // let userName = "";
// // let age = "";
// // let boolean = "";

// // function showDetails(a = "Unknown", b = "Unknown", c = "Unknown") {
// //   typeof a === "string"
// //     ? (userName = a)
// //     : typeof a === "number"
// //     ? (age = a)
// //     : (boolean = a);
// //   typeof b === "string"
// //     ? (userName = b)
// //     : typeof b === "number"
// //     ? (age = b)
// //     : (boolean = b);
// //   typeof c === "string"
// //     ? (userName = c)
// //     : typeof c === "number"
// //     ? (age = c)
// //     : (boolean = c);

// //   boolean === true
// //     ? console.log(
// //         `Hello ${userName}, Your Age Is ${age}, You Are Available For Hire`
// //       )
// //     : console.log(
// //         `Hello ${userName}, Your Age Is ${age}, You Are Not Available For Hire`
// //       );
// // }

// // showDetails("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// // showDetails(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// // showDetails(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// // showDetails(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"

// // function showarguments(a, b, c) {
// //   for (let i = 0; i < arguments.length; i++) {
// //     typeof arguments[i] === "string"
// //       ? (userName = arguments[i])
// //       : typeof arguments[i] === "number"
// //       ? (age = arguments[i])
// //       : typeof arguments[i] === "boolean" && arguments[i] === true
// //       ? (userStatus = "Available")
// //       : (userStatus = "Not Available");
// //   }
// //   console.log(
// //     `Hello ${userName}, Your Age Is ${age}, You Are ${userStatus} For Hire`
// //   );
// // }

// // showarguments("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// // showarguments(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// // showarguments(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// // showarguments(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"

// //
// //
// //
// //
// //

// // /*
// //   Function
// //   - Anonymous Function
// //   - Calling Named Function vs Anonymous Function
// //   - Argument To Other Function
// //   - Task Without Name
// //   - SetTimeout
// // */

// // // function can be used first even before creating the function unlike the variables which should be declared first to be used

// // // function can be stored in a variable and you can then call the function by variable name
// // // in that case it is called a Anonymous Function cuz it has no name and you should store it in the variable first before using it

// // // if you again named the function inside the variable it will help you to trace the errors of you have alot from them

// // let calculator = function (num1, num2) {
// //   return num1 + num2;
// // };

// // console.log(calculator(10, 20));

// // function sayHello() {
// //   console.log("Hello Osama");
// // }

// // document.getElementById("show").onclick = sayHello; // when button with id show is clicked it will use the function named sayHello

// // document.getElementById("show1").onclick = function () {
// //   console.log("Show");
// // }; // when button with id show1 is clicked it print Show in console

// // setTimeout(function () {
// //   console.log("Good");
// // }, 2000); // print Good after 2 seconds

// // // No need to name the function when you will only gonna use it at a particular place

// //
// //
// //
// //
// //

// // /*
// //   Function
// //   - Function Inside Function ( Nested Function )
// //   - Return Function
// // */

// // // Example 1

// // function sayMessage(fName, lName) {
// //   let message = `Hello`;
// //   // Nested Function
// //   function concatMsg() {
// //     message = `${message} ${fName} ${lName}`;
// //   }
// //   concatMsg(); // use the nested function to express itself
// //   return message;
// // }

// // console.log(sayMessage("Osama", "Mohamed"));

// // // Example 2

// // function sayMessage(fName, lName) {
// //   let message = `Hello`;
// //   // Nested Function
// //   function concatMsg() {
// //     return `${message} ${fName} ${lName}`;
// //   }
// //   return concatMsg(); // nested function and return it as a value to main function
// // }

// // console.log(sayMessage("Osama", "Mohamed"));

// // // Example 3

// // function sayMessage(fName, lName) {
// //   let message = `Hello`;
// //   // Nested Function
// //   function concatMsg() {
// //     function getFullName() {
// //       return `${fName} ${lName}`;
// //     }
// //     return `${message} ${getFullName()}`;
// //   }
// //   return concatMsg();
// // }

// // /*
// // Here the getFullName function will join the names only then return it to concatMsg function to add Hello to the joined names,
// // then this contactMsg function will return it's value to the main sayMessage function
// // */

// // console.log(sayMessage("Osama", "Mohamed"));

// //
// //
// //
// //
// //

// // /*
// //   Function
// //   - Arrow Function
// //   -- Regular vs Arrow [Param + No Param]
// //   -- Multiple Lines
// // */

// // let print = function () {
// //   return 10;
// // };

// // let print = () => 10; // if the command is in 1 line you can remove the curly braces and the return

// // //let print = _ => 10;  //  you can use underscore instead of brackets

// // // ================================================

// // let print = function (num) {
// //   return num;
// // };

// // let print = (num) => num;

// // // let print = num => num;   if you have only one parameter you can remove the brackets

// // // ================================================

// // let print = function (num1, num2) {
// //   return num1 + num2;
// // };

// // let print = (num1, num2) => num1 + num2; // here you can't remove the brackets around the parameters cuz they are 2

// // console.log(print(100, 50));

// //
// //
// //
// //
// //

// // /*
// //   Scope
// //   - Global And Local Scope

// //   -if you want to access a variable in the function or loop for example
// //   it will first search if the variables are in it's local scope and take their values
// //   if it didn't find any variable by that name inside the local scope it will go outside to the global scope and search there

// //   - Also when you are declaring a variable in the local scope you should consider its position or order
// //   like you should declare variable first then use it
// // */

// // var a = 1;
// // let b = 2;

// // function showText() {
// //   var a = 10;
// //   let b = 20;
// //   console.log(`Function - From Local ${a}`);
// //   console.log(`Function - From Local ${b}`);
// // }

// // console.log(`From Global ${a}`);
// // console.log(`From Global ${b}`);

// // showText();

// // /*
// //   Scope
// //   - Block Scope [If, Switch, For]
// // */

// // var x = 10;

// // if (10 === 10) {
// //   let x = 50;
// //   console.log(`From If Block ${x}`);
// // }

// // console.log(`From Global ${x}`);

// // // Here the let x variable is in a block scope which means it doesn't interfere with the global scope
// // // cuz you used let and not var

// // /*
// // var x = 10;

// // if (10 === 10) {
// //   var x = 50;
// // } Here the var x will be updated and over right on the global var x

// // console.log(x); so console log will will give you 50

// // */

// //
// //
// //
// //

// // /*
// //   Scope
// //   - Lexical Scope

// //   Search
// //   - Execution Context
// //   - Lexical Environment
// // */

// // function parent() {
// //   let a = 10;

// //   function child() {
// //     console.log(a);
// //     console.log(`From Child ${b}`);

// //     function grand() {
// //       let b = 100;
// //       console.log(`From Grand ${a}`);
// //       console.log(`From Grand ${b}`);
// //     }
// //     grand();
// //   }
// //   child();
// // }
// // parent();

// //
// //
// //
// //
// //

// // /* Output
// // Function - From Local 10
// // Function - From Local 20
// // */ var a = 1;
// // let b = 2;
// // // a & b are in global Scope => You Can access them form any place

// // function showText() {
// //   var a = 10;
// //   let b = 20;
// //   // a & b are in Local Scope => You Can access them form function only
// //   console.log(`Function - From Local ${a}`);
// //   console.log(`Function - From Local ${b}`);
// // }

// // console.log(`From Global ${a}`); // From Global 1
// // console.log(`From Global ${b}`); // From Global 2

// // showText();
// // /* Output
// // Function - From Local 10
// // Function - From Local 20
// // */

// //
// //
// //
// //
// //

// // /*
// //   Function Arrow Challenges
// // */

// // // [1] One Statement In Function
// // // [2] Convert To Arrow Function
// // // [3] Print The Output [Arguments May Change]

// // let names = (...users) => `String [${users.join("], [")}] => Done !`;

// // // let names = function (...users) {
// // //   return `String [${users.join("], [")}] => Done !`;
// // // };

// // console.log(names("Osama", "Mohamed", "Ali", "Ibrahim"));

// // // String [Osama], [Mohamed], [Ali], [Ibrahim] => Done !

// // /* ================================= */
// // /* ================================= */
// // /* ================================= */

// // // [1] Replace ??? In Return Statement To Get The Output
// // // [2] Create The Same Function With Regular Syntax
// // // [3] Use Array Inside The Arguments To Get The Output

// // let myNumbers = [20, 50, 10, 60];

// // let calc = function (one, two, ...nums) {
// //   return one + two + +nums;
// // };

// // // let calc = (one, two, ...nums) => one + two + +nums;

// // console.log(calc(10, myNumbers[0], myNumbers[1])); // 80

// //
// //
// //
// //
// //

// // /* ================================= */
// // /* ================================= */
// // /* ================================= */

// // /*
// //   Higher Order Functions
// //   ---> is a function that accepts functions as parameters and/or returns a function.

// //   - Map
// //   --- method creates a new array , not good if you already have an array and don't want a new one
// //   --- populated with the results of calling a provided function on every element
// //   --- in the calling array.

// //   Syntax map(callBackFunction(Element, Index, Array) { }, thisArg)
// //   - Element => The current element being processed in the array., each element in the array (Mandatory)
// //   - Index => The index of the current element being processed in the array. (optional)
// //   - Array => The Current Array (optional)

// //   Notes
// //   - Map Return A New Array

// //   Examples
// //   - Anonymous Function
// //   - Named Function

// // */

// // let myNums = [1, 2, 3, 4, 5, 6];

// // let newArray = [];

// // for (let i = 0; i < myNums.length; i++) {
// //   newArray.push(myNums[i] + myNums[i]);
// // }

// // console.log(newArray);

// // // Same Idea With Map

// // // let addSelf = myNums.map(function (element, index, arr) {
// // //    console.log(`Current Element => ${element}`);
// // //    console.log(`Current Index => ${index}`);
// // //    console.log(`Array => ${arr}`);
// // //    console.log(`This => ${this}`);
// // //   return element + element;
// // // }, 10);  // anonyms function is used

// // // let addSelf = myNums.map((a) => a + a);

// // // let addSelf = myNums.map((element) => element + element);

// // // console.log(addSelf);

// // function addition(ele) {
// //   return ele + ele;
// // }

// // let add = myNums.map(addition);

// // console.log(add);

// //
// //
// //
// //
// //
// //

// /*
//   Map
//   - Swap Cases
//   - Inverted Numbers
//   - Ignore Boolean Value
// */

// // let swappingCases = "elZERo";
// // let invertedNumbers = [1, -10, -20, 15, 100, -30];
// // let ignoreNumbers = "Elz123er4o";

// // // let sw = swappingCases
// // //   .split("")
// // //   .map(function (ele) {
// // //      Condition ? True : False
// // //     return ele === ele.toUpperCase() ? ele.toLowerCase() : ele.toUpperCase();
// // //   })
// // //   .join("");  ==> it means after finishing creating the new array and filling it , join them please

// // // Arrow Function Version

// // let sw = swappingCases
// //   .split("")
// //   .map((a) => (a === a.toUpperCase() ? a.toLowerCase() : a.toUpperCase()))
// //   .join("");

// // console.log(sw);

// // let inv = invertedNumbers.map(function (ele) {
// //   return -ele; // negative of negative is positive
// // });

// // console.log(inv);

// // let ign = ignoreNumbers
// //   .split("")
// //   .map(function (ele) {
// //     return isNaN(parseInt(ele)) ? ele : "";
// //   })
// //   .join("");

// // /*
// // let ign = ignoreNumbers
// //   .split("")
// //   .map(function (ele) {
// //     return isNaN(ele) ? ele : "";  // you cab remove parseInt and get same result cuz a letter is NaN
// //   })
// //   .join("");
// // */

// // console.log(ign);

// // console.log(ign)

// //
// //
// //
// //
// //
// //

// // /*
// //   - Filter
// //   --- method creates a new array
// //   --- with all elements that pass the test implemented by the provided function.

// //   Syntax filter(callBackFunction(Element, Index, Array) { }, thisArg)
// //   - Element => The current element being processed in the array.
// //   - Index => The index of the current element being processed in the array.
// //   - Array => The Current Array
// // */

// // // Get Friends With Name Starts With A
// // let friends = ["Ahmed", "Sameh", "Sayed", "Asmaa", "Amgad", "Israa"];

// // let filterdFriends = friends.filter(function (el) {
// //   return el.startsWith("A");
// // });

// // // let filterdFriends = friends.filter(function (el) {
// // //   return el.startsWith("A") ? true : false;
// // // }); same as the code above

// // console.log(filterdFriends);

// // // Get Even Numbers Only
// // let numbers = [11, 20, 2, 5, 17, 10];

// // let evenNumbers = numbers.filter(function (el) {
// //   return el % 2 === 0;  // this condition it true it will return the element if not then it will be removed from the new array
// // });

// // /*
// // modulus or % mean the reminder remain to to be divided on the given number and give a whole number
// // ex: 20 /2 = 10 so this is a whole number and the reminder is zero so it is an even number
// // ex: 11/2 = 5.5 not whole number but 10/2 = 5 so it gives a whole number so the reminder to reach 11 is 1 so it is odd
// // */

// // console.log(evenNumbers);

// // /*
// // Test Map vs Filter

// // let addMap = numbers.map(function (el) {
// //   return el + el;
// // });

// // console.log(addMap);

// // let addFilter = numbers.filter(function (el) {
// //   return el + el;
// // });

// // console.log(addFilter);  returns the same array cuz the return is true so it will give it back as it is
// // */

// //
// //
// //
// //
// //
// //
// //

// // /*
// //   Filter
// //   - Filter Longest Word By Number
// // */

// // // Filter Words More Than 4 Characters
// // let sentence = "I Love Foood Code Too Playing Much";

// // let smallWords = sentence
// //   .split(" ")
// //   .filter(function (ele) {
// //     return ele.length <= 4;
// //   })
// //   .join(" ");

// // console.log(smallWords);

// // // Ignore Numbers
// // let ignoreNumbers = "Elz123er4o";

// // let ign = ignoreNumbers
// //   .split("")
// //   .filter(function (ele) {
// //     return isNaN(parseInt(ele)); // if map used here it will return true and false and not the elements
// //   })
// //   .join("");

// // console.log(ign);

// // // Filter Strings + Multiply
// // let mix = "A13BS2ZX";

// // let mixedContent = mix
// //   .split("")
// //   .filter(function (el) {
// //     return !isNaN(el);
// //   })
// //   .map(function (el) {
// //     return el * el;
// //   })
// //   .join("");

// // console.log(mixedContent);

// //
// //
// //
// //
// //
// //

// // /*
// //   - Reduce
// //   --- method executes a reducer function on each element of the array,
// //   --- resulting in a single output value.

// //   Syntax
// //   reduce(callBackFunc(Accumulator, Current Val, Current Index, Source Array) { }, initialValue)
// //   - Accumulator => the accumulated value previously returned in the last invocation
// //   - Current Val => The current element being processed in the array
// //   - Index => The index of the current element being processed in the array.
// //   ---------- Starts from index 0 if an initialValue is provided.
// //   ---------- Otherwise, it starts from index 1.
// //   - Array => The Current Array

// //   -callBackFunction is like a a loop that will apply this function to each element in the array

// //   -Accumulator : if you didn't give initial value then the accumulator will be the first element in the array and Current Value will be the second element in array with index 1
// //   but, if you give an initial value ,this initial value will be the accumulator and Current Value will be the first element in array with index 0
// // */

// // let nums = [10, 20, 15, 30];

// // let add = nums.reduce(function (acc, current, index, arr) {
// //   console.log(`Acc => ${acc}`);
// //   console.log(`Current Element => ${current}`);
// //   console.log(`Current Element Index => ${index}`);
// //   console.log(`Array => ${arr}`);
// //   console.log(acc + current);
// //   console.log(`#############`);
// //   return acc + current;
// // }, 5);

// // console.log(add); // 80

// //
// //
// //
// //
// //
// //

// // /*
// //   Reduce
// //   - Longest Word
// //   - Remove Characters + Use Reduce
// // */

// // let theBiggest = [
// //   "Bla",
// //   "Propaganda",
// //   "Other",
// //   "AAA",
// //   "Battery",
// //   "Test",
// //   "Propaganda_Two",
// // ];

// // let check = theBiggest.reduce(function (acc, current) {
// //   console.log(`Acc => ${acc}`);
// //   console.log(`Current Element => ${current}`);
// //   console.log(acc.length > current.length ? acc : current);
// //   console.log(`#############`);
// //   return acc.length > current.length ? acc : current;
// // });

// // console.log(check);

// // let removeChars = ["E", "@", "@", "L", "Z", "@", "@", "E", "R", "@", "O"];

// // let finalString = removeChars
// //   .filter(function (ele) {
// //     return ele !== "@";
// //   })
// //   .reduce(function (acc, current) {
// //     return `${acc}${current}`;
// //   });

// // console.log(finalString);

// //
// //
// //
// //
// //
// //
// // /*
// //   - forEach
// //   --- method executes a provided function once for each array element.

// //   Syntax forEach(callBackFunction(Element, Index, Array) { }, thisArg)
// //   - Element => The current element being processed in the array.
// //   - Index => The index of the current element being processed in the array.
// //   - Array - The Current Array

// //   Note
// //   - Doesn't Return Anything [Undefined]
// //   - Break Will Not Break The Loop
// // */

// // let allLis = document.querySelectorAll("ul li");
// // let allDivs = document.querySelectorAll(".content div");

// // allLis.forEach(function (ele) {
// //   ele.onclick = function () {
// //     // Remove Active Class From All Elements
// //     allLis.forEach(function (ele) {
// //       ele.classList.remove("active");
// //     });
// //     // Add Active Class To This Element
// //     this.classList.add("active");
// //     // Hide All Divs
// //     allDivs.forEach(function (ele) {
// //       ele.style.display = "none";
// //     });
// //   };
// // });

// //
// //
// //
// //
// //
// //

// // /*
// //   Higher Order Functions Challenges

// //   You Can Use
// //   - ,
// //   - _
// //   - Space
// //   - True => 1 => One Time Only In The Code

// //   You Cannot Use
// //   - Numbers
// //   - Letters

// //   - You Must Use [Filter + Map + Reduce + Your Knowledge]
// //   - Order Is Not Important
// //   - All In One Chain

// // */

// // let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";

// // let solution = myString
// //   .split(",")
// //   .filter(function (ele) {
// //     return isNaN(parseInt(ele));
// //   })
// //   .map(function (ele) {
// //     return ele.length === +true ? ele : ele[+false];
// //   })
// //   .join("")
// //   .split("_")
// //   .map(function (ele) {
// //     return ele[ele.length - isNaN(myString)] ===
// //       ele[ele.length - isNaN(myString)].toUpperCase()
// //       ? ele.slice(false, ele.length - isNaN(myString))
// //       : ele;
// //   })
// //   .reduce(function (acc, current) {
// //     return `${acc} ${current}`;
// //   });

// // console.log(solution); // Elzero Web School

// // // let solution = myString
// // //   .split(",")
// // //   .filter(function (ele) {
// // //     return isNaN(parseInt(ele));
// // //   })
// // //   .reduce(function (acc, current) {
// // //     return acc + current;
// // //   })
// // //   .slice(true, -isNaN(myString))
// // //   .replaceAll("_", " ");

// //
// //
// //
// //
// //
// //

// // let myArray = ["E", "l", "z", ["e", "r"], "o"];

// // let solution3 = myArray.reduce(function (acc, current) {
// //   return acc.concat(current);
// // }, []);
// // console.log(solution3); // Elzero

// // console.log("-".repeat(40));

// //
// //
// //
// //
// //
// //
// //

// // /*
// //   Object
// //   - Intro and What Is Object
// //   - Testing Window Object
// //   - Accessing Object

// //   - object has properties and methods
// //   -- properties : are the information about it
// //   -- methods : actions that can do ( behavior ) ( functions  )
// // */

// // /*

// // window = object
// // window.location = nested object
// // window.location.href = property
// // window.location.assign = method
// // window.location.assign("https://google.com")

// // */

// // let user = {
// //   // Properties
// //   theName: "Osama",
// //   theAge: 38,
// //   // Methods
// //   sayHello: function () {
// //     return `Hello`;
// //   },
// // };

// // console.log(user.theName);
// // console.log(user.theAge);
// // console.log(user.sayHello());

// //
// //
// //
// //
// //
// //
// //
// // /*
// //   Object
// //   - Dig Deeper
// //   - Dot Notation vs Bracket Notation
// //   - Dynamic Property Name
// // */

// // // by dot notation you can't access the dynamic property name

// // let myVar = "country";

// // let user = {
// //   theName: "Osama",
// //   country: "Egypt",
// // };

// // let user1 = {
// //   theName: "Osama",
// //   "country of": "Egypt",
// // };
// // console.log(user1["country of"]); // Bracket Notation

// // console.log(user.theName);
// // console.log(user.country); // user.country  output = Egypt
// // console.log(user.myVar); // user.country  output = undefined , cuz you used dot notation
// // console.log(user[myVar]); // user.country  output = Egypt , you can access dynamic property name by bracket notation

// //
// //
// //
// //
// //
// //
// //

// /*
//   Object
//   - Nested Object And Trainings
// */

// // let available = true;

// // let user = {
// //   name: "Osama",
// //   age: 38,
// //   skills: ["HTML", "CSS", "JS"],
// //   available: false,
// //   addresses: {
// //     ksa: "Riyadh",
// //     egypt: {
// //       one: "Cairo",
// //       two: "Giza",
// //     },
// //   },
// //   checkAv: function () {
// //     if (user.available === true) {  // you should write user.available not available only cuz it will search for it in global scope
// //       return `Free For Work`;
// //     } else {
// //       return `Not Free`;
// //     }
// //   },
// // };

// // console.log(user.name);
// // console.log(user.age);
// // console.log(user.skills);
// // console.log(user.skills.join(" | "));
// // console.log(user.skills[2]); // Access With Index  output = JS
// // console.log(user.addresses.ksa);
// // console.log(user.addresses.egypt.one);
// // console.log(user["addresses"].egypt.one);
// // console.log(user["addresses"]["egypt"]);
// // console.log(user["addresses"]["egypt"]["one"]);

// // console.log(user.checkAv());

// //
// //
// //
// //
// //
// //
// //

// // /*
// //   Object
// //   - Create With New Keyword new Object();
// // */

// // // new keyword
// // // object() = constructor

// // let user = new Object({
// //   age: 20,
// // });

// // // let user = {
// // //   age: 20,
// // // };

// // console.log(user);  // age : 20

// // user.age = 38;
// // user["country"] = "Egypt";

// // user.sayHello = function () {
// //   return `Hello`;
// // };

// // console.log(user);
// // console.log(user.age);
// // console.log(user.country);
// // console.log(user.sayHello());

// //
// //
// //
// //
// //
// //
// //

// // /*
// //   Function this Keyword
// //   - this Introduction
// //   - this Inside Object Method
// //   --- When a function is called as a method of an object,
// //   --- its this is set to the object the method is called on.
// //   - Global Object
// //   - Test Variables With Window And This
// //   - Global Context
// //   - Function Context

// //   Search
// //   - Strict Mode
// // */

// // console.log(this);
// // console.log(this === window);

// // myVar = 100;

// // console.log(window.myVar);
// // console.log(this.myVar);

// // function sayHello() {
// //   console.log(this);
// //   return this;
// // }
// // sayHello();

// // console.log(sayHello() === window);

// // document.getElementById("cl").onclick = function () {
// //   console.log(this);
// // }; // this returns to the owner , <button id="cl">Click</button>

// // let user = {
// //   age: 38,
// //   ageInDays: function () {
// //     console.log(this);
// //     return this.age * 365; // this here = user
// //   },
// // };

// // console.log(user.age);
// // console.log(user.ageInDays());

// //
// //
// //
// //
// //
// //
// //

// // /*
// //   Object
// //   - Create Object With Create Method
// // */

// // let user = {
// //   age: 20,
// //   doubleAge: function () {
// //     return this.age * 2;  // when you use this here, it will take the age of the object that called the method or function
// //   },
// // };

// // console.log(user);
// // console.log(user.age); // 20
// // console.log(user.doubleAge()); // 40

// // let obj = Object.create({}); // will take prototype of a null object

// // obj.a = 100;

// // console.log(obj); // a : 100

// // let copyObj = Object.create(user); // the copyObj will take user object as a prototype % if you changed anything in user it will reflect on copyObj

// // copyObj.age = 50; // will not update the age in prototype but instead will create a new property (age) = 50

// // console.log(copyObj); // age: 50
// // console.log(copyObj.age); // 50
// // console.log(copyObj.doubleAge()); // 100

// //
// //
// //
// //
// //
// //
// //

// /*
//   Object
//   - Create Object With Assign Method | .assign(target, source)
// */

// // let obj1 = {
// //   prop1: 1,
// //   meth1: function () {
// //     return this.prop1;
// //   },
// // };

// // let obj2 = {
// //   prop2: 2,
// //   meth2: function () {
// //     return this.prop2;
// //   },
// // };

// // let targetObject = {
// //   prop1: 100,
// //   prop3: 3,
// // };

// // let finalObject = Object.assign(targetObject, obj1, obj2); // if 2 properties have the same name, it will take the first property value only

// // finalObject.prop1 = 200;
// // finalObject.prop4 = 4;

// // console.log(finalObject);

// // let newObject = Object.assign({}, obj1, { prop5: 5, prop6: 6 });
// // // will make a copy from empty object then add obj1
// // //and a new created object with properties prop 5 and prop6

// // console.log(newObject);

// // const obj = {
// //   z: "three",
// //   a: "one",
// //   b: "two",
// // };

// // const sorted = Object.keys(obj)
// //   .sort()
// //   .reduce((accumulator, key) => {
// //     console.log(accumulator);
// //     console.log(key);
// //     accumulator[key] = obj[key];  // {}[a] = obj[a]  => it means re assign a to value of a in obj which is one => a: one

// //     return accumulator;
// //   }, {});

// // console.log(sorted); // 👉️ {a: 'one', b: 'two', z: 'three'}

// // // var x = {};

// // // x["age"] = 18;

// // // console.log(x);

// //
// //
// //
// //
// //
// //
// //
// //
// //
// //

// // /*
// //   DOM
// //   - What Is DOM
// //   - DOM Selectors
// //   --- Find Element By ID
// //   --- Find Element By Tag Name
// //   --- Find Element By Class Name
// //   --- Find Element By CSS Selectors
// //   --- Find Element By Collection
// //   ------ title
// //   ------ body
// //   ------ images
// //   ------ forms
// //   ------ links
// // */

// // let myIdElement = document.getElementById("my-div"); // Find Element By ID, id is unique so you can only get one element
// // let myTagElements = document.getElementsByTagName("p"); // Find Element By Tag Name like p, div, span. it will get you all elements in array which you can access with indexing
// // let myClassElements = document.getElementsByClassName("my-span"); // Find Element By Class Name, will get you all elements with that class-name in array
// // let myQueryElement = document.querySelector(".my-span"); // Find Element By CSS Selectors, .querySelector() will get you elements by id or class or tag or anything but only the first one
// // let myQueryElement2 = document.querySelector("#my-div");
// // let myQueryAllElement = document.querySelectorAll(".my-span"); // same as .querySelector but will get you all elements by that query and not only the first one

// // console.log(myIdElement);
// // console.log(myTagElements[1]); // will get second p in the array
// // console.log(myClassElements[1]);// will get second element with class name "my-span" in the array
// // console.log(myQueryElement); // only one element
// // console.log(myQueryAllElement[1]); // all elements will be in an array

// // console.log(document.title); // gets you the title of the page
// // console.log(document.body); // gets you all the body to remove and add things to it, also to append child
// // console.log(document.images); // gets you all the images
// // console.log(document.forms[0].one.value); // first you can get all forms in an array, then accessing the first form with index 0, then targeting input with class one, then get the value of it
// // console.log(document.links[1].href); // you can get all links in an array then access it with index then get the link it self using .href

// //
// //
// //
// //
// //
// //
// //

// // /*
// //   DOM [Get / Set Elements Content And Attributes]
// //   - innerHTML
// //   - textContent
// //   - Change Attributes Directly
// //   - Change Attributes With Methods
// //   --- getAttribute
// //   --- setAttribute
// //   --- search how to write attributes

// //   Search
// //   - innerText
// // */

// // let myElement = document.querySelector(".js");

// // console.log(myElement.innerHTML); // will get you the whole html structure with all tags
// // console.log(myElement.textContent); // this will get you just the output values or only text content

// // myElement.innerHTML = "Text From <span>Main.js</span> File"; // here it change the structure of html
// // myElement.textContent = "Text From <span>Main.js</span> File"; // here it will add the text as it is and will print <span></span>
// // // this will be useful it you want to print tags without writing ntt (&lt; , &gt;)

// // // this way for directly changing the attribute
// // document.images[0].src = "https://google.com"; // if attribute exists it will override on it
// // document.images[0].alt = "Alternate";
// // document.images[0].title = "Picture"; // if attribute doesn't exist, it will create it and ad its value
// // document.images[0].id = "pic"; // better to write id without capital letter at the beginning
// // document.images[0].className = "img";

// // let myLink = document.querySelector(".link");

// // console.log(myLink.getAttribute("class"));
// // console.log(myLink.getAttribute("href"));

// // //myLink.setAttribute("attribute-name", "value");

// // myLink.setAttribute("href", "https://twitter.com");
// // myLink.setAttribute("title", "Twitter");

// //
// //
// //
// //
// //
// //
// //
// //
// //

// // /*
// //   DOM [Check Attributes]
// //   - Element.attributes -> get all attributes of that element, for checking
// //   - Element.hasAttribute  -> output true or false
// //   - Element.hasAttributes ->  check if it has any attributes or no
// //   - Element.removeAttribute -> removes the given attribute name
// // */

// // console.log(document.getElementsByTagName("p")[0].attributes);

// // let myP = document.getElementsByTagName("p")[0];

// // if (myP.hasAttribute("data-src")) {
// //   if (myP.getAttribute("data-src") === "") {
// //     // if empty , remove it
// //     myP.removeAttribute("data-src");
// //   } else {
// //     myP.setAttribute("data-src", "New Value"); // else, change its value to New Value
// //   }
// // } else {
// //   console.log(`Not Found`);
// // }

// // if (myP.hasAttributes()) {
// //   // just check if it has any attributes or no
// //   console.log(`Has Attributes`);
// // }

// // if (document.getElementsByTagName("div")[0].hasAttributes()) {
// //   console.log(`Has Attributes`);
// // } else {
// //   console.log(`Div Has No Attributes`);
// // }

// //
// //
// //
// //
// //
// //
// //

// /*
//   DOM [Create Elements]
//   - createElement
//   - createComment
//   - createTextNode
//   - createAttribute
//   - setAttributeNode
//   - setAttribute
//   - appendChild
// */

// // let myElement = document.createElement("div"); // create new element in html page
// // let myAttr = document.createAttribute("data-custom"); // create new attribute name and save it in a variable
// // let myText = document.createTextNode("Product One"); // Create a text node
// // let myComment = document.createComment("This Is Div"); // create a comment which can be added using appendChild

// // myElement.className = "product"; // give a class to my element
// // myElement.setAttributeNode(myAttr); // set the created custom attribute
// // myElement.setAttribute("data-test", "Testing"); // first is the created attribute or default attribute then its value

// // // Append Comment To Element
// // myElement.appendChild(myComment);

// // // Append Text To Element
// // myElement.appendChild(myText); // adding the text to the element, append will add to last, pre append will add to the beginning

// // // Append Element To Body
// // document.body.appendChild(myElement);

// //
// //
// //
// //
// //
// //

// // for (let i = 1; i <= 100; i++) {
// //   let myElement = document.createElement("div");
// //   let heading2 = document.createElement("h2");
// //   let para = document.createElement("p");

// //   let textForHeading = document.createTextNode(`Product Name ${i}`);
// //   let textForPara = document.createTextNode("Info About The Product");

// //   // Add Heading text & Add Heading To The Div
// //   heading2.appendChild(textForHeading);
// //   myElement.appendChild(heading2);

// //   // Add paragraph text & Add paragraph To The Div
// //   para.appendChild(textForPara);
// //   myElement.appendChild(para);

// //   myElement.className = "product";

// //   document.body.appendChild(myElement);
// // }

// // let myElement = document.createElement("div");
// // let heading2 = document.createElement("h2");
// // let para = document.createElement("p");

// // let textForHeading = document.createTextNode("Product Name");
// // let textForPara = document.createTextNode("Info About The Product");

// // // Add Heading text & Add Heading To The Div
// // heading2.appendChild(textForHeading);
// // myElement.appendChild(heading2);

// // // Add paragraph text & Add paragraph To The Div
// // para.appendChild(textForPara);
// // myElement.appendChild(para);

// // myElement.className = "product";

// // document.body.appendChild(myElement);

// //
// //
// //
// //
// //
// //

// /*
//   DOM [Deal With Childrens]
//   - children  -> get you only the element not the text or comments
//   - childNodes -> it gets everything. elements, text, comment and also the spaces if found
//   - firstChild -> gets the first child of any type (element, text, comment)
//   - lastChild -> gets the last child of any type (element, text, comment)
//   - firstElementChild -> gets only the first element it finds
//   - lastElementChild -> gets only the last element it finds
// */

// // let myElement = document.querySelector("div");

// // console.log(myElement);
// // console.log(myElement.children);
// // console.log(myElement.children[0]);
// // console.log(myElement.childNodes);
// // console.log(myElement.childNodes[0]);

// // console.log(myElement.firstChild);
// // console.log(myElement.lastChild);

// // console.log(myElement.firstElementChild);
// // console.log(myElement.lastElementChild);

// //
// //
// //
// //
// //
// //

// // /*
// //   DOM [Events]
// //   - Use Events On HTML  -> onclick="console.log('Clicked')"  in the html element itself
// //   - Use Events On JS  -> by using anonymous function

// //   --- onclick => when left clicked
// //   --- oncontextmenu => when right clicked you can disable the default menu and create your own menu
// //   --- onmouseenter => when you enter with your mouse pointer to that element
// //   --- onmouseleave => when you leave with your mouse pointer from that element

// //   --- onload
// //   --- onscroll => when you scroll through your page, example: when you scroll deep down your page a button appears to return you back to the top
// //   --- onresize => when you resize your window

// //   ( FORUM )
// //   --- onfocus  => when you enter into the input to write something
// //   --- onblur  => when you leave from the input , you can check or validate the information written inside
// //   --- onsubmit  => when you submit your forum
// // */

// // let myBtn = document.getElementById("btn");

// // myBtn.onmouseleave = function () {
// //   console.log("Clicked");
// // };

// // window.onresize = function () {
// //   console.log("Scroll");
// // };

// //
// //
// //
// //
// //
// //

// /*
//   DOM [Events]
//   - Validate Form Practice
//   - Prevent Default
// */

// // // return value = false or true

// // let userInput = document.querySelector("[name='username']");
// // let ageInput = document.querySelector("[name='age']");

// // document.forms[0].onsubmit = function (e) {
// //   let userValid = false;
// //   let ageValid = false;

// //   if (userInput.value !== "" && userInput.value.length <= 10) {
// //     userValid = true;
// //   }

// //   if (ageInput.value !== "") {
// //     ageValid = true;
// //   }

// //   if (userValid === false || ageValid === false) {
// //     e.preventDefault();
// //   }
// // };

// // document.links[0].onclick = function (event) {  // event is the onclick event
// //   console.log(event);
// //   event.preventDefault();
// // };

// //
// //
// //
// //
// //
// //

// // /*
// //   DOM [Events Simulation] = when you finish something another event will happen automatically
// //   - click
// //   - focus
// //   - blur

// //   blur + focus
// // */

// // let one = document.querySelector(".one");
// // let two = document.querySelector(".two");

// // window.onload = function () {
// //   two.focus();
// // };

// // one.onblur = function () {
// //   document.links[0].click();
// // };

// //
// //
// //
// //
// //
// //

// /*
//   DOM [Class List]
//   - classList ( Object )
//   --- length
//   --- contains = returns a boolean value which is useful in decision making
//   --- item(index) = to know the class name itself using the index
//   --- add
//   --- remove
//   --- toggle
// */

// // let element = document.getElementById("my-div");

// // console.log(element.classList);
// // console.log(typeof element.classList);
// // console.log(element.classList.contains("osama"));
// // console.log(element.classList.contains("show"));
// // console.log(element.classList.item("3"));

// // element.onclick = function () {
// //   element.classList.add("add-one", "add-two"); // instead of element you can write this,   this.classList.toggle("show")
// //   element.classList.remove("one", "two"); // add & remove accept more than one token , it accepts tokenS so you can add or remove alot of classes
// //   element.classList.toggle("show"); // toggle is add&remove in same time, if class name is found already in element it will remove it, if class is not found it will add it
// // };

// //
// //
// //
// //
// //
// //
// // /*
// //   DOM [CSS]
// //   - style
// //   - cssText
// //   - removeProperty(propertyName) [Inline, Stylesheet]  remove from inline code in html not css file
// //   - setProperty(propertyName, value, priority)
// // */

// // let element = document.getElementById("my-div");

// // // INLINE Changes
// // element.style.color = "red"; // one word property
// // element.style.fontWeight = "bold"; // two or more word written in camelCase

// // element.style.cssText = "font-weight: bold; color: green; opacity: 0.9"; // write many properties in one line

// // element.style.removeProperty("color"); // will remove the color in inline code in html

// // element.style.setProperty("font-size", "40px", "important"); // sets the property with the value and its priority

// // // CSS FILE Changes

// // document.styleSheets[0].rules[0].style.removeProperty("line-height")

// // document.styleSheets[0].rules[0].style.setProperty("background-color", "red", "important")

// // // styleSheets = are the external css sheets you are using so i will get the first one with index 0

// // // rules = are the elements you are changing their css properties like div {}, .box {} , .class {} in css sheet

// //
// //
// //
// //
// //
// //
// //

// /*
//   DOM [Deal With Elements]
//   - before [Element || String]
//   - after [Element || String]
//   - append [Element || String]
//   - prepend [Element || String]
//   - remove
// */

// // let element = document.getElementById("my-div");
// // let createdP = document.createElement("p");

// // element.before("Hello From JS"); // will add this string before the div not inside it
// // element.after("Hello From JS"); // will add this string after the div not inside it

// // element.before(createdP); // will add this Element after the div not inside it
// // element.after(createdP); // will add this Element after the div not inside it

// // element.append("Hello From JS"); // will add this string inside the div at the end
// // element.prepend("Hello From JS"); // will add this string inside the div at the beginning

// // element.append(createdP); // will add this Element inside the div at the end
// // element.prepend(createdP); // will add this Element inside tge div at the beginning

// // element.remove(); // will remove this element completely from the file
// // // used if you don't want the user to see something and better than display: none; in css
// // // unless you are planing to show the element later by display property

// //
// //
// //
// //
// //
// //

// /*
//   DOM [Traversing]
//   - nextSibling  -> gets you anything after the element you are on, comment, text, element
//   - previousSibling -> gets you anything before the element you are on, comment, text, element
//   - nextElementSibling -> gets you only the element after the element you are on
//   - previousElementSibling -> gets you only the element before the element you are on
//   - parentElement -> gets you the direct parent of the element you are in
// */

// // you should know how to go the first or last element

// // let span = document.querySelector(".two");

// // console.log(span.parentElement);

// // span.onclick = function () {
// //   span.parentElement.remove(); // when you click the span it will remove the parent element completely
// // }

// // /*
// //   DOM [Cloning]
// //   - cloneNode(Deep)  -> Deep accepts true or false, false is the default value which will not take the content inside the element
// //   only the attributes,  but true will take the whole element and content inside
// // */

// // let myP = document.querySelector("p").cloneNode(true);  // this variable is the clone and not the original element
// // let myDiv = document.querySelector("div");

// // myP.id = `${myP.id}-clone`; // after cloning if the element has id it will take it, so you should change the id of the new clone cuz id must be unique for the element

// // myDiv.appendChild(myP);s

// //
// //
// //
// //
// //
// //

// /*
//   DOM [Add Event Listener]
//   - addEventListener
//   - Use Without On
//   - Attach Multiple Events
//   - Error Test

//   Search
//   - Capture & Bubbling JavaScript
//   - removeEventListener
// */

// // let myP = document.querySelector("p");

// /*
// myP.onclick = one;  you can write a named function directly without using anonymous function
// myP.onclick = two;  here the second function will override the first function cuz this simple method accepts only one function

// function one() {
//   console.log("Message From OnClick 1");
// }
// function two() {
//   console.log("Message From OnClick 2");
// }
// */

// // window.onload = "Osama"; // nothing happens

// /*

// myP.addEventListener("click", function () {     // in addEventListener you don't write on, just the event itself (not: onclick, just: click)
//   console.log("Message From OnClick 1 Event");
// });

// myP.addEventListener("click", one);
// myP.addEventListener("click", two);
// -- here you added more than function when one event is done, due to using addEventListener

// myP.addEventListener("click", "String"); // Error, cuz it accepts function or object

// */

// //
// //
// //
// //
// //
// ///
// ///
// //
// //
// ///
// //

// // /*
// //   BOM [Browser Object Model]
// //   - Introduction
// //   --- Window Object Is The Browser Window
// //   --- Window Contain The Document Object **
// //   --- All Global Variables And Objects And Functions Are Members Of Window Object
// //   ------ Test Document And Console
// //   - What Can We Do With Window Object ?
// //   --- Open Window
// //   --- Close Window
// //   --- Move Window
// //   --- Resize Window
// //   --- Print Document
// //   --- Run Code After Period Of Time Once Or More
// //   --- Fully Control The URL
// //   --- Save Data Inside Browser To Use Later
// // */

// // window.console.log("good")
// // window.document.title = "Hello JS";

// //
// ///
// ///
// //
// //
// ///
// //

// // /*
// //   BOM [Browser Object Model]
// //   - alert(Message) => Need No Response Only Ok Available || use sweet alert 2 for better alert
// //   - confirm(Message) => Need Response And Return A Boolean
// //   - prompt(Message, Default Message(like a placeholder)) => Collect Data
// // */

// // /*
// // - same thing cuz you are in global scope

// // window.alert("Test")
// // this.alert("Test")
// // alert("Test");

// // - alert stops everything after it until you press OK
// // - you can't click while alert popup is there
// // */

// // /*

// // let confirmMsg = confirm("Are You Sure?");

// // console.log(confirmMsg);

// // if (confirmMsg === true) {
// //   console.log("Item Deleted");
// // } else {
// //   console.log("Item Not Deleted");
// // }

// // */

// // let promptMsg = prompt("Good Day To You?", "Write Day With 3 Characters");

// // console.log(promptMsg);

// //
// ///
// ///
// //
// //
// ///
// //

// // /*
// //   BOM [Browser Object Model]
// //   - setTimeout(Function, Timeout, Additional Params) = do a function after certain amount of time | IMPORTANT
// //   - clearTimeout(Identifier)
// // */

// // /*

// // setTimeout(function () {
// //   console.log("Msg");
// // }, 3000);

// // */

// // /*

// // setTimeout(sayMsg, 3000);

// // function sayMsg() {
// //   console.log(`Iam Message`);
// // }

// // */

// // /*

// // setTimeout(sayMsg, 3000, "Osama", 38);

// // function sayMsg(user, age) {
// //   console.log(`Iam Message For ${user} Age Is : ${age}`);
// // }

// // */

// // let btn = document.querySelector("button");

// // btn.onclick = function () {
// //   clearTimeout(counter);  // you should save the setTimeout in a variable to use clearTimeout for it
// // };

// // function sayMsg() {
// //   console.log(`Iam Message For Test`);
// // }

// // let counter = setTimeout(sayMsg, 3000);

// //
// //
// //
// //
// //
// //
// //

// /*
//   BOM [Browser Object Model]
//   - setInterval(Function, Milliseconds, Additional Params)  => do the function every Milliseconds, like loop but with time
//   - clearInterval(Identifier) => save the setInterval in a variable then use it in clearInterval to stop the setInterval
// */

// // setInterval(function () {
// //   console.log(`Msg`);
// // }, 1000);

// // setInterval(sayMsg, 1000);

// // function sayMsg() {
// //   console.log(`Iam Message`);
// // }

// // setInterval(sayMsg, 1000, "Osama", 38);

// // function sayMsg(user, age) {
// //   console.log(`Iam Message For ${user} His Age Is: ${age}`);
// // }

// // let div = document.querySelector(".test");

// // function countdown() {
// //   div.innerHTML -= 1;
// //   if (div.innerHTML === "0") {
// //     // 0 is a string and not a number cuz it is from innerHTML
// //     clearInterval(counter);
// //   }
// // }

// // let counter = setInterval(countdown, 1000);

// //
// //
// //
// //
// //
// //
// //

// // /*
// //   BOM [Browser Object Model]
// //   - location Object
// //   --- href Get / Set [URL || Hash || File || Mail] => href doesn't delete our entry from the history
// //   --- host
// //   --- hash
// //   --- protocol
// //   --- reload()
// //   --- replace()
// //   --- assign()
// // */

// // console.log(location);
// // console.log(location.href);

// // // location.href = "https://google.com";
// // // location.href = "/#sec02";   =  hash goes to a section in your website or any other website
// // // location.href = "https://developer.mozilla.org/en-US/docs/Web/JavaScript#reference";

// // // console.log(location.host); = host name comes with the port too
// // // console.log(location.hostname); = only the host name

// // // if you changed host name it will only change the first part of the address
// // // https://elzero.org/category/question-and-answer/
// // // location.hostname = "google.com"    write this in console
// // // https://google.com/category/question-and-answer/

// // // console.log(location.protocol);  => http or https

// // // console.log(location.hash); // the section , #sec02

// // // location.reload  = to reload the page, or create a button for reloading, or reload after saving

// // // location.replace("https://google.com")  =  will replace the current page you are in with the new link, the current page you are in will be removed from history

// // // location.assign("https://google.com")  =  will go to that url and the page you were on will be in history normally

// //
// //
// //
// //
// //
// //
// //
// // /*
// //   BOM [Browser Object Model]
// //   - open(URL [Opt], Window Name Or Target Attr [Opt] (default: "_blank")("_self"), Win Features [Opt], History Replace [Opt] (true, false))
// //   - close() = closes only the window that is opened by open method
// //   - Window Features
// //   --- left [Num]
// //   --- top [Num]
// //   --- width [Num]
// //   --- height [Num]
// //   --- menubar [yes || no]

// //   Search
// //   - Window.Open Window Features
// // */

// // setTimeout(function () {
// //   window.open("https://google.com", "_self", "", true);
// // }, 2000);

// // // setTimeout(function () {
// // //   window.open(
// // //     "https://google.com",
// // //     "_self",
// // //     "width=400,height=400,left=200,top=100"
// // //   );
// // // }, 2000);

// //
// //
// //
// //
// //
// //
// //

// // /*
// //   BOM [Browser Object Model]
// //   - History API
// //   --- Properties
// //   ------ length  = the pages in history + the page you are on now
// //   --- Methods
// //   ------ back()
// //   ------ forward()
// //   ------ go(Delta) => Position In History
// //   ------ go(0) = stays in the same page
// //   ------ go(1) = go one page forward
// //   ------ go(-1) = go one page backward

// //   Search [For Advanced Knowledge]
// //   - pushState(state, unused, url) + replaceState(stateObj, unused, url)
// // */

// // /*
// // replaceState() will change the URL in the browser (ie. pressing the back button won't take you back)

// // pushState() will change the URL, and keep the old one in the browser history (ie. pressing the back button will take you back)
// // */

// // console.log(history.pushState());

// //
// //
// //
// //
// //
// //
// //

// // /*
// //   BOM [Browser Object Model]
// //   - stop()  => it will stop loading the rest of the content in the page
// //   - print()  => it will print the page, used by adding this method when a button is clicked
// //   - focus() => will focus on that window, if you opened a new window with open() and saved it in a variable you can then focus on it
// //   - scrollTo(x, y || Options) => goes to a specific part in the page of x & y
// //   - scroll(x, y || Options)
// //   - scrollBy(x, y || Options) => scroll by the amount of x & y given
// // */

// // // let myNewWindow = window.open("https://google.com", "", "width=500,height=500");

// // // window.scrollTo({
// // //   left: 500,
// // //   top: 200,
// // //   behavior: "smooth"
// // // });

// // // if you write top with negative number will scroll up
// // // if you write left with negative number will scroll to the left

// //
// //
// //
// //
// //
// //
// //

// // /*
// //   BOM [Browser Object Model]
// //   - Practice => Scroll To Top
// //   - scrollX [Alias => PageXOffset]
// //   - scrollY [Alias => PageYOffset]
// // */

// // // console.log(window.scrollX === window.pageXOffset);
// // // pageXOffset & pageYOffset used in older websites

// // let btn = document.querySelector(".up");

// // window.onscroll = function () {
// //   if (window.scrollY >= 600) {
// //     btn.style.display = "block";
// //   } else {
// //     btn.style.display = "none";
// //   }
// // }; // will appear the button when scrollY is higher or equal to 600 and display none if lower than 600

// // btn.onclick = function () {
// //   window.scrollTo({
// //     left: 0,
// //     top: 0,
// //     behavior: "smooth",
// //   }); // when the button is clicked it will go to the top of the page
// // };
// // let btn = document.querySelector("button");

// // btn.onclick = function () {
// //   clearTimeout(counter); // you should save the setTimeout in a variable to use clearTimeout for it
// // };
// //

// // function () {
// //   console.log(`Iam Message For Test`);
// // }

// // let counter = setTimeout(sayMsg, 3000);

// // setTimeout(function () {
// //   window.open("https://www.mozilla.org/", "mozillaTab");
// // }, 2000);

// //
// //
// //
// ///
// //
// //
// //
// //
// //
// //
// ///
// ///
// //
// //
// //
// //

// // /*
// //   BOM [Browser Object Model]
// //   Local Storage
// //   - setItem
// //   - getItem
// //   - removeItem
// //   - clear
// //   - key

// //   Info
// //   - No Expiration Time  || unless you make something or function that removes the localStorage after certain amount of time or under any condition
// //   - HTTP And HTTPS || localStorage are different in each protocol
// //   - Private Tab || if you are in private tab when you close it, all the local storage will be removed cleared
// // */

// // // Set
// // window.localStorage.setItem("color", "#F00");
// // window.localStorage.fontWeight = "bold";
// // window.localStorage["fontSize"] = "20px";

// // // Get
// // console.log(window.localStorage.getItem("color")); // get the value of the key
// // console.log(window.localStorage.color);
// // console.log(window.localStorage["color"]);

// // // Remove One key
// // // window.localStorage.removeItem("color");

// // // Remove All keys
// // // window.localStorage.clear();

// // // Get Key
// // console.log(window.localStorage.key(2)); // gets you the key by index in the object (localStorage)

// // // Set Color In Page
// // document.body.style.backgroundColor = window.localStorage.getItem("color"); // will set the value of the key to the background-color style

// // console.log(window.localStorage);
// // console.log(typeof window.localStorage); // object

// ///
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //

// /*
//   BOM [Browser Object Model]
//   Local Storage Practice
// */

// let lis = document.querySelectorAll("ul li");
// let exp = document.querySelector(".experiment");

// if (window.localStorage.getItem("color")) {
//   // If There Is Color In Local Storage
//   // [1] Add Color To Div
//   exp.style.backgroundColor = window.localStorage.getItem("color");
//   // [2] Remove Active Class From All Lis
//   lis.forEach((li) => {
//     li.classList.remove("active");
//   });
//   // [3] Add Active Class To Current Color
//   document
//     .querySelector(`[data-color="${window.localStorage.getItem("color")}"]`)
//     .classList.add("active");
// }

// lis.forEach((li) => {
//   li.addEventListener("click", (e) => {
//     // console.log(e.currentTarget.dataset.color);
//     // Remove Active Class From all Lis
//     lis.forEach((li) => {
//       li.classList.remove("active");
//     });
//     // Add Active Class To Current Element
//     e.currentTarget.classList.add("active");
//     // Add Current Color To Local Storage
//     window.localStorage.setItem("color", e.currentTarget.dataset.color);
//     // Change Div Background Color
//     exp.style.backgroundColor = e.currentTarget.dataset.color;
//   });
// });

// /*
//   BOM [Browser Object Model]
//   Local Storage Practice
// */
// // window.localStorage.clear();

// let lis = document.querySelectorAll("ul li");
// let exp = document.querySelector(".experiment");

// if (window.localStorage.getItem("color")) {
//   // If There Is Color In Local Storage
//   // [1] Add Color To Div
//   exp.style.backgroundColor = window.localStorage.getItem("color");
//   // [2] Remove Active Class From All Lis
//   lis.forEach((li) => {
//     li.classList.remove("active");
//   });
//   // [3] Add Active Class To Current Color
//   document
//     .querySelector(`[data-color="${window.localStorage.getItem("color")}"]`)
//     .classList.add("active");
// }

// lis.forEach((li) => {
//   li.addEventListener("click", (e) => {   // e is event
//     // console.log(e.currentTarget.dataset.color);
//     // Remove Active Class From all Lis
//     lis.forEach((li) => {
//       li.classList.remove("active");
//     });
//     // Add Active Class To Current Element
//     e.currentTarget.classList.add("active");
//     // Add Current Color To Local Storage
//     window.localStorage.setItem("color", e.currentTarget.dataset.color); // it will update the value of color on each click
//     // Change Div Background Color
//     exp.style.backgroundColor = e.currentTarget.dataset.color; // or write = window.localStorage.color
//   });
// });

//
//
//
//
//
//
//
//
//
//

/*
  BOM [Browser Object Model]
  Session Storage
  - setItem
  - getItem
  - removeItem
  - clear
  - key

  Info
  - if you closed the window and re-open = New Session
  - if you reload the window = Copy Session
  - New Tab = New Session
  - Duplicate Tab = Copy Session
  - New Tab With Same Url = New Session
*/

// window.localStorage.setItem("color", "red");
// window.sessionStorage.setItem("color", "blue");
// localStorage and sessionStorage are different so you can set same key names in each of them and they will not update each other

// document.querySelector(".name").onblur = function () {
//   // console.log(this.value);
//   window.sessionStorage.setItem("input-name", this.value);
// };

// if (window.sessionStorage.getItem("input-name")) {
//   document.querySelector(".name").value =
//     window.sessionStorage.getItem("input-name");
// }

// in this form test it is better to use sessionStorage so you are not creepy

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// /*
//   Destructuring
//   " is a JavaScript expression that allows us to extract data from arrays,
//     objects, and maps and set them into new, distinct variables. "
//   - Destructuring Array
// */

// let a = 1;
// let b = 2;
// let c = 3;
// let d = 4;

// let myFriends = ["Ahmed", "Sayed", "Ali", "Maysa"];

// [a = "A", b, c, d, e = "Osama"] = myFriends;

// console.log(a); // a will be Ahmed and not A cuz it will be updated to the array value of index 0
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e); // output = Osama cuz there is no value "undefined" for index 4 so it will show the normal value "Osama"

// // console.log(myFriends[4]); // undefined

// let [, y, , z] = myFriends; // adding an empty field will skip the same one in the array

// console.log(y); // Sayed
// console.log(z); // Maysa

//
//
//
//
//
//
//
//

// /*
//   Destructuring
//   - Destructuring Array Advanced Examples
// */

// let myFriends = [
//   "Ahmed",
//   "Sayed",
//   "Ali",
//   ["Shady", "Amr", ["Mohamed", "Gamal"]],
// ];

// // console.log(myFriends[3][2][1]); => old way , destructuring is better

// let [, , , [a, , [, b]]] = myFriends;

// console.log(a); // Shady
// console.log(b); // Gamal

//
//
//
//
//
//
//
//

// /*
//   Destructuring
//   - Destructuring Array => Swapping Variables
// */

// let book = "Video";
// let video = "Book";

// /*
// // Save Book Value In Stash
// let stash = book; // Video

// // Change Book Value
// book = video; // Book

// // Change Video Value
// video = stash; // Video
// */

// [book, video] = [video, book];
// //[book, video] = ["Book", "Video"]; as if you are doing this, but with destructuring

// console.log(book); // Book
// console.log(video); // Video

//
//
//
//
//
//
//
//

// /*
//   Destructuring
//   - Destructuring Object
// */

// const user = {
//   theName: "Osama",
//   theAge: 39,
//   theTitle: "Developer",
//   theCountry: "Egypt",
// };

// // console.log(user.theName);
// // console.log(user.theAge);
// // console.log(user.theTitle);
// // console.log(user.theCountry);

// // let theName = user.theName;
// // let theAge = user.theAge;
// // let theTitle = user.theTitle;
// // let theCountry = user.theCountry;

// // console.log(theName);
// // console.log(theAge);
// // console.log(theTitle);
// // console.log(theCountry);

// // ({ theName, theAge, theTitle, theCountry } = user); // => if you want to destructure the object but the variable are already declared add () to your code line

// const { theName, theAge, theCountry } = user;
// // you can skip anything from the object without writing and empty field cuz you are calling with the identifier itself
// // so we skipped theTitle without writing an empty field

// console.log(theName);
// console.log(theAge);
// console.log(theCountry);

// // we are calling the new variable directly without writing user.theName or user.theAge
// // the new variable has same name as the identifier in the object

//
//
//
//
//
//
//
//

/*
  Destructuring
  - Destructuring Object
  --- Naming The Variables
  --- Add New Property
  --- Nested Object
  --- Destructuring The Nested Object Only
*/

// const user = {
//   theName: "Osama",
//   theAge: 39,
//   theTitle: "Developer",
//   theCountry: "Egypt",
//   theColor: "Black",
//   skills: {
//     html: 70,
//     css: 80,
//   },
// };

// const {
//   theName: n, // here you renaming the identifier in the object with a new name that you want
//   theAge: a,
//   theCountry,
//   theColor: co = "Red", // if you gave or there was a value for the identifier it will be updated by the new one in object you can also rename it, but if variable was not in the object then it will give you the value you assign to it
//   skills: { html: h, css },
// } = user;

// console.log(n); // Osama
// console.log(a); // 39
// console.log(theCountry); // Egypt
// console.log(co); // Black
// console.log(`My HTML Skill Progress Is ${h}`); // h = 70
// console.log(`My CSS Skill Progress Is ${css}`); // css = 80

// const { html: skillOne, css: skillTwo } = user.skills; // here you accessed the object inside the main object and got the two identifiers in it html & css then rename the variables to skillOne & skillTwo

// console.log(`My HTML Skill Progress Is ${skillOne}`);
// console.log(`My CSS Skill Progress Is ${skillTwo}`);

//
//
//
//
//
//
//
//

// /*
//   Destructuring
//   - Destructuring Function Parameters
// */

// const user = {
//   theName: "Osama",
//   theAge: 39,
//   skills: {
//     html: 70,
//     css: 80,
//   },
// };

// showDetails(user);

// // function showDetails(obj) {
// //   console.log(`Your Name Is ${obj.theName}`);
// //   console.log(`Your Age Is ${obj.theAge}`);
// //   console.log(`Your CSS Skill Progress Is ${obj.skills.css}`);
// // }

// function showDetails({ theName: n, theAge: a, skills: { css: c } } = user) {
//   console.log(`Your Name Is ${n}`);
//   console.log(`Your Age Is ${a}`);
//   console.log(`Your CSS Skill Progress Is ${c}`);
// }

//
//
//
//
//
//
//
//

// /*
//   Destructuring
//   - Challenge
// */

// let chosen = 1;

// let myFriends = [
//   { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
//   { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
//   { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
// ];

// if (chosen == 1) {
//   const [
//     {
//       title: t,
//       age: a,
//       available: v,
//       skills: [, last],
//     },
//     ,
//   ] = myFriends;

//   console.log(t);
//   console.log(a);

//   if (v == true) {
//     console.log(`Available`);
//   } else {
//     console.log(`Not Available`);
//   }
//   console.log(last);
// } else if (chosen == 2) {
//   const [
//     ,
//     {
//       title: t,
//       age: a,
//       available: v,
//       skills: [, last],
//     },
//   ] = myFriends;

//   console.log(t);
//   console.log(a);

//   if (v == true) {
//     console.log(`Available`);
//   } else {
//     console.log(`Not Available`);
//   }
//   console.log(last);
// } else if (chosen == 3) {
//   const [
//     ,
//     ,
//     {
//       title: t,
//       age: a,
//       available: v,
//       skills: [, last],
//     },
//   ] = myFriends;

//   console.log(t);
//   console.log(a);

//   if (v == true) {
//     console.log(`Available`);
//   } else {
//     console.log(`Not Available`);
//   }
//   console.log(last);
// }
