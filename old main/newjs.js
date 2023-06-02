// /*
//   Arithmetic Operators
//   + Addition
//   - Subtraction
//   * Multiplication
//   / Division
//   ** Exponentiation (ES7)
//   % Modulus (Division Remainder)
//   ++ Increment [ Post / Pre ]
//   -- Decrement [ Post / Pre ]
// */
// /*
// post increment means = that he will print and then add 1
// pre increment means = that he will add one and then print it

// same for decrement

// num = 1
// num++    => gives you 1,  cuz it printed first then added one to it
//             and if you write num after that it will give you 2

// num = 1
// ++num   => gives you 2, cuz it added 1 then printed the result (2) for   you
// */
// console.log(10 + 20); // it will add the numbers
// console.log(10 + "Osama"); // here cuz it is a mix of number and string it will put them
// //next to each other only   output: 10Osama

// console.log(10 - 20);
// console.log(10 - "Osama"); // NaN = Not a Number ,  cuz minus can't be anything other than a minus unlike +
// console.log(typeof NaN); // output = number  , it is weird in the language

// console.log(10 * 20);
// console.log(10 * -20);

// console.log(20 / 5);
// console.log(20 / 3);

// console.log(2 ** 4); // ** means to the power of
// console.log(2 * 2 * 2 * 2);

// console.log(10 % 2);
// console.log(11 % 2); // Remove 1

// console.log(11 % 2); // this sign (%)
// /*
// means how much we should remove from the number
// to give us a whole number without decimals

// we can use that to know if the number is odd or even when we divide it
// by 2, if it gives 0 then it is even if odd it gives 1
// */

// /*
//   - + Unary Plus [Return Number If Its Not Number] (means it always return you a number as a data type from a string or a boolean)
//   - - Unary Negation [Return Number If Its Not Number + Negates It]
//     (returns from your data a number, and change it to a negative number)
//   Tests
//   - Normal Number
//   - String Number
//   - String Negative Number
//   - String Text
//   - Float
//   - Hexadecimal Numeral System => 0xFF (255)
//   - null
//   - false
//   - true
// */

// console.log(+100); // returned as a number so no change
// console.log(+"100"); // returned as a number which was a string before
// console.log(+"-100"); // returned as a number which was a string before
// console.log(+"Osama"); // return NaN =  Not a Number
// console.log(+"15.5"); // returned as a number which was a string before
// console.log(+0xff); // returned as a number so no change -> 255
// console.log(+null); // return 0 as a number
// console.log(+false); // return 0 as a number
// console.log(+true); // return 1 as a number

// console.log(-100); // a negative number
// console.log(-"100"); // change the string into a numebr and then change it to a negative number
// console.log(-"-100"); // the negative of negative is positive
// console.log(-"Osama"); // you can't get a number from text = NaN
// console.log(-"15.5"); // a negative number
// console.log(-0xff); // a negative number
// console.log(-null); // it will put a negative sign before the zero
// console.log(-false); // it will put a negative sign before the zero
// console.log(-true); // gives a -1

// console.log(Number("100")); // this is another way to return a number from a string
// // but using Unary is easier and you can also get a negative from it easily

// /*
//   Type Coercion (Type Casting) التحويل بالاكراه
//   - +
//   - -
//   - "" - 2
//   - false - true
// */

// let a = "10";
// let b = 20;
// let c = true;

// console.log(b - a); // the output is 10, this is because the language can understand the data and see if it can be a number to minus it
// // but if the variable was a string with text inside it will give you NaN cuz we can't minus a text
// // but here even if a is a string but it contains a number inside so automatically it is changed to number and operation worked

// console.log("" - 2); // output is -2, because empty string is like zero so automatically changed the empty string to number zero then minus 2

// console.log(false - true); // output is -1, cuz false is like 0 and true is like 1 as a numbers

// console.log(a + b + c); // output is 1020true, a complete different output from expected

// console.log(+a + b + c);// output is 31
// // to solve that weird output (problem) just add + to a so it will make a number not a string
// // so it is like number 10 + number 20 + 1 = 31

// /*
//   Assignment Operators
// */

// let a = 10;

// a = a + 20;   // instead of this you ca write it like this ->  a += 20;    output=  30

// a = a + 70;   // instead of this you ca write it like this ->  a += 70;    output=  100

// a += 100; // a = a + 100    -> 200

// a -= 50; // a = a - 50      -> 150

// a /= 50; // a = a / 50      -> 3

// // the normal operator you know before the equal sign means the var itself minus/plus/etc the number after the equal

// /*
//   Challenge 1
// */

// let a = 10;
// let b = "20";
// let c = 80;

// console.log(++a + +b++ + +c++ - +a++);
// console.log(++a + -b + +c++ - -a++ + +a);
// console.log(--c + +b + --a * +b++ - +b * a + --a - +true);

// /*
// console.log(++a + -b + +c++ - -a++ + +a);

// [++a] [+] [+b++] [+] [+c++] [-] [+a++]

// [++a]
// - Value: 11
// - Explain: pre Increment, so plus 1 then print
// [+]
// - Explain: add operator cuz a and b are numbers
// [+b++]
// - Value: 20 (21)
// - Explain: first plus means change it from string to a number, then post Increment, so it add 1 put still not printed
// [+]
// - Explain: add operator
// [+c++]
// - Value: 80 (81)
// - Explain: post Increment, so it added one put still not printed
// [-]
// - Explain: minus operator
// [+a++]
// - Value: 11 (12)
// - Explain: post Increment, so it added one put still not printed

// 11 + 20 + 80 - 11 = 100

// /*

// /*
// console.log(++a + +b++ + +c++ - +a++);

// [++a] [+] [-b] [+] [+c++] [-] [-a++] [+] [+a]

// [++a]
// - Value: 13
// - Explain: pre Increment, add one then print
// [+]
// - Explain: add operator
// [-b]
// - Value: -21
// - Explain: just make last saved b negative
// [+]
// - Explain: add operator
// [+c++]
// - Value: 81 (82)
// - Explain: make positive of last saved c then add 1 post increment
// [-]
// - Explain: minus operator
// [-a++]
// - Value: -13 (14)
// - Explain: negative number of last saved a (13) then add one to the normal positive a not -a so it becomes (14) post decrement
// [+]
// - Explain: add operator
// [+a]
// - Value: 14
// - Explain: positive from last saved a which is 14

// 13 + (-21) + 81 - (-13) + 14 = 100

// */

// /*
// console.log(--c + +b + --a * +b++ - +b * a + --a - +true);

//   [--c] [+] [+b] [+] [--a] [*] [+b++] [-] [+b] [*] [a] [+] [--a] [-] [+true]

//   [--c]
//   - Value: 81
//   - Explain: pre decrement
//   [+]
//   - Explain: add operator
//   [+b]
//   - Value: 21
//   - Explain:
//   [+]
//   - Explain: add operator
//   [--a]
//   - Value: 13
//   - Explain: pre decrement
//   [*]
//   - Explain: Multiplication
//   [+b++]
//   - Value: 21 (22)
//   - Explain: post increment
//   [-]
//   - Explain: minus operator
//   [+b]
//   - Value: 22
//   - Explain: positive from last saved b
//   [*]
//   - Explain: Multiplication
//   [a]
//   -value: 13
//   [+]
//   - Explain: add operator
//   [--a]
//   - Value: 12
//   - Explain: pre decrement
//   [-]
//   - Explain: minus operator
//   [+true]
//   -value: 1

//   81 + 21 + 13 * 21 - 22 * 13 + 12 - 1 = 100

// */

// /*
//   Challenge 2
// */

// let d = "-100"; // string or -100
// let e = "20"; //string or 20
// let f = 30; //number 30
// let g = true; // boolean or 1

// // Only Use Variables Value
// // Do Not Use Variable Twice

// console.log(e * -d); // 2000
// console.log(20 * -(-100));

// console.log(-d + ++e * ++g + ++f); // 173
// console.log(-(-100) + 21 * 2 + 31);
// */

/*
  Number
  - Double Precision = The JavaScript Number type is a double-precision 64-bit binary format IEEE 754 value
  - Syntactic Sugar "_"
  - e
  - **
  - With Decimal
  - Number + BigInt
  - Number Min Value
  - Number Max Value
*/

// console.log(1000000); // a bit hard to read
// console.log(1_000_000); // Syntactic Sugar "_"  more understandable
// console.log(1e6); // e means 0 and the number after e means how much of zeros do you want
// console.log(10 ** 6); // 10 to the power of 6
// console.log(10 * 10 * 10 * 10 * 10 * 10); // the meaning of 10 ** 6
// console.log(1000000.0);

// // the outputs are 1 million or 1000000

// console.log(123e-5)  // output = 0.00123  it means thant the decimal will move to the left when after e is a negative number

// console.log(Number.MAX_SAFE_INTEGER); // after that you wil see weird things
// console.log(Number.MAX_VALUE); // last number in the language
// console.log(Number.MAX_VALUE + 23434343434); // you can't add any more number beyond the max value

// console.log(typeof Number); // output is = Function

// /*
//   Number Methods  الأجرأت الجهزة لتنفيذ فكرة معينة
//   - Two Dots To Call A Methods
//   - toString()     = returns a string
//   - toFixed()      = rounding to how many decimal place  ,  returns a string
//   - parseInt()     = number analysis  , returns a whole number   no decimals
//   - parseFloat()   = number analysis  , returns a float number   with decimals
//   - isInteger() [ES6]  =  is the output from the thing inside the brackets  = a whole number      "any is KAZA returns true or false"
//   - isNaN() [ES6]  =  is the output from the thing inside the brackets  = NaN
// */

// console.log((100).toString()); // put your number in a brackets or use two dots
// console.log(100..toString()); // output = 100 as a string  and two dots to say that you don't mean to add a number after decimal
// console.log((100.1).toString()); // output = 100.10 as a string, here we added one dot after number cuz it is not a whole number but already contains a decimal

// console.log((100.554555).toFixed(2)); // output = 100.55,   no rounding cuz third number after decimal is less than 5
// console.log((100.555555).toFixed(2)); // output = 100.56, second 5 after decimal is rounded to 6 as before it there is 5 or more

// console.log(Number("100 Osama")); // NAN
// console.log(+"100 Osama"); // NAN
// console.log(parseInt("100 Osama")); // 100
// console.log(parseInt("Osama 100 Osama")); // NAN   , cuz it is not that smart
// console.log(parseInt("100.500 Osama")); // 100
// console.log(parseFloat("100.500 Osama")); // 100.5
// console.log(parseFloat("100 Osama")); // 100

// console.log(Number.isInteger("100")); // false , cuz it is a string not even a number
// console.log(Number.isInteger(100.5)); // false , cuz it is a number with decimals not a whole number
// console.log(Number.isInteger(100)); // true , cuz it is a whole number

// console.log(Number.isNaN("Osama")); // output = false  ,   it returns Osama which is not a number right but it didn't return a NaN so the output is = false
// console.log(Number.isNaN("Osama" / 20)); // output = true  , cuz you can't divide a string by a number really so the return of it is NaN so output is = true

/*
  Math Object
  - round()  =  round the number if 0.5 or more then round to up it less than o.5 round to down
  - ceil()  = always get you the up number even if it was less that 0.5
  - floor() = always get you the down number even if it was more than 0.5
  - min()  = return the largest number from the given numbers
  - max()  = return the smallest number from the given numbers
  - pow()  = means to the power
  - random() = returns a random number
  - trunc() [Es6]  =  trunc returns only the integer doesn't look to the decimals at all, only the trunk or head of the number
*/

// console.log(Math.round(99.2)); // 99
// console.log(Math.round(99.5)); // 100

// console.log(Math.ceil(99.2)); // 100
// console.log(Math.floor(99.9)); // 99

// console.log(Math.min(10, 20, 100, -100, 90)); // -100
// console.log(Math.max(10, 20, 100, -100, 90)); // 100

// console.log(Math.pow(2, 4)); // 16   ,  same like  2 ** 4
// console.log(2 ** 4); // 16

// console.log(Math.random());
// console.log(Math.trunc(99.5)); // 99

// /*
//   Number Challenge
// */

// let a = 100; // 100
// let b = 2_00.5; // 200.5
// let c = 1e2; // 100
// let d = 2.4; // 2.4

// // Find Smallest Number In All Variables And Return Integer
// console.log(Math.trunc(Math.min(a, b, c, d)));

// // Use Variables a + d One Time To Get The Needed Output
// console.log(Math.pow(a, Math.trunc(d))); // 10000
// console.log(Math.pow(a, Math.floor(d))); // 10000
// console.log(Math.pow(a, Math.round(d))); // 10000
// console.log(Math.pow(a, +d.toFixed())); // 10000

// // Get Integer "2" From d Variable With 4 Methods
// console.log(Math.trunc(d));
// console.log(Math.floor(d));
// console.log(Math.round(d));
// console.log(+d.toFixed());

// // Use Variables b + d To Get This Valus
// console.log((Math.floor(b) / Math.ceil(d)).toFixed(2)); // 66.67 => String
// console.log(Math.ceil((Math.floor(b) / Math.ceil(d)).toFixed(2))); // 67 => Number
// console.log(Math.round((Math.floor(b) / Math.ceil(d)).toFixed(2))); // 67 => Number

// /*
//   String Methods  ( zero-based index )
//   - Access With Index  // start counting from 0
//   - Access With charAt() // start counting from 0
//   - length  // start counting from 1
//   - trim()  // removes any spaces from the beginning and ending not from the middle (for validation)
//   - toUpperCase() // to uppercase everything
//   - toLowerCase() // to lowercase everything
//   - Chain Methods // you can do more than one string method at the same time in same code
// */

// let theName = "Ahmed";

// console.log(theName);
// console.log(theName[1]); // output = h
// console.log(theName[5]); // output = undefined

// console.log(theName.charAt(1)); // output = h
// console.log(theName.charAt(5)); // output = empty

// console.log(theName.length); // output = 5
// console.log(theName.trim());

// console.log(theName.toUpperCase());
// console.log(theName.toLowerCase());

// console.log(theName.trim().charAt(2).toUpperCase());

/*
  String Methods
  - indexOf(Value [Mandatory], Start [Optional] 0)  // if it didn't find the thing you are searching for it returns -1
  it start searching from the left then returns its index from left
  - lastIndexOf(Value [Mand], Start [Opt] Length)
  it start searching from the right (end) then when it finds it, it returns the index of it from left not right 
  - slice(Start [Mand], End [Opt] Not Include End) // you can start from negative but last character is -1 directly not zero
  - repeat(Times) [ES6]
  - split(Separator [Opt], Limit [Opt])
*/

// let a = "Elzero Web School";

// console.log(a.indexOf("Web")); // output = 7
// console.log(a.indexOf("Web", 8)); // output = -1  ,  cuz it didn't find any web after index 8
// console.log(a.indexOf("o")); // 5
// console.log(a.lastIndexOf("o")); // 15

// console.log(a.slice(2, 6)); // output = zero  ,  take care that the end of slice it ignores it and return only until the one before the ending
// console.log(a.slice(7, 10));
// console.log(a.slice(-5, -3)); // output = ch
// console.log(a.slice(-10, -8)); // output = We

// console.log(a.repeat(5));

// console.log(a.split()); // return the full thing as an array ['Elzero Web School']
// console.log(a.split("")); // it will split each single character even the spaces into an array ['E', 'l', 'z', 'e', 'r', 'o', ' ', 'W', 'e', 'b', ' ', 'S', 'c', 'h', 'o', 'o', 'l']
// console.log(a.split(" ")); // it will split from all spaces ['Elzero', 'Web', 'School']
// console.log(a.split("zero")); // it will split from start of zero and end of it  so output ['El', ' Web School']
// console.log(a.split("", 6)); // it will have a limit only 6 characters so ['E', 'l', 'z', 'e', 'r', 'o']

/*
  String Challenge
  All Solutions Must Be In One Chain
  You Can Use Concatenate
*/

// let a = "Elzero Web School";

// // Include This Method In Your Solution [slice, charAt]
// console.log(a.charAt(2).toUpperCase() + a.slice(3, 6)); // Zero

// // 8 H
// console.log(a.charAt(13).toUpperCase().repeat(8)); // HHHHHHHH

// // Return Array
// console.log(a.split(" ", 1)); // ["Elzero"]

// // Use Only "substr" Method + Template Literals In Your Solution
// console.log(`${a.substr(0, 6)} ${a.substr(-6, 6)}`); // Elzero School

// // Solution Must Be Dynamic Because String May Changes
// console.log(
//   a.substr(0, 1).toLowerCase() +
//     a.substring(1, a.length - 1).toUpperCase() +
//     a.substr(-1).toLowerCase()
// ); // eLZERO WEB SCHOOl

// /*
//   Comparison Operators
//   - == Equal   -> we only compare the value and not the data type like if it is a number or string
//   - != Not Equal

//   - === Identical  -> compare value and data type
//   - !== Not Identical

//   - > Larger Than
//   - >= Larger Than Or Equal

//   - < Smaller Than
//   - <= Smaller Than Or Equal
// */

// console.log(10 == "10"); // Compare Value Only not data type  (true)
// console.log(-100 == "-100"); // Compare Value Only  (true)
// console.log(10 != "10"); // Compare Value Only  (false)

// console.log(10 === "10"); // Compare Value + Type  (false)
// console.log(10 !== "10"); // Compare Value + Type  (true)
// console.log(10 !== 10); // Compare Value + Type  (false)

// console.log(10 > 20);
// console.log(10 > 10);
// console.log(10 >= 10);

// console.log(10 < 20);
// console.log(10 < 10);
// console.log(10 <= 10);

// console.log("Osama" === "Ahmed"); // false
// console.log(typeof "Osama" === typeof "Ahmed"); // type of both of them are string so same identical output so it became true

// /*
//   Logical Operators
//   - ! Not
//   - && And    -> all must be true so the final output is true, if not so final output becomes false
//   - || Or     -> if any of the or is completed then the final output is true
// */

// console.log(true); //true
// console.log(!true); //false

// console.log(10 == "10"); //true
// console.log(!(10 == "10")); //false

// console.log(10 == "10" && 10 > 8 && 10 >= 10); // true , cuz all the conditions inside are valid
// console.log(10 == "10" && 10 > 8 && 10 > 50); // false , cuz one of the conditions didn't meet the requirements

// console.log(10 == "10" || 10 > 80 || 10 > 50); // true , cuz one of the requirements are completed

/*
  Control Flow
  - if
  - else if
  - else

  if (Condition) {
    // Block Of Code
  }

*/

// let price = 100;
// let discount = false;
// let discountAmount = 30;
// let country = "KSA";

// if (discount === true) {
//   price -= discountAmount; // price = price - discountAmount
// } else if (country === "Egypt") {
//   price -= 40;
// } else if (country === "Syria") {
//   price -= 50;
// } else {
//   price -= 10;
// }

// console.log(price);

// /*
//   Nested If
// */

// let price = 100;
// let discount = false;
// let discountAmount = 30;
// let country = "Egypt";
// let student = true;

// if (discount === true) {
//   price -= discountAmount;
// } else if (country === "Egypt") {
//   if (student === true) {
//     price -= discountAmount + 30;
//   } else {
//     price -= discountAmount + 10;
//   }
// } else {
//   price -= 10;
// }

// console.log(price);

// /*
//   Conditional (Ternary) Operator   -> short if, used in short things but the normal nested if for more complex things
// */

// let theName = "Ahmed";
// let theGender = "male";
// let theAge = 20;
// if (theGender === "Male") {
//   console.log("Mr");
// } else {
//   console.log("Mrs");
// }

// // Condition ? If True : If False
// // Condition ? If True : Condition ? If True : Condition ? If True : If False

// theGender === "Male" ? console.log("Mr") : console.log("Mrs");

// let result = theGender === "Male" ? "Mr" : "Mrs"; // you can save the output of the condition in a variable

// document.write(result);

// console.log(theGender === "Male" ? "Mr" : "Mrs");

// console.log(`Hello ${theGender === "Male" ? "Mr" : "Mrs"} ${theName}`);

// theAge < 20
//   ? console.log("younger than 20")
//   : theAge >= 20 && theAge < 60
//   ? console.log("20 To 60")
//   : theAge >= 60
//   ? console.log("Older Than 60")
//   : console.log("Unknown");

/*
  Logical Or ||
  -- Null + Undefined + Any Falsy Value (0 , "")
  Nullish Coalescing Operator ??
  -- Null + Undefined
*/

// console.log(Boolean(100));
// console.log(Boolean(-100));
// console.log(Boolean(0));
// console.log(Boolean(""));
// console.log(Boolean(null));

// let price = "";

// console.log(`The Price Is ${price || 200}`); // output = The Price Is 200 , cuz 0 is a falsy value
// console.log(`The Price Is ${price ?? 200}`); // output = The Price Is 0 , cuz you use ?? (Nullish Coalescing Operator)

//
//
//

// /*
//   If Condition Challenge
// */

// let a = 10;

// if (a < 10) {
//   console.log(10);
// } else if (a >= 10 && a <= 40) {
//   console.log("10 To 40");
// } else if (a > 40) {
//   console.log("> 40");
// } else {
//   console.log("Unknown");
// }

// a < 10
//   ? console.log(10)
//   : a >= 10 && a <= 40
//   ? console.log("10 to 40")
//   : a > 40
//   ? console.log(">40")
//   : console.log(Unknown);

// //

// // Write Previous Condition With Ternary If Syntax

// let st = "Elzero Web School";

// if ((st.length * 2).toString() === "34") {
//   console.log("Good");
// }

// // W Position May Change
// if (st.charAt(st.indexOf("W")).toLowerCase() === "w") {
//   console.log("Good");
// }

// if (st !== "string") {
//   console.log("Good");
// }

// if (typeof st.length === "number") {
//   console.log("Good");
// }

// if (st.slice(0, 6).repeat(2) === "ElzeroElzero") {
//   console.log("Good");
// }

// let num11 = 10;
// let num22 = 30;
// let num33 = "30";

// if (num33 > num11 && typeof num33 !== typeof num22) {
//   console.log(
//     "30 Is Larger Than 10 And Type string Not The Same Type As number"
//   );
// } else if (num33 > num11 && num33 == num22 && num33 !== num22) {
//   console.log(
//     "30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number"
//   );
// } else if (
//   num33 != num11 &&
//   typeof num33 !== typeof num11 &&
//   typeof num33 !== typeof num22
// ) {
//   console.log(
//     "{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}"
//   );
// }

// if (((num33 > num11) && (typeof num33 !== typeof num22)) && ((num33 > num11) && (num33 == num22) && (num33 !== num22)) && ((num33 != num11) && (typeof num33 !== typeof num11) && (typeof num33 !== typeof num22)) ) {

//
//
//

// /*
//   Switch Statement
//   switch(expression) {
//     Case 1:
//       Code Block
//       break;
//     Case 2:
//       Code Block
//       break;
//     Default:
//       Code Block
//   }
//   - Default Ordering
//   - Multiple Match
//   - ===
// */

// let day = "A"; // the value of variable must be identical (same type and value ===) to the case to do the function of it

// switch (day) {
//   default:
//     console.log("Unknown Day");
//     break;
//   case 0:
//     console.log("Saturday");
//     break;
//   case 1:
//     console.log("Sunday");
//     break;
//   case 2:
//   case 3:
//     console.log("Monday");
//     break;
// }
// // we can add multiple cases and get the same block of code or same output value and then break

// // you can default any where on top or middle but better put it a the end AND don't forget the break after it unless it was the last thing
//
//
//

/*
  Switch Challenge
*/

// let job = "Manager";
// let salary = 0;

/*
if (job === "Manager") {
  salary = 8000;
} else if (job === "IT" || job === "Support") {
  salary = 6000;
} else if (job === "Developer" || job === "Designer") {
  salary = 7000;
} else {
  salary = 4000;
}
*/

// switch (job) {
//   case "Manager":
//     salary = 8000;
//     console.log(salary);
//     break;
//   case "IT":
//   case "Support":
//     salary = 6000;
//     console.log(salary);
//     break;
//   case "Developer":
//   case "Designer":
//     salary = 7000;
//     console.log(salary);
//     break;
//   default:
//     salary = 4000;
//     console.log(salary);
// }

/*
  If Challenge
*/

// let holidays = 0;
// let money = 0;

/*
switch (holidays) {
  case 0:
    money = 5000;
    console.log(`My Money is ${money}`);
    break;
  case 1:
  case 2:
    money = 3000;
    console.log(`My Money is ${money}`);
    break;
  case 3:
    money = 2000;
    console.log(`My Money is ${money}`);
    break;
  case 4:
    money = 1000;
    console.log(`My Money is ${money}`);
    break;
  case 5:
    money = 0;
    console.log(`My Money is ${money}`);
    break;
  default:
    money = 0;
    console.log(`My Money is ${money}`);
}
*/
/*
if (holidays === 0) {
  money = 5000;
  console.log(`My Money is ${money}`);
} else if (holidays === 1 || holidays === 2) {
  money = 3000;
  console.log(`My Money is ${money}`);
} else if (holidays === 3) {
  money = 2000;
  console.log(`My Money is ${money}`);
} else if (holidays === 4) {
  money = 1000;
  console.log(`My Money is ${money}`);
} else if (holidays === 5) {
  money = 0;
  console.log(`My Money is ${money}`);
} else {
  money = 0;
  console.log(`My Money is ${money}`);
}
*/
//
//
//

/*
  Arrays
  - Create Arrays [Two Methods] new Array() + []
  - Access Arrays Elements
  - Nested Arrays
  - Change Arrays Elements
  - Check For Array Array.isArray(arr);
*/
// let myFavoriteFoods = new Array("pizza", "ice cream", "salad"); // first way to create array

// console.log(myFavoriteFoods);

// let myFriends = ["Ahmed", "Mohamed", "Sayed", ["Marwan", "Ali"]]; // second way to create array

// console.log(`Hello ${myFriends[0]}`); // output = Hello Ahmed
// console.log(`Hello ${myFriends[2]}`); // output = Hello Mohamed
// console.log(`${myFriends[1][2]}`); // output = h  , cuz it mean index 2 of array element 2
// console.log(`Hello ${myFriends[3][1]}`); // output = Hello Ali
// console.log(`${myFriends[3][1][2]}`); // output = i

// console.log(myFriends);
// myFriends[1] = "Gamal"; // first type(write) index of array element you want to change then = new value
// console.log(myFriends);
// myFriends[3] = ["Sameh", "Ameer"]; // you can change element to a nested array or to a string
// console.log(myFriends);

// console.log(Array.isArray(myFriends)); // to check if the var is actually array
// //better than using type of cuz it will give you object

// console.log(myFriends.length); // output = 4

// console.log(myFriends[myFriends.length - 1]); // to access last array element

//
//

// /*
//   Array Methods
//   - Length
// */

// // Index Start From 0 [ 0, 1, 2, 3 ]

// let myFriends = ["Ahmed", "Mohamed", "Sayed", "Alaa"];

// myFriends[6] = "Gamal"; // cuz index 6 is not found so it will create it and also add two empty array elements and length will be 7

// // LENGTH is ahead by 1 over the INDEX

// myFriends[myFriends.length] = "Osama"; // will automatically add the new element at the end without calculating anything and without empty spaces

// myFriends[myFriends.length - 1] = "Hassan"; // by this way it will always update the last array element automatically

// myFriends.length = 10; // it will show only the number of array elements you want to print even if the actual array has more elements
// // if you put a length bigger than the elements it will show empty elements

// console.log(myFriends);

//
//
//

// /*
//   Arrays Methods [Adding And Removing]
//   - unshift("", "") Add Element To The First
//   - push("", "") Add Element To The End
//   - shift() Remove First Element From Array & can be stored in a variable
//   - pop() Remove Last Element From Array
// */

// let myFriends = ["Ahmed", "Mohamed", "Sayed", "Alaa"];

// console.log(myFriends);

// myFriends.unshift("Osama", "Nabil");

// console.log(myFriends);

// myFriends.push("Samah", "Eman");

// console.log(myFriends);

// let first = myFriends.shift(); // by this way you will remove the first array-element and store it in a variable

// console.log(myFriends);

// console.log(`First Name Is ${first}`);

// let last = myFriends.pop(); // by this way you will remove the last array-element and store it in a variable

// console.log(myFriends);

// console.log(`Last Name Is ${last}`);

// /*
//   Arrays Methods [Search]
//   - indexOf(Search Element, From Index [Opt])
//   - lastIndexOf(Search Element, From Index [Opt])
//   - includes(valueToFind, fromIndex [Opt]) [ES7]
// */

// let myFriends = ["Ahmed", "Mohamed", "Sayed", "Alaa", "Ahmed"];

// console.log(myFriends);

// console.log(myFriends.indexOf("Ahmed")); // output = 0 , it will get you index of first element you are searching for and not all the elements
// console.log(myFriends.indexOf("Ahmed", 2)); // it will start searching from index 2 , output = 4

// console.log(myFriends.lastIndexOf("Ahmed")); // output = 4 cuz he is searching from the last from the right then get you its index normally from the left
// console.log(myFriends.lastIndexOf("Ahmed", -2)); // output = 0 cuz he skipped the last Ahmed

// // if what you are searching for is not found the output is = -1

// console.log(myFriends.includes("Ahmed")); // output = true
// console.log(myFriends.includes("Ahmed", 2)); // output = true

// if (myFriends.lastIndexOf("Osama") === -1) {
//   console.log("Not Found");
// }
// // it means that if what i'm searching for is not found print Not Found

// console.log(myFriends.indexOf("Osama")); // output = -1
// console.log(myFriends.lastIndexOf("Osama")); // output = -1

///
//
//

// /*
//   Arrays Methods [Sort]
//   - sort(Function [Opt])
//   - reverse
// */

// let myFriends = [10, "Sayed", "Mohamed", "90", 9000, 100, 20, "10", -20, -10];

// console.log(myFriends);

// console.log(myFriends.sort()); // it just looks for the first character for example it will put 1000 before 20 cuz 2 is greater than 1

// console.log(myFriends.sort().reverse());

// /*
// console.log(myFriends.sort());

// console.log(myFriends.reverse());

// if you did write the code like this it will show you the reverse of the sorted array and not the original array
// */
//
//
//

// /*
//   Arrays Methods [Slicing]
//   - slice(Start [Opt], End [Opt] Not Including End)
//   --- slice() => All Array
//   --- If Start Is Undefined => 0
//   --- Negative Count From End
//   --- If End Is Undefined || > Indexes => Slice To The End Array.length
//   --- Return New Array AND doesn't modify the original array
//   - splice(Start [Mand], DeleteCount [Opt] [0 No Remove], The Items To Add [Opt])
//   --- If Negative => Start From The End
// */

// let myFriends = ["Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ameer"];
// console.log(myFriends);
// console.log(myFriends.slice());
// console.log(myFriends.slice(1));
// console.log(myFriends.slice(1, 3)); // will not take the index of 3 and will go back by one so output = Sayed , Ali
// console.log(myFriends.slice(-3)); // counts from right then go to right again output = Osama , Gamal , Ameer
// console.log(myFriends.slice(1, -2)); // output = Sayed , Ali , Osama ,,, at the end always -1 from the index you wrote so -2 - 1 = -3 so it will end at -3
// console.log(myFriends.slice(-4, -2)); // output =  Ali , Osama
// console.log(myFriends); // returns the same original array

// let H = myFriends.slice(-4, -2);
// console.log(H);

// // you can save the result of a slice in a variable and use it anywhere

// console.log(myFriends);

// myFriends.splice(0, 0, "Sameer", "Samara"); // it means i will start from index 0 and delete 0 elements
// //and add the two names in the beginning cuz you wrote start from index 0

// myFriends.splice(1, 2, "Sameer", "Samara"); // it means i will start from index 1 and delete 2 elements
// //and add the two names at index 1 cuz you wrote start from index 1

// myFriends.splice(-4, 2, "MOAZ"); // ['Ahmed', 'Sayed', 'MOAZ', 'Gamal', 'Ameer']

// console.log(myFriends);

// // The Splice actually modifies the original Array And doesn't create new array

//
//
//

// /*
//   Arrays Methods [Joining]
//   - concat(array, array) => Return A New Array , the original arrays are not modified
//   - join(Separator) => join all the array elements and separate them by a given symbol (default = comma)
// */

// let myFriends = ["Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ameer"];
// let myNewFriends = ["Samar", "Sameh"];
// let schoolFriends = ["Haytham", "Shady"];

// let allFriends0 = myFriends.concat(myNewFriends); // ['Ahmed', 'Sayed', 'Ali', 'Osama', 'Gamal', 'Ameer', 'Samar', 'Sameh']

// let allFriends1 = myFriends.concat(myNewFriends, schoolFriends); // ['Ahmed', 'Sayed', 'Ali', 'Osama', 'Gamal', 'Ameer', 'Samar', 'Sameh', 'Haytham', 'Shady']

// console.log(allFriends1);

// let allFriends = myFriends.concat(
//   myNewFriends,
//   schoolFriends,
//   "Gameel",
//   [1, 2]
// ); // ['Ahmed', 'Sayed', 'Ali', 'Osama', 'Gamal', 'Ameer', 'Samar', 'Sameh', 'Haytham', 'Shady', 'Gameel', 1, 2]

// // you can add a new element or a new array and all adds to the same order given

// console.log(allFriends);

// console.log(allFriends0.join()); // Ahmed,Sayed,Ali,Osama,Gamal,Ameer,Samar,Sameh
// console.log(allFriends0.join("")); // AhmedSayedAliOsamaGamalAmeerSamarSameh  , cuz u put the separator as empty
// console.log(allFriends0.join(" @ ")); // Ahmed @ Sayed @ Ali @ Osama @ Gamal @ Ameer @ Samar @ Sameh
// console.log(allFriends0.join("|")); // Ahmed|Sayed|Ali|Osama|Gamal|Ameer|Samar|Sameh  , no spaces
// console.log(allFriends0.join(" | ").toUpperCase()); // AHMED | SAYED | ALI | OSAMA | GAMAL | AMEER | SAMAR | SAMEH

//
//
//

// /*
//   Array Challenge
// */

// let zero = 0;

// let counter = 3;

// let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// // console.log(my.slice(zero, ++counter).reverse());

// console.log(my.slice(zero, ++counter).reverse()); // ["Osama", "Elham", "Mazero", "Ahmed"];

// console.log(my.slice(++zero, --counter).reverse()); // ["Elham", "Mazero"]

// my.push("Elzero");

// console.log(my.pop()); // "Elzero"

// console.log(my.pop().substr(-zero) + my[zero][my.length].toUpperCase()); // "rO"

//
//
//
//
//

// /*
//   Loop
//   - For
//   for ([1] [2] [3]) {
//     // Block Of Code
//   }
// */
// // 1) initialization
// // 2) condition
// // 3) action taken after the loop is finished

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// // the condition is i less than 10 and not equal to 10 cuz index start from 0 , length is higher by one than index
// // i++ means the action of adding 1 when the loop ended and condition is still not achieved

//
//
//
//

// /*
//   Loop
//   - Loop On Sequences
// */

// let myFriends = [1, 2, "Osama", "Ahmed", 3, 4, "Sayed", 6, "Ali"];

// let onlyNames = [];

// for (let i = 0; i < myFriends.length; i++) {
//   if (typeof myFriends[i] === "string") {
//     onlyNames.push(myFriends[i]);
//   }
// }

// console.log(onlyNames);

// // console.log(myFriends[0]);
// // console.log(myFriends[1]);
// // console.log(myFriends[2]);
// // console.log(myFriends[3]);
// // console.log(myFriends[4]);

// // for (let i = 0; i < myFriends.length; i++) {
// //   console.log(myFriends[i]);
// // }

// /*
//   Loop
//   - Nested Loops
// */

// let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor"];

// let colors = ["Red", "Green", "Black"];

// let models = [2020, 2021];

// for (let i = 0; i < products.length; i++) {
//   console.log(`# ${products[i]}`);
//   console.log("#".repeat(15));
//   console.log("Colors: ");
//   for (let j = 0; j < colors.length; j++) {
//     console.log(`- ${colors[j]}`);
//   }
//   console.log("Models: ");
//   for (let k = 0; k < models.length; k++) {
//     console.log(`- ${models[k]}`);
//   }
// }

//
//
//
//

// /*
//   Loop Control
//   - Break
//   - Continue
//   - Label  = identifier
// */

// let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor"];

// let colors = ["Red", "Green", "Black"];

// mainLoop: for (let i = 0; i < products.length; i++) {
//   console.log(products[i]);
//   nestedLoop: for (let j = 0; j < colors.length; j++) {
//     console.log(`- ${colors[j]}`);
//     if (colors[j] === "Green") {
//       break mainLoop;
//     }
//   }
// } // here it will break the main loop when color green of first product is reached so it will only print:
// /*
// Keyboard
// - Red
// - Green
// */
// // you can say break nestedLoop so it will print all products with all colors except Black

// for (let i = 0; i < products.length; i++) {
//   console.log(products[i]);
//   if (products[i] === "pen") {
//     break;
//   }
// } // this means that print until pen is reached, the order of the if condition matters alot

// //
// //

// for (let i = 0; i < products.length; i++) {
//   if (typeof products[i] === "number") {
//     continue;
//   }
//   console.log(products[i]);
// } // this means that if the array has a number skip this loop so numbers will be printed also order of if condition matters

//
//
//
//
//

// /*
//   Loop For Advanced Example
// */

// let products = ["Keyboard", "Mouse", "Pen", "iPad", "Monitor", "iPhone"];
// let i = 0;

// for (;;) {
//   console.log(products[i]);
//   i++;
//   if (i === products.length) break;
// }

// //
// //

// /*
// for (;;) {
//   console.log(products[i]);
//   i += 2;
//   if (i === products.length) {
//     break;
//   }
// }
// */
// // you can use i += 2 and any other thing not only i++
// // break can ve written between Two curly braces or directly after if without curly braces
// // leave two empty semicolons if you don't want to right anything inside

//
//
//
//
//

/*
  Products Practice
*/

// let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];
// let colors = ["Red", "Green", "Blue"];
// let showCount = 5;

// document.write(`<h1>Show ${showCount} Products</h1>`);

// for (let i = 0; i < showCount; i++) {
//   document.write(`<div>`);
//   document.write(`<h3>[${i + 1}] ${products[i]}</h3>`);
//   for (let j = 0; j < colors.length; j++) {
//     document.write(`<p>${colors[j]}</p>`);
//   }
//   document.write(`<p>${colors.join(" | ")}</p>`);
//   document.write(`</div>`);
// }

//
//
///
///
///

// /*
//   Loop
//   - While  = it means while the condition is true continue looping and once the condition is false it breaks
// */

// let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];

// let index = 0;

// while (index < products.length) {
//   console.log(products[index]);
//   index += 1;
// }

// //
// /*
// while (index < 10) {
//   console.log(index);
//   index += 1;
//   if (index === 3) {
//     break;
//   }
// }
// */

//
//
//

// /*
//   Loop
//   - Do / While   = it will do the first block of code even if the condition is false
// */

// let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];

// let i = 0;

// do {
//   console.log(i);
//   i++;
// } while (i < products.length);

//
//
//
//
//

/*
  Loop Challenge
*/

// let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];

// let myEmployees = [
//   "Amgad",
//   "Samah",
//   "Ameer",
//   "Omar",
//   "Othman",
//   "Amany",
//   "Samia",
//   "Anwar",
// ];
// let x = 0;
// let count = 0;

// for (; x < myAdmins.length; x++) {
//   if (myAdmins[x] === "Stop") {
//     break;
//   }
// }
// document.write(`<div>We Have ${x} Admins</div>`);

// for (let i = 0; i < x; i++) {
//   document.write(`<hr>`);
//   document.write(`<div>`);
//   document.write(`The Admins For Team ${i + 1} Is ${myAdmins[i]}`);
//   document.write(`<h3>Team Members: </h3>`);
//   for (let j = 0; j < myEmployees.length; j++) {
//     if (myEmployees[j][0] === myAdmins[i][0]) {
//       document.write(`<p>- ${++count} ${myEmployees[j]}</p>`);
//     }
//   }
//   count = 0;
//   document.write(`</div>`);
// }
/*
Loop Challenge
*/

// let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
// // let myAdmins = ["Ahmed", "Osama", "Sayed", "Moaz", "Stop", "Samera"];
// let myEmployees = [
//   "Amgad",
//   "Samah",
//   "Ameer",
//   "Omar",
//   "Othman",
//   "Amany",
//   "Samia",
//   "Anwar",
// ];
// let x = 0;
// let count1 = 1;
// let count2 = 1;
// let count3 = 1;

// for (; x < myAdmins.length; x++) {
//   if (myAdmins[x] === "Stop") {
//     break;
//   }
// }
// document.write(`<div>We Have ${x} Admins</div>`);

// for (let i = 0; i < x; i++) {
//   document.write(`<hr>`);
//   document.write(`<div>`);
//   document.write(`The Admins For Team ${i + 1} Is ${myAdmins[i]}`);
//   document.write(`<h3>Team Members: </h3>`);
//   for (let j = 0; j < myEmployees.length; j++) {
//     if (myAdmins[i].startsWith("A") && myEmployees[j].startsWith("A")) {
//       document.write(`<p>- ${count1} ${myEmployees[j]}</p>`);
//       count1++;
//     } else if (myAdmins[i].startsWith("O") && myEmployees[j].startsWith("O")) {
//       document.write(`<p>- ${count2} ${myEmployees[j]}</p>`);
//       count2++;
//     } else if (myAdmins[i].startsWith("S") && myEmployees[j].startsWith("S")) {
//       document.write(`<p>- ${count3} ${myEmployees[j]}</p>`);
//       count3++;
//     }
//   }
//   document.write(`</div>`);
// }

//
//
//
//
//

// let myAdmins = ["Ahmed", "Osama", "Sayed","Stop", "Samera"];
// let myEmployees = [
//   "Amgad",
//   "Samah",
//   "Ameer",
//   "Omar",
//   "Othman",
//   "Amany",
//   "Samia",
//   "Abo",
// ];
// let counter = 0;

// myAdmins.length = myAdmins.indexOf("Stop");
// document.write(`<div>We have ${myAdmins.length} admins</div> <hr>`);

// for (let j = 0; j < myAdmins.length; j++) {
//   document.write(`<div>The admin for Team ${j + 1} is ${myAdmins[j]} </div> `);
//   document.write(`<h3>Team members :</h3> `);

//   for (let k = 0; k < myEmployees.length; k++) {
//     if (myAdmins[j][0] === myEmployees[k][0])
//       document.write(`<div>-${++counter} ${myEmployees[k]} </div>`);
//   }
//   counter = 0;
//   document.write(` <hr>`);
// }
