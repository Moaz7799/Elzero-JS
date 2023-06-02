// /*
//   - Set Data Type
//   Syntax: new Set(Iterable)
//   -- Object To Store Unique Values
//   -- Cannot Access Elements By Index , not like array
//   -- it helps you to remove any duplicate in your array, instead of using map, filter, reduce, for loop

//   Properties:
//   - size  = like length
//   .size = .length   => to get the size of the object

//   Methods:
//   - add
//   - delete
//   - clear
//   - has
// */

// let myData = [1, 1, 1, 2, 3, "A"];
// // let myUniqueData = new Set([1, 1, 1, 2, 3]); // {1, 2, 3}
// // let myUniqueData = new Set(myData); // {1, 2, 3}
// // let myUniqueData = new Set().add(1).add(1).add(1).add(2).add(3); // {1, 2, 3}
// let myUniqueData = new Set();

// myUniqueData.add(1).add(1).add(1);
// myUniqueData.add(2).add(3).add("A");

// console.log(`Is Set Has => A ${myUniqueData.has("a".toUpperCase())}`); // true

// console.log(myData);
// console.log(myUniqueData);

// console.log(myUniqueData.size);

// console.log(myData[0]);
// console.log(myUniqueData[0]);

// // myUniqueData.delete(2);
// console.log(myUniqueData.delete(2)); // returns boolean true or false, here it returns true cuz 2 is in the set and can be removed, this can be used as a scanner for things in set it is there in the set it returns true and remove it, if not it will return false and remove nothing

// console.log(myUniqueData);
// console.log(myUniqueData.size);

// myUniqueData.clear(); // removes everything from the data type set

// console.log(myUniqueData);
// console.log(myUniqueData.size);

/////////////////////////////////////////////////////////////////////////////////////////

// /*
//   - Set vs WeakSet
//   "
//     The WeakSet is weak,
//     meaning references to objects in a WeakSet are held weakly.
//     If no other references to an object stored in the WeakSet exist,
//     those objects can be garbage collected.
//   "
//   --
//   Set     => Can Store Any Data Values, like arrays
//   WeakSet => Collection Of Objects Only, only objects no arrays
//   --
//   Set     => Have Size Property
//   WeakSet => Does Not Have Size Property
//   --
//   Set     => Have Keys, Values, Entries
//   WeakSet => Does Not Have clear, Keys, Values And Entries
//   --
//   Set     => Can Use forEach
//   WeakSet => Cannot Use forEach

//   Usage: Store objects and removes them once they become inaccessible

//   --The WeakSet object lets you store weakly held objects in a collection

//   - search for => weakset use cases
// */

// // Type Of Data

// let mySet = new Set([1, 1, 1, 2, 3, "A", "A"]);

// console.log(mySet); // Set(4) {1, 2, 3, 'A'}

// // Size
// console.log(`Size Of Elements Inside Set Is: ${mySet.size}`);

// // Values + Keys [Alias For Values]
// let iterator = mySet.keys(); // .keys()  is alias for .values() , same thing

// console.log(iterator); // SetIterator {1, 2, 3, 'A'}

// console.log(iterator.next().value); // 1
// console.log(iterator.next().value); // 2
// console.log(iterator.next().value); // 3
// console.log(iterator.next().value); // A
// // all this has done: false cuz the looping is still going on and didn't finish, when you go next there is no more values so this mean loop finished and done will be true
// console.log(iterator.next()); // {value: undefined, done: true}

// // forEach

// mySet.forEach((el) => console.log(el));

// console.log("#".repeat(20));

// // Type Of Data

// let myws = new WeakSet([{ A: 1, B: 2 }]);

// let neww = {};

// console.log(myws.add(neww));

// console.log(myws.has(neww)); // true

/////////////////////////////////////////////////////////////////////////////////////////

/*
  - Map Data Type
  Syntax: new Map(Iterable With Key/Value)
  -- Map vs Object
  --
  ------ Map => Does Not Contain Key By Default
  ------ Object => Has Default Keys
  --
  ------ Map => Key Can Be Anything [Function, Object, boolean, number, string, Any Primitive Data Types]
  ------ Object => String Or Symbol
  --
  ------ Map => Ordered By Insertion
  ------ Object => Not 100% Till Now
  --
  ------ Map => Get Items By Size
  ------ Object => Need To Do Manually
  --
  ------ Map => Can Be Directly Iterated (Looped)
  ------ Object => Not Directly And Need To Use Object.keys() And So On
  --
  ------ Map => Better Performance When Add Or Remove Data
  ------ Object => Low Performance When Comparing To Map
*/

// let myObject = {}; // Prototype: Object
// let myEmptyObject = Object.create(null); // no properties
// let myMap = new Map(); // no properties

// console.log(myObject);
// console.log(myEmptyObject);
// console.log(myMap);

// let myNewObject = {
//   10: "Number",
//   10: "String",
// };

// console.log(myNewObject[10]); // output = String , cuz key 10 has been updated so you will get the last updated value
// // in normal object if one key is number and the other key is the same number but as a string, the second key will update on the first key and the whole object will only have one last key from them

// let myNewMap = new Map();
// myNewMap.set(10, "Number");
// myNewMap.set("10", "String");
// myNewMap.set(true, "Boolean");
// myNewMap.set({ a: 1, b: 2 }, "Object");
// myNewMap.set(function doSomething() {}, "Function");

// console.log(myNewMap.get(10)); // Number
// console.log(myNewMap.get("10")); // String

// console.log("####");

// console.log(myNewObject); // {10: 'String'}

// console.log(myNewMap); // Map(5) {10 => 'Number', '10' => 'String', true => 'Boolean', {…} => 'Object', ƒ => 'Function'}

// /*
//   ------ Map => Get Items By Size
//   ------ Object => Need To Do Manually
// */

// // Sample object
// var myObj = {
//   make: "Ferrari",
//   model: "Portofino",
//   fuel: "Petrol",
//   year: 2018,
// };

// // Getting object length
// var size = Object.keys(myObj).length;
// console.log(size); // Prints: 4

// console.log(Object.entries(myObj)); // Prints: [Array(2), Array(2), Array(2), Array(2)]1
// console.log(Object.entries(myObj)[1][0]); // Prints: model
// console.log(Object.entries(myObj)[1][1]); // Prints: Portofino

/////////////////////////////////////////////////////////////////////////////////////////

// /*
//   - Map Data Type
//   Methods
//   --- set
//   --- get
//   --- delete
//   --- clear
//   --- has

//   Properties
//   --- size
// */

// let myMap = new Map([
//   [10, "Number"],
//   ["Name", "String"],
//   [false, "Boolean"],
// ]);

// // myMap.set(10, "Number");
// // myMap.set("Name", "String");

// console.log(myMap);

// console.log(myMap.get(10));
// console.log(myMap.get("Name"));
// console.log(myMap.get(false));

// console.log("####");

// console.log(myMap.has("Name")); // true

// console.log("####");

// console.log(myMap.size); // 3

// console.log(myMap.delete("Name")); // true, cuz it found that key and successfully deleted it

// console.log(myMap.size); // 2

// myMap.clear();

// console.log(myMap.size); // 0

/////////////////////////////////////////////////////////////////////////////////////////

// /*
//   - Map vs WeakMap
//   "
//     WeakMap Allows Garbage Collector To Do Its Task But Not Map.

//     remove the thing with no reference from the memory
//   "
//   --
//   Map     => Key Can Be Anything
//   WeakMap => Key Can Be Object Only
//   --
// */

// let mapUser = { theName: "Elzero" };

// let myMap = new Map();

// myMap.set(mapUser, "Object Value");

// console.log(myMap); // {{…} => 'Object Value'}

// mapUser = null; // Override The Reference

// console.log(myMap); // {{…} => 'Object Value'} , same thing after making mapUser = null cuz it is already stored in the map

// console.log("#".repeat(20));

// let wMapUser = { theName: "Elzero" };

// let myWeakMap = new WeakMap();

// myWeakMap.set(wMapUser, "Object Value");

// wMapUser = null; // Override The Reference

// console.log(myWeakMap); // sometimes it will actually remove the object from the weak map according to the memory

/////////////////////////////////////////////////////////////////////////////////////////

// /*
//   Array Methods
//   - Array.from(Iterable, MapFunc, This)
//   --- Variable
//   --- String Numbers
//   --- Set
//   --- Using The Map Function
//   --- Arrow Function
//   --- Shorten The Method + Use arguments
// */

// console.log(Array.from("Osama")); // ['O', 's', 'a', 'm', 'a']
// console.log(
//   Array.from("12345", function (n) {
//     return +n + +n;
//   })
// ); // [2, 4, 6, 8, 10]
// console.log(Array.from("12345", (n) => +n + +n)); // [2, 4, 6, 8, 10]

// let myArray = [1, 1, 1, 2, 3, 4];

// let mySet = new Set(myArray);

// console.log(Array.from(mySet)); // [1, 2, 3, 4]

// // console.log([...new Set(myArray)]); // Future

// function af() {
//   return Array.from(arguments);
// }

// let fn = function () {
//   console.log(1);
// };

// let obj = {
//   name: "moaz",
//   age: 18,
// };

// console.log(af("Osama", "Ahmed", "sayed", 1, 2, 3, myArray, fn, true, obj));
// // ['Osama', 'Ahmed', 'sayed', 1, 2, 3, Array(6), ƒ, true, {…}]

/////////////////////////////////////////////////////////////////////////////////////////

// /*
//   Array Methods
//   - Array.copyWithin(Target, Start => Optional, End => Optional)
//   "Copy Part Of An Array To Another Location in The Same Array"
//   -- Any Negative Value Will Count From The End
//   -- Target
//   ---- Index To Copy Part To
//   ---- If At Or Greater Than Array Length Nothing Will Be Copied
//   -- Start
//   ---- Index To Start Copying From
//   ---- If Ommited = Start From Index 0
//   -- End
//   ---- Index To End Copying From
//   ---- Not Including End
//   ---- If Ommited = Reach The End

//   --- ARRAY LENGTH WILL STAY THE SAME
// */

// let myArray = [10, 20, 30, 40, 50, "A", "B"];

// // myArray.copyWithin(3); // [10, 20, 30, 10, 20, 30, 40]

// // myArray.copyWithin(4, 6); // [10, 20, 30, 40, "B", "A", "B"]

// // myArray.copyWithin(4, -1); // [10, 20, 30, 40, "B", "A", "B"]
// // myArray.copyWithin(-3, -1); // [10, 20, 30, 40, "B", "A", "B"]

// // myArray.copyWithin(1, -2); // [10, "A", "B", 40, 50, "A", "B"]
// // myArray.copyWithin(-6, -2); // [10, "A", "B", 40, 50, "A", "B"]

// // myArray.copyWithin(1, -2, -1); // [10, "A", 30, 40, 50, "A", "B"]
// // myArray.copyWithin(1, 5, 6); // [10, "A", 30, 40, 50, "A", "B"]

// myArray.copyWithin(0, 1); // [10, "A", 30, 40, 50, "A", "B"]

// console.log(myArray);

/////////////////////////////////////////////////////////////////////////////////////////

// /*
//   Array Methods
//   - Array.some(CallbackFunc(Element, Index, Array), This Argument)
//   --- CallbackFunc => Function To Run On Every Element On The Given Array
//   ------ Element => The Current Element To Process
//   ------ Index => Index Of Current Element
//   ------ Array => The Current Array Working With
//   --- This Argument => Value To Use As This When Executing CallbackFunc
//   --
//   Using
//   - Check if Element Exists In Array
//   - Check If Number In Range
// */

// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let myNumber = 10;

// // let check = nums.some(function (e) {
// //   console.log("Test");
// //   return e > 5;
// // });

// let check = nums.some(function (e) {
//   return e > this;
// }, myNumber);

// // let check = nums.some((e) => e > 5); // arrow function

// console.log(check); // false

// function checkValues(arr, val) {
//   return arr.some(function (e) {
//     return e === val;
//   });
// }

// console.log(checkValues(nums, 20)); // false
// console.log(checkValues(nums, 5)); // true

// let range = {
//   min: 10,
//   max: 20,
// };

// let checkNumberInRange = nums.some(function (e) {
//   // console.log(this.min); // 10
//   // console.log(this.max); // 20
//   return e >= this.min && e <= this.max;
// }, range);

// console.log(checkNumberInRange); // true

/////////////////////////////////////////////////////////////////////////////////////////

/*
  Array Methods
  - Array.every(CallbackFunc(Element, Index, Array), This Argument)
  --- CallbackFunc => Function To Run On Every Element On The Given Array
  ------ Element => The Current Element To Process
  ------ Index => Index Of Current Element
  ------ Array => The Current Array Working With
  --- This Argument => Value To Use As This When Executing CallbackFunc
  --
*/

// const locations = {
//   20: "Place 1",
//   30: "Place 2",
//   50: "Place 3",
//   40: "Place 4",
// };

// let mainLocation = 15;

// let locationsArray = Object.keys(locations);

// console.log(locationsArray);

// let locationArrayNumbers = locationsArray.map((n) => +n);

// console.log(locationArrayNumbers);

// let check = locationArrayNumbers.every(function (e) {
//   return e > this;
// }, mainLocation);

// console.log(check);

/////////////////////////////////////////////////////////////////////////////////////////

// /*
//   Spread Operator => ...Iterable
//   "Allow Iterable To Expand In Place"
// */

// // Spread With String => Expand String

// console.log("Osama");
// console.log(..."Osama");
// console.log([..."Osama"]);

// // Concatenate Arrays

// let myArray1 = [1, 2, 3];
// let myArray2 = [4, 5, 6];

// let allArrays = [...myArray1, ...myArray2];
// console.log(allArrays);

// // Copy Array

// let copiedArray = [...myArray1];
// console.log(copiedArray);

// // Push Inside Array

// let allFriends = ["Osama", "Ahmed", "Sayed"];
// let thisYearFriends = ["Sameh", "Mahmoud"];

// allFriends.push(...thisYearFriends);

// console.log(allFriends);

// // Use With Math Object

// let myNums = [10, 20, -100, 100, 1000, 500];
// console.log(Math.max(...myNums));

// // Spread With Objects => Merge Objects

// let objOne = {
//   a: 1,
//   b: 2,
// };
// let objTwo = {
//   c: 3,
//   d: 4,
// };

// console.log({ ...objOne, ...objTwo, e: 5 });

/////////////////////////////////////////////////////////////////////////////////////////

// /*
//   Regular Expression
//   - Email
//   - IP
//   - Phone
//   - URL
// */

// let str1 = '10 20 100 1000 5000';
// let str2 = 'Os1 Os12 Os123 Os123Os Os12312Os123';

// let invalidEmail = 'Osama@@@gmail....com';
// let validEmail = 'o@nn.sa';

// let ip = '192.168.2.1'; // IPv4

// let url = 'elzero.org';
// let url = 'elzero.org/';
// let url = 'http://elzero.org/';
// let url = 'http://www.elzero.org/';
// let url = 'https://.elzero.org/';
// let url = 'https://www.elzero.org/';
// let url = 'https://www.elzero.org/?facebookid=asdasdasd';

/////////////////////////////////////////////////////////////////////////////////////////

/*
  Regular Expression

  Syntax
  /pattern/modifier(s);
  new RegExp("pattern", "modifier(s)")  // better don't use it instead use the normal way

  Modifiers => Flags
  i => case-insensitive
  g => global  // returns an array
  m => Multilines

  Search Methods
  - match(Pattern)

  Match
  -- Matches A String Against a Regular Expression Pattern
  -- Returns An Array With The Matches
  -- Returns null If No Match Is Found.
*/

// let myString = "Hello Elzero  Web School I Love elzero";

// let regex = /elzero/;

// console.log(myString.match(regex)); // ['elzero', index: 13, input: 'Hello Elzero elzero Web School I Love elzero', groups: undefined]
// console.log(myString.match(regex)[0]); // elzero
// console.log(myString.match(regex).index); // 6
// console.log(myString.match(regex).groups); // undefined
// console.log(myString.match(regex).input); // Hello Elzero elzero Web School I Love elzero
// console.log(myString.match(regex).length); // 1

// let test = new RegExp("Elzero", "ig");

// console.log(myString.match(test)); // ['Elzero', 'elzero']

/////////////////////////////////////////////////////////////////////////////////////////

// /*
//   Regular Expression

//   Ranges

//   - Part 1
//   (X|Y) => X Or Y
//   [0-9] => 0 To 9
//   [^0-9] => Any Character Not 0 To 9
//   Practice

//   - Part 2
//   [a-z]
//   [^a-z]
//   [A-Z]
//   [^A-Z]
//   [abc]
//   [^abc]

// */

// let tld = "Com Net Org Info Code Io";
// let tldRe = /(info|org|io)/ig; // will search for one of these words
// console.log(tld.match(tldRe));

// let nums = "12345678910";
// let numsRe = /[0-2]/g;
// console.log(nums.match(numsRe));

// let notNums = "12345678910";
// let notNsRe = /[^0-2]/g;
// console.log(notNums.match(notNsRe));

// let specialNums = "1!2@3#4$5%678910";
// let specialNumsRe = /[^0-9]/g;
// console.log(specialNums.match(specialNumsRe));

// let practice = "Os1 Os1Os Os2 Os8 Os8Os";
// let practiceRe = /Os[5-9]Os/g
// console.log(practice.match(practiceRe));

/////////////////////////////////////////////////////////////////////////////////////////

// /*
//   Regular Expression

//   Ranges

//   - Part 1
//   (X|Y) => X Or Y
//   [0-9] => 0 To 9
//   [^0-9] => Any Character Not 0 To 9
//   Practice

//   - Part 2
//   [a-z]
//   [^a-z]
//   [A-Z]
//   [^A-Z]
//   [abc]
//   [^abc]

// */

// let myString = "AaBbcdefG123!234%^&*";
// let atozSmall = /[a-z]/g;
// let NotAtozSmall = /[^a-z]/g;
// let atozCapital = /[A-Z]/g;
// let NotAtozCapital = /[^A-Z]/g;
// let aAndcAnde = /[ace]/g;
// let NotaAndcAnde = /[^ace]/g;
// let lettersCapsAndSmall = /[a-zA-Z]/g;
// let lettersCapsAndSmall3 = /[a-z]/gi;
// let numsAndSpecials = /[^a-zA-Z]/g;
// let specials = /[^a-zA-Z0-9]/g;
// console.log(myString.match(atozSmall)); // ['a', 'b', 'c', 'd', 'e', 'f']
// console.log(myString.match(NotAtozSmall)); // ['A', 'B', 'G', '1', '2', '3', '!', '2', '3', '4', '%', '^', '&', '*']
// console.log(myString.match(atozCapital)); // ['A', 'B', 'G']
// console.log(myString.match(NotAtozCapital)); // ['a', 'b', 'c', 'd', 'e', 'f', '1', '2', '3', '!', '2', '3', '4', '%', '^', '&', '*']
// console.log(myString.match(aAndcAnde)); // ['a', 'c', 'e']
// console.log(myString.match(NotaAndcAnde)); //  ['A', 'B', 'b', 'd', 'f', 'G', '1', '2', '3', '!', '2', '3', '4', '%', '^', '&', '*']
// console.log(myString.match(lettersCapsAndSmall)); //  ['A', 'a', 'B', 'b', 'c', 'd', 'e', 'f', 'G']
// console.log(myString.match(lettersCapsAndSmall3)); // same as above ['A', 'a', 'B', 'b', 'c', 'd', 'e', 'f', 'G']
// console.log(myString.match(numsAndSpecials)); // ['1', '2', '3', '!', '2', '3', '4', '%', '^', '&', '*']
// console.log(myString.match(specials)); //  ['!', '%', '^', '&', '*']

// /////////////////////////////////////////////////////////////////////////////////////////

// /*
//   Regular Expression
//   Character Classes
//   . => matches any character, except newline or other line terminators.
//   \w => matches word characters. [a-z, A-Z, 0-9 And Underscore]
//   \W => matches Non word characters // opposite to \w
//   \d => matches digits from 0 to 9.
//   \D => matches non-digit characters.
//   \s => matches whitespace character.
//   \S => matches non whitespace character.
// */

// let email = "O@@@g...com O@g.com O@g.net A@Y.com O-g.com o@s.org 1@1.com";
// let dot = /./g;
// let word = /\w/g;
// let valid = /\w@\w.(com|net)/g;
// console.log(email.match(dot)); // ['O', '@', '@', '@', 'g', '.', '.', '.', 'c', 'o', 'm', ' ', 'O', '@', 'g', '.', 'c', 'o', 'm', ' ', 'O', '@', 'g', '.', 'n', 'e', 't', ' ', 'A', '@', 'Y', '.', 'c', 'o', 'm', ' ', 'O', '-', 'g', '.', 'c', 'o', 'm', ' ', 'o', '@', 's', '.', 'o', 'r', 'g', ' ', '1', '@', '1', '.', 'c', 'o', 'm']
// console.log(email.match(word)); // ['O', 'g', 'c', 'o', 'm', 'O', 'g', 'c', 'o', 'm', 'O', 'g', 'n', 'e', 't', 'A', 'Y', 'c', 'o', 'm', 'O', 'g', 'c', 'o', 'm', 'o', 's', 'o', 'r', 'g', '1', '1', 'c', 'o', 'm']
// console.log(email.match(valid)); // ['O@g.com', 'O@g.net', 'A@Y.com', '1@1.com']

// /////////////////////////////////////////////////////////////////////////////////////////

// /*
//   Regular Expression
//   Character Classes
//   \b => matches at the beginning or end of a word.
//   \B => matches NOT at the beginning/end of a word.

//   Test Method
//   pattern.test(input)

//   *search about spaces classes*
// */

// let names = "Sayed 1Spam 2Spam 3Spam Spam4 Spam5 Osama Ahmed Aspamo";
// let re = /(\bspam|spam\b)/gi;
// console.log(names.match(re)); //  ['Spam', 'Spam', 'Spam', 'Spam', 'Spam']

// console.log(re.test(names)); // true
// console.log(/(\bspam|spam\b)/gi.test("Osama")); // false
// console.log(/(\bspam|spam\b)/gi.test("1Spam")); // true
// console.log(/(\bspam|spam\b)/gi.test("Spam1")); // true

// /////////////////////////////////////////////////////////////////////////////////////////

// /*
//   Regular Expression

//   Quantifiers
//   n+    => One Or More
//   n*    => zero or more
//   n?    => zero or one
// */

// let mails = "o@nn.sa osama@gmail.com elzero@gmail.net osama@mail.ru"; // All Emails
// // let mailsRe = /\w+@\w+.(com|net)/ig;
// let mailsRe = /\w+@\w+.\w+/gi;
// console.log(mails.match(mailsRe)); // ['o@nn.sa', 'osama@gmail.com', 'elzero@gmail.net', 'osama@mail.ru']

// let nums = "0110 10 150 05120 0560 350 00"; // 0 Numbers Or No 0
// let numsRe = /0\d*0/gi;
// console.log(nums.match(numsRe)); // ['0110', '05120', '0560', '00']

// let urls = "https://google.com http://www.website.net web.com"; // http + https
// let urlsRe = /(https?:\/\/)?(www.)?\w+.\w+/gi;
// console.log(urls.match(urlsRe)); // ['https://google.com', 'http://www.website.net', 'web.com']

// /////////////////////////////////////////////////////////////////////////////////////////

// /*
//   Regular Expression

//   Quantifiers
//   n{x}   => Number of
//   n{x,y} => Range
//   n{x,}  => At Least x
// */

// let serials = "S100S S3000S S50000S S950000S";

// console.log(serials.match(/s\d{3}s/gi)); // S[Three Number]S // ['S100S']
// console.log(serials.match(/s\d{4,5}s/gi)); // S[Four Or Five Number]S // ['S3000S', 'S50000S']
// console.log(serials.match(/s\d{4,}s/gi)); // S[At Least Four]S // ['S3000S', 'S50000S', 'S950000S']

// /////////////////////////////////////////////////////////////////////////////////////////

// /*
//   Regular Expression

//   Quantifiers
//   $  => End With Something
//   ^  => Start With Something
//   ?= => Followed By Something
//   ?! => Not Followed By Something
// */

// let myString = "We Love Programming";
// let names = "1OsamaZ 2AhmedZ 3Mohammed 4MoustafaZ 5GamalZ";

// console.log(/ing$/gi.test(myString));
// console.log(/^we/gi.test(myString));
// console.log(/lz$/gi.test(names));
// console.log(/^\d/gi.test(names));

// console.log(names.match(/\d\w{5}(?=Z)/gi)); // ['1Osama', '2Ahmed', '5Gamal']
// console.log(names.match(/\d\w{8}(?!Z)/gi)); // ['3Mohammed']

// /////////////////////////////////////////////////////////////////////////////////////////

// /*
//   Regular Expression

//   - replace
//   - replaceAll
// */

// let txt = "We Love Programming And @ Because @ Is Amazing";
// console.log(txt.replace("@", "JavaScript"));
// console.log(txt.replaceAll("@", "JavaScript"));
// let re = /@/ig;
// console.log(txt.replaceAll(re, "JavaScript"));
// console.log(txt.replaceAll(/@/ig, "JavaScript"));

// /////////////////////////////////////////////////////////////////////////////////////////

// /*
//   Regular Expression
//   - Input Form Validation Practice
// */

// document.getElementById("register").onsubmit = function () {
//   let phoneInput = document.getElementById("phone").value;
//   let phoneRe = /\(\d{4}\)\s\d{3}-\d{4}/; // (1234) 567-8910
//   let validationResult = phoneRe.test(phoneInput);
//   if (validationResult === false) {
//     return false;
//   }
//   return true;
// };

/*
  Regular Expression
  - Challenge
*/

// let url1 = "elzero.org";
// let url2 = "http://elzero.org";
// let url3 = "https://elzero.org";
// let url4 = "https://www.elzero.org";
// let url5 = "https://www.elzero.org:8080/articles.php?id=100&cat=topics";
// let url6 =
//   "https://www.youtube.com/watch?v=_n_oiZRqH_k&list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv&index=147&ab_channel=ElzeroWebSchool";

// let re =
//   /(https?:\/\/)?(www.)?\w+.\w{2,}(:\d+\/)?(\w+.\w+\?id=\w+\W*\w*=\w+)?(\w*\W*\d*\D*\d*\w*\W*\d*\D*\w*\W*\d*\D*\w*\W*\w*\W*\d*\D*\d*\w*\W*\d*\D*\w*\W*\d*\D*\w*\W*)?/g;
// console.log(url1.match(re));
// console.log(url2.match(re));
// console.log(url3.match(re));
// console.log(url4.match(re));
// console.log(url5.match(re));
// console.log(url6.match(re));
// console.log(url7.match(re));

// /*
// let re =
//   /(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;
// */

// /////////////////////////////////////////////////////////////////////////////////////////

/*
  Constructor Function
*/

// function User(id, username, salary) {
//   this.i = id;
//   this.u = username;
//   this.s = salary + 1000;
// }

// let userOne = new User(100, "Elzero", 5000);
// let userTwo = new User(101, "Hassan", 6000);
// let userThree = new User(102, "Sayed", 7000);

// console.log(userOne.i);
// console.log(userOne.u);
// console.log(userOne.s);

// console.log(userTwo.i);
// console.log(userTwo.u);
// console.log(userTwo.s);

// console.log(userThree.i);
// console.log(userThree.u);
// console.log(userThree.s);

// const userOne = {
//   id: 100,
//   username: "Elzero",
//   salary: 5000,
// };

// const userTwo = {
//   id: 101,
//   username: "Hassan",
//   salary: 6000,
// };

// const userThree = {
//   id: 102,
//   username: "Sayed",
//   salary: 7000,
// };

// /////////////////////////////////////////////////////////////////////////////////////////

// /*
//   Constructor Function
//   - New Syntax

//   ctrl + .   => to make the constructor function according to ECMA 6
// */

// class User {
//   constructor(id, username, salary) {
//     this.i = id;
//     this.u = username;
//     this.s = salary + 1000;
//   }
// }

// let userOne = new User(100, "Elzero", 5000);

// console.log(userOne.i);
// console.log(userOne.u);
// console.log(userOne.s);

// console.log(userOne instanceof User); // true
// console.log(userOne.constructor === User); // true

// console.log(userOne.constructor);

// /////////////////////////////////////////////////////////////////////////////////////////

/*
  Constructor Function
  - Deal With Properties And Methods
*/

// class User {
//   constructor(id, username, salary) {
//     // Properties
//     this.i = id;
//     this.u = username || "Unknown";
//     this.s = salary < 6000 ? salary + 500 : salary;
//     this.msg = function () {
//       return `Hello ${this.u} Your Salary Is ${this.s}`;
//     };
//   }
//   // Methods
//   writeMsg() {
//     return `Hello ${this.u} Your Salary Is ${this.s}`;
//   }
// }

// let userOne = new User(100, "Elzero", 5000);
// let userTwo = new User(101, "", 6000);

// console.log(userOne.u); // Elzero
// console.log(userOne.s); // 5500
// console.log(userOne.msg()); // operation is executed, Hello Elzero Your Salary Is 5500
// console.log(userOne.writeMsg()); // operation is executed, Hello Elzero Your Salary Is 5500

// console.log(userTwo.u); // Unknown
// console.log(userTwo.s); // 6000
// console.log(userTwo.msg); // Native Code , function has no name
// console.log(userTwo.writeMsg); // Native Code , function has a name

// /////////////////////////////////////////////////////////////////////////////////////////

// /*
//   Constructor Function
//   - Update Properties
//   - Built In Constructors

//   ctrl + k + i   => to show the popup
// */

// class User {
//   constructor(id, username, salary) {
//     this.i = id;
//     this.u = username;
//     this.s = salary;
//   }
//   updateName(newName) {
//     this.u = newName;
//   }
// }

// let userOne = new User(100, "Elzero", 5000);

// console.log(userOne.u); // Elzero
// userOne.updateName("Osama");
// console.log(userOne.u); // Osama

// let strOne = "Elzero";
// let strTwo = new String("Elzero");

// console.log(typeof strOne); // string
// console.log(typeof strTwo); // object

// console.log(strOne instanceof String); // false
// console.log(strTwo instanceof String); // true

// console.log(strOne.constructor === String); // true
// console.log(strTwo.constructor === String); // true

// /////////////////////////////////////////////////////////////////////////////////////////

// /*
//   Class
//   - Static Properties And Methods
// */

// class User {
//   // Static Property = can be accessed by the class but not with the object
//   // Normal Property = can be accessed by the object but not with the class
//   static count = 0;

//   constructor(id, username, salary) {
//     this.i = id;
//     this.u = username;
//     this.s = salary;
//     User.count++;
//   }

//   // Static Methods
//   static sayHello() {
//     return `Hello From Class`;
//   }
//   static countMembers() {
//     return `${this.count} Members Created`;
//   }
// }

// let userOne = new User(100, "Elzero", 5000);
// let userTwo = new User(101, "Ahmed", 5000);
// let userThree = new User(102, "Sayed", 5000);

// console.log(userOne.u); // Elzero
// console.log(userTwo.u); // Ahmed
// console.log(userOne.count); // undefined  , because this property is static so the object can't access it, only the class can
// console.log(User.count); // 3
// console.log(User.sayHello()); // Hello From Class
// console.log(User.countMembers()); // 3 Members Created

// /////////////////////////////////////////////////////////////////////////////////////////

// /*
//   Class
//   - Inheritance

//   -- you can take whatever you want from the inherited class or parent, like you don't need to inherit
//   everything, you can choose what to inherit and what you don't want

//   -- methods are inherited automatically from parent class without typing anything new in the new class
// */

// // Parent Class
// class User {
//   constructor(id, username) {
//     this.i = id;
//     this.u = username;
//   }
//   sayHello() {
//     return `Hello ${this.u}`;
//   }
// }

// // Derived Class, obtained or gained
// class Admin extends User {
//   constructor(id, username, permissions) {
//     super(id, username);
//     this.p = permissions;
//   }
// }

// class Superman extends Admin {
//   constructor(id, username, permissions, ability) {
//     super(id, username, permissions);
//     this.a = ability;
//   }
// }

// let userOne = new User(100, "Elzero");
// let adminOne = new Admin(110, "Mahmoud", 1);
// let superOne = new Superman(120, "spiderman", 10, "Flying");

// console.log(userOne.u);
// console.log(userOne.sayHello());
// console.log("#".repeat(20));
// console.log(adminOne.i);
// console.log(adminOne.u);
// console.log(adminOne.p);
// console.log(adminOne.sayHello());
// console.log("#".repeat(20));
// console.log(superOne.i);
// console.log(superOne.u);
// console.log(superOne.p);
// console.log(superOne.a);
// console.log(superOne.sayHello()); // Hello spiderman

// /////////////////////////////////////////////////////////////////////////////////////////

/*
  Encapsulation  (2)
  - Class Fields Are Public By Default
  - Guards The Data Against Illegal Access.  by using this sign #
  - Helps To Achieve The Target Without Revealing Its Complex Details. hidden implementation
  - Will Reduce Human Errors.
  - Make The App More Flexible And Manageable.
  - Simplifies The App.

  as there is a private property there is also private method
*/

// class User {
//   // Private Property
//   #e;
//   #visa;
//   constructor(id, username, eSalary, visaNumber) {
//     this.i = id;
//     this.u = username;
//     this.#e = eSalary;
//     this.#visa = visaNumber;
//   }
//   getSalary() {
//     return parseInt(this.#e);
//   }
//   getLast3Digits() {
//     return this.#visa.toString().slice(-3);
//   }
// }

// class Admin extends User {
//   constructor(id, username, eSalary, visaNumber, ability) {
//     super(id, username, eSalary, visaNumber);
//     this.a = ability;
//   }
// }

// let adminOne = new Admin(120, "Moaz", 4000, 333444555, "destroy");

// console.log(adminOne.i); // 120
// console.log(adminOne.u); // Moaz
// console.log(adminOne.a); // destroy
// console.log(adminOne.getLast3Digits()); // 555
// console.log(adminOne.getSalary()); // 4000
// console.log(adminOne.e); // undefined
// console.log(adminOne.visa); // undefined

// let userOne = new User(100, "Elzero", "5000 Gneh", 123456789);

// console.log(userOne.u); // Elzero
// console.log(userOne.getSalary() * 0.3); // 1500
// console.log(userOne.getLast3Digits()); // 789

// /////////////////////////////////////////////////////////////////////////////////////////

// /*
//   Prototype
//   - Introduction
//   - Prototypes are the mechanism by which JavaScript objects
//     inherit features from one another.

//   - any object created with a specific class can inherit and take any features from that class
//   --like anything created with String class can access and use its features
// */

// class User {
//   constructor(id, username) {
//     this.i = id;
//     this.u = username;
//   }
//   sayHello() {
//     return `Hello ${this.u}`;
//   }
// }

// let userOne = new User(100, "Elzero");
// console.log(userOne.u);

// console.log(User.prototype); // {constructor: ƒ, sayHello: ƒ}

// let strOne = "Elzero";

// console.log(String.prototype); // String {'', constructor: ƒ, anchor: ƒ, at: ƒ, big: ƒ, concat: ƒ, indexOf: ƒ, repeat: ƒ, …}

// /////////////////////////////////////////////////////////////////////////////////////////

// /*
//   Prototype
//   - Add To Prototype Chain
//   - Extend Built In Constructors Features
// */

// class User {
//   constructor(id, username) {
//     this.i = id;
//     this.u = username;
//   }
//   sayHello() {
//     return `Hello ${this.u}`;
//   }
// }

// let userOne = new User(100, "Elzero");
// console.log(userOne.u);
// console.log(User.prototype); // {constructor: ƒ, sayHello: ƒ}
// console.log(userOne); // User {i: 100, u: 'Elzero'}

// User.prototype.sayWelcome = function () {
//   return `Welcome ${this.u}`;
// };
// console.log(userOne.sayWelcome()); // Welcome Elzero

// Object.prototype.love = "Elzero Web School";
// console.log(userOne.love); // Elzero Web School, it can access love without any problem

// String.prototype.addDotBeforeAndAfter = function (val) {
//   // if you removed val nothing will change
//   return `.${this}.`;
// };

// let myString = "Elzero";

// console.log(myString.addDotBeforeAndAfter()); // .Elzero.

// // userOne is made by Prototype of => constructor: class User & class user is made by Prototype => constructor: ƒ Object()

// /////////////////////////////////////////////////////////////////////////////////////////

// /*
//   Object Meta Data And Descriptor
//   - writable  => false means you can't update it to a new value
//   - enumerable  => false means it can't be looped on but it is there in the object
//   - configurable => false means [Cannot Delete Or Reconfigure Or Redefine]
//   default for all is false in defineProperty()
// */

// const myObject = {
//   a: 1,
//   b: 2,
// };

// Object.defineProperty(myObject, "c", {
//   writable: true,
//   enumerable: true,
//   configurable: false,
//   value: 3,
// });

// Object.defineProperty(myObject, "c", {
//   writable: true,
//   enumerable: true,
//   configurable: false, // <= Cannot redefine property
//   value: 20,
// });

// console.log(myObject.c); // 20
// // if writable: true and configurable: false  you can still update its value normally
// // if writable: false and configurable: true  you can still update its value using the defineProperty()

// myObject.c = 100;

// console.log(delete myObject.c); // false cuz it not Reconfigurable

// for (let prop in myObject) {
//   console.log(prop, myObject[prop]);
// }
// // prop = is the property name
// // myObject[prop] = value for this prop

// console.log(myObject); // {a: 1, b: 2, c: 100}

// /////////////////////////////////////////////////////////////////////////////////////////

// /*
//   Object Meta Data And Descriptor
//   - Define Multiple Properties
//   - Check Descriptors
// */

// const myObject = {
//   a: 1,
//   b: 2,
// };

// Object.defineProperties(myObject, {
//   c: {
//     configurable: true,
//     value: 3,
//   },
//   d: {
//     configurable: true,
//     value: 4,
//   },
//   e: {
//     configurable: true,
//     value: 5,
//   },
// });

// console.log(myObject); // {a: 1, b: 2, c: 3, d: 4, e: 5}

// console.log(Object.getOwnPropertyDescriptor(myObject, "d")); // {value: 4, writable: false, enumerable: false, configurable: true}

// console.log(Object.getOwnPropertyDescriptors(myObject)); // {a: {…}, b: {…}, c: {…}, d: {…}, e: {…}}

// /*
// a: {value: 1, writable: true, enumerable: true, configurable: true}  all true cuz it is created normally and not with defineProperty
// b: {value: 2, writable: true, enumerable: true, configurable: true}  all true cuz it is created normally and not with defineProperty
// c: {value: 3, writable: false, enumerable: false, configurable: true}
// d: {value: 4, writable: false, enumerable: false, configurable: true}
// e: {value: 5, writable: false, enumerable: false, configurable: true}
// */

// /////////////////////////////////////////////////////////////////////////////////////////

// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   language: "English",
//   car: "",
//   get lang() {
//     return this.language;
//   },
//   set carModel(value) {
//     this.car = value;
//   },
// };

// person.carModel = "Toyota";

// console.log(person.car); // Toyota

// console.log(person.lang); // English

// /*

// Why Using Getters and Setters?
//   It gives simpler syntax
//   It allows equal syntax for properties and methods
//   It can secure better data quality
//   It is useful for doing things behind-the-scenes

// */

// /////////////////////////////////////////////////////////////////////////////////////////

// /*
//   Date And Time
//   - Date Constructor

//   Static Methods
//   - Date.now()

//   - To Track Time You Need Starting Point
//   - Epoch Time Or Unix Time In Computer Science Is The Number of Seconds Since January 1, 1970.
//   - Why 1970 [829 Days To 136 Years]

//   Search For
//   - Year 2038 Problem in Computer Science.
// */

// let dateNow = new Date();

// console.log(dateNow);

// console.log(Date.now()); // 1000 Mill = 1 Second

// let seconds = Date.now() / 1000; // Number Of Seconds
// console.log(`Seconds ${seconds}`);

// let minutes = seconds / 60; // Number Of Minutes
// console.log(`Minutes ${minutes}`);

// let hours = minutes / 60; // Number Of Hours
// console.log(`Hours ${hours}`);

// let days = hours / 24; // Number Of Days
// console.log(`Days ${days}`);

// let years = days / 365; // Number Of Years
// console.log(`Years ${years}`);

// /*
// Tue Mar 14 2023 09:09:38 GMT+0200 (Eastern European Standard Time)
//   1678777778550
//   Seconds 1678777778.55
//   Minutes 27979629.6425
//   Hours 466327.1607083333
//   Days 19430.29836284722
//   Years 53.23369414478691
// */

// /////////////////////////////////////////////////////////////////////////////////////////

// /*
//   Date And Time
//   - setTime(Milliseconds)
//   - setDate() => Day Of The Month [Negative And Positive] change the days
//   - setFullYear(year, month => Optional [0-11], day => Optional [1-31])
//   - setMonth(Month [0-11], Day => Optional [1-31]) [Negative And Positive]
//   - setHours(Hours [0-23], Minutes => Optional [0-59], Seconds => Optional [0-59], MS => Optional [0-999])
//   - setMinutes(Minutes [0-59], Seconds => Optional [0-59], MS => Optional [0-999])
//   - setSeconds(Seconds => [0-59], MS => Optional [0-999])
// */

// let dateNow = new Date();
// console.log(dateNow);

// console.log("#".repeat(66));

// // dateNow.setTime(0);
// // console.log(dateNow);

// // console.log("#".repeat(66));

// // dateNow.setTime(10000);
// // console.log(dateNow);

// // console.log("#".repeat(66));

// // dateNow.setDate(35);
// // console.log(dateNow);

// // dateNow.setFullYear(2020, 13);
// // console.log(dateNow);

// dateNow.setMonth(15);
// console.log(dateNow);

// /////////////////////////////////////////////////////////////////////////////////////////

// /*
//   Date And Time

//   new Date(timestamp)
//   new Date(Date String)
//   new Date(Numeric Values)

//   Format
//   - "Oct 25 1982"
//   - "10/25/1982"
//   - "1982-10-25" => ISO International Standard
//   - "1982 10"
//   - "1982"
//   - "82"
//   - 1982, 9, 25, 2, 10, 0
//   - 1982, 9, 25
//   - "1982-10-25T06:10:00Z"

//   Date.parse("String") // Read Date From A String
// */

// console.log(Date.parse("Oct 25 1982"));

// let date1 = new Date(0);
// console.log(date1);

// let date2 = new Date(404344800000);
// console.log(date2);

// let date3 = new Date("10-25-1982");
// console.log(date3);

// let date4 = new Date("1982-10-25");
// console.log(date4);

// let date5 = new Date("1982-10");
// console.log(date5);

// let date6 = new Date("82");
// console.log(date6);

// let date7 = new Date(1982, 9, 25, 2, 10, 0); // 9 means october in index way
// console.log(date7);

// let date8 = new Date(1982, 9, 25); // 9 means october in index way
// console.log(date8);

// let date9 = new Date("1982-10-25T06:10:00Z"); // without Z means without time zone
// console.log(date9); // Mon Oct 25 1982 08:10:00 GMT+0200
// // without Z (time zone)  => Mon Oct 25 1982 06:10:00 GMT+0200

// /////////////////////////////////////////////////////////////////////////////////////////

// /*
//   Date And Time
//   - Track Operations Time

//   Search
//   - performance.now()
//   - performance.mark()
// */

// // Start Time
// let start = new Date();

// // Operation
// for (let i = 0; i < 10000; i++) {
//   // document.write(`<div>${i}</div>`);
//   let div = document.createElement("div");
//   div.appendChild(document.createTextNode(i));
//   document.body.appendChild(div);
// }

// // Time End
// let end = new Date();

// // Operation Duration
// let duration = end - start;

// console.log(duration); // here we measure how long it will take to do the operation of loop

// /////////////////////////////////////////////////////////////////////////////////////////

// /*
//   Date And Time
//   - Track Operations Time

//   Search
//   - performance.now()
//   - performance.mark()
// */

// // Start Time
// let start = new Date();

// // Operation
// for (let i = 0; i < 100000; i++) {
//   // document.write(`<div>${i}</div>`);
//   let div = document.createElement("div");
//   div.appendChild(document.createTextNode(i));
//   document.body.appendChild(div);
// }

// // Time End
// let end = new Date();

// // Operation Duration
// let duration = end - start;

// console.log(duration);

// /////////////////////////////////////////////////////////////////////////////////////////

/*
  Generators
  - Generator Function Run Its Code When Required.
  - Generator Function Return Special Object [Generator Object]
  - Generators Are Iterable
*/

// function* generateNumbers() {
//   yield 1;
//   console.log("Hello After Yield 1");
//   yield 2;
//   yield 3;
//   yield 4;
// }

// let generator = generateNumbers();

// console.log(typeof generator); // object
// console.log(generator); // generateNumbers {<suspended>}

// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());

// for (let value of generateNumbers()) {
//   console.log(value);
// }
// /*
// 1
// Hello After Yield 1
// 2
// 3
// 4
// */
// // it worked cuz you are looping on the original function itself and not the variable the stored the function

// for (let value of generator) {
//   console.log(value);

// nothing will be printed in console cuz you have used all the yields in this variable by using generator.next()

// /////////////////////////////////////////////////////////////////////////////////////////

// /*
//   Generators
//   - Delegate Generator
// */

// function* generateNums() {
//   yield 1;
//   yield 2;
//   yield 3;
// }

// function* generateLetters() {
//   yield "A";
//   yield "B";
//   yield "C";
// }

// function* generateAll() {
//   yield* generateNums();
//   yield* generateLetters();
//   yield* [4, 5, 6];
// }
// // function* generateAll() is a Delegate Generator function

// // to get the values in the Generator function and in the array you should use * sign after yield

// let generator = generateAll();

// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.return("Z")); // return will stop everything after it and it self except the thing written in .return()
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());

// /////////////////////////////////////////////////////////////////////////////////////////

// /*
//   Generators
//   - Generate Infinite Numbers
//   - Use Return Inside Generators
// */

// function* generateNumbers() {
//   // yield 1;
//   // yield 2;
//   // return "A"; // after return nothing will work
//   // yield 3;
//   // yield 4;
//   let index = 0;

//   while (true) {
//     yield index++;
//   }
// }
// // here it means that this function can yield infinite numbers but not automatically, instead when you order it to do

// let generator = generateNumbers();

// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());

// /////////////////////////////////////////////////////////////////////////////////////////

// /*
//   JSON
//   - JSON.parse => Convert Text Data To JS Object
//   - JSON.stringify => Convert JS Object To JSON
// */

// // Get From Server
// const myJsonObjectFromServer = '{"Username": "Osama", "Age": 39}';
// console.log(typeof myJsonObjectFromServer); // string
// console.log(myJsonObjectFromServer); // {"Username": "Osama", "Age": 39}

// // Convert To JS Object
// const myJsObject = JSON.parse(myJsonObjectFromServer);
// console.log(typeof myJsObject); // object
// console.log(myJsObject); // {Username: 'Osama', Age: 39}

// // Update Data
// myJsObject["Username"] = "Elzero";
// myJsObject["Age"] = 40;
// console.log(myJsObject); // {Username: 'Elzero', Age: 40}

// // Send To Server
// const myJsonObjectToServer = JSON.stringify(myJsObject);
// console.log(typeof myJsonObjectToServer); // string
// console.log(myJsonObjectToServer); // {"Username":"Elzero","Age":40}

// /////////////////////////////////////////////////////////////////////////////////////////

// /*
//   To Understand Ajax, Fetch, Promises

//   Asynchronous vs Synchronous Programming
//   - Meaning

//   Synchronous  = ورا بعض , متزامن
//   - Operations Runs in Sequence
//   - Each Operation Must Wait For The Previous One To Complete
//   - Story From Real Life

//   Asynchronous = مع بعض
//   - Operations Runs In Parallel
//   - This Means That An Operation Can Occur while Another One Is Still Being Processed
//   - Story From Real Life

//   - Facebook As Example
//   - Simulation

//   Search
//   - JavaScript Is A Single-Threaded
//   - Multi Threaded Languages
// */

// // Synchronous

// // console.log("1");
// // console.log("2");
// // window.alert("Operation");
// // console.log("3");

// // Asynchronous
// console.log("1");
// console.log("2");
// setTimeout(() => console.log("Operation"), 3000);
// console.log("3");

// /////////////////////////////////////////////////////////////////////////////////////////

// /*
//   To Understand Ajax, Fetch, Promises

//   Call Stack || Stack Trace
//   -- JavaScript Engine Uses A Call Stack To Manage Execution Contexts
//   -- Mechanism To Make The Interpreter Track Your Calls
//   -- When Function Called It Added To The Stack
//   -- When Function Executed It Removed From The Stack
//   -- After Function Is Finished Executing The Interpreter Continue From The Last Point
//   -- Work Using LIFO Principle => Last In First Out
//   -- Code Execution Is Synchronous.
//   -- Call Stack Detect Web API Methods And Leave It To The Browser To Handle It

//   Web API
//   -- Methods Available From The Environment => Browser
// */

// setTimeout(() => {
//   console.log("Web API");
// }, 0); // Web API will be printed after all the one two three cuz the browser will handle the web API lastly

// function one() {
//   console.log("One");
// }
// function two() {
//   one();
//   console.log("Two");
// }
// function three() {
//   two();
//   console.log("Three");
// }

// three();
// // LIFO hear means => cuz you called function three first so it the first IN so it will be last OUT or executed

// /*
// =================================
// console.log("One"); // console log One is last IN so it will be last OUT
// =================================
// function one() {
//   console.log("One");
// }
// =================================
// function two() {
//   one();
//   console.log("Two");
// }
// =================================
// function three() {
//   two();
//   console.log("Three");
// }
// =================================
// */

// console.log("#####");
// console.log("One");
// console.log("Two");
// console.log("Three");

// /////////////////////////////////////////////////////////////////////////////////////////

/*
  To Understand Ajax, Fetch, Promises

  Event Loop + Callback Queue

  Story
  - JavaScript Is A Single Threaded Language "All Operations Executed in Single Thread"
  - Call Stack Track All Calls  = LIFO
  - Every Function Is Done Its Poped Out
  - When You Call Asynchronous Function It Sent To Browser API
  - Asynchronous Function Like Settimeout Start Its Own Thread
  - Browser API Act As A Second Thread
  - API Finish Waiting And Send Back The Function For Processing
  - Browser API Add The Callback To Callback Queue
  - Event Loop Wait For Call Stack To Be Empty 
  - Event Loop Get Callback From Callback Queue And Add It To Call Stack
  - Callback Queue Follow FIFO "First In First Out" Rule

  There are 2 things :
  1) Call Stack (LIFO = Last In First Out)
  2) Callback Queue => from Web API (FIFO = First In First Out)

  * setTimeout is Asynchronous Function by Web API *
  * console.log() is synchronous Function by Web API *
*/
// console.log("One");
// setTimeout(() => {
//   console.log("Three");
// }, 0);
// setTimeout(() => {
//   console.log("Four");
// }, 0);
// console.log("Two");

// setTimeout(() => {
//   console.log(myVar);
// }, 0);

// let myVar = 100;
// myVar += 100;

/*
One
Two
Three
Four
200
*/

/*
const obj = {};

console.log(JSON.parse(JSON.stringify(obj))); // empty object
console.log(structuredClone(obj)); // empty object
console.log(obj); // prop: 123

obj.prop = 123;
*/

/////////////////////////////////////////////////////////////////////////////////////////

// /*
//   Ajax
//   - Ready State => Status Of The Request
//   [0] Request Not Initialized
//   [1] Server Connection Established
//   [2] Request Received
//   [3] Processing Request
//   [4] Request Is Finished And Response Is Ready
//   - Status
//   [200] Response Is Successful
//   [404] Not Found

//   open(method: string, url: string | URL, async: (default: true )boolean, username?: string | null | undefined, password?: string | null | undefined)
// */

// let myRequest = new XMLHttpRequest();
// myRequest.open("GET", "https://api.github.com/users/elzerowebschool/repos", );
// myRequest.send();
// // console.log(myRequest);

// myRequest.onreadystatechange = function () {
//   // console.log(myRequest.readyState);
//   // console.log(myRequest.status);
//   if (this.readyState === 4 && this.status === 200) {
//     console.log(this.responseText);
//   }
// };

/////////////////////////////////////////////////////////////////////////////////////////

/*
  Ajax
  Loop On Data

  Search
  - Cross Origin API [CORS]
  - API Authentication
*/

// let myRequest = new XMLHttpRequest();
// myRequest.open("GET", "https://api.github.com/users/elzerowebschool/repos");
// myRequest.send();
// myRequest.onreadystatechange = function () {
//   if (this.readyState === 4 && this.status === 200) {
//     // console.log(this.responseText);
//     let jsData = JSON.parse(this.responseText);
//     // console.log(jsData);
//     for (let i = 0; i < jsData.length; i++) {
//       let div = document.createElement("div");
//       let repoName = document.createTextNode(
//         `${jsData[i].name} => ${jsData[i].watchers_count}`
//       );
//       div.appendChild(repoName);
//       document.body.appendChild(div);
//     }
//   }
// };

/////////////////////////////////////////////////////////////////////////////////////////

// /*
//   To Understand Ajax, Fetch, Promises

//   Pyramid Of Doom || Callback Hell

//   - What Is Callback
/*
Callback Hell is a term used to describe a situation where multiple layers of nested callbacks are used in JavaScript,
making the code difficult to read, understand, and maintain.
This is especially prevalent when dealing with asynchronous operations,
such as network requests, timers, or file I/O.
*/
//   - Callback Hell Example

//   What Is Callback
//   - A Function That Is Passed Into Another One As An Argument To Be Executed Later
//   - Function To Handle Photos
//   --- [1] Download Photo From URL
//   --- [2] Resize Photo
//   --- [3] Add Logo To The Photo
//   --- [4] Show The Photo In Website
// */

// function makeItRed(e) {
//   e.target.style.color = "red";
// }

// let p = document.querySelector(".test");
// p.addEventListener("click", makeItRed);

// function iamACallback() {
//   console.log("Iam A Callback Function");
// }

// // setTimeout(iamACallback, 2000);

// setTimeout(() => {
//   console.log("Download Photo From URL");
//   setTimeout(() => {
//     console.log("Resize Photo");
//     setTimeout(() => {
//       console.log("Add Logo To The Photo");
//       setTimeout(() => {
//         console.log("Show The Photo In Website");
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

/////////////////////////////////////////////////////////////////////////////////////////

/*
  Promise Intro And Syntax
  - Promise In JavaScript Is Like Promise In Real Life
  - Promise Is Something That Will Happen In The Future
  - Promise Avoid Callback Hell
  - Promise Is The Object That Represent The Status Of An Asynchronous Operation And Its Resulting Value

  - Promise Status
  --- Pending: Initial State
  --- Fulfilled: Completed Successfully
  --- Rejected: Failed

  Story
  - Once A Promise Has Been Called, It Will Start In A Pending State
  - The Created Promise Will Eventually End In A Resolved State Or In A Rejected State
  - Calling The Callback Functions (Passed To Then Method And Catch) Upon Finishing.

  - Then
  --- Takes 2 Optional Arguments [Callback For Success Or Failure]
*/

// const myPromise = new Promise((resolveFunction, rejectFunction) => {
//   let connect = false;
//   if (connect) {
//     resolveFunction("Connection Established");
//   } else {
//     rejectFunction(Error("Connection Failed"));
//   }
// }).then(
//   (resolveValue) => console.log(`Good ${resolveValue}`),
//   (rejectValue) => console.log(`Bad ${rejectValue}`)
// );

// const myPromise = new Promise((resolveFunction, rejectFunction) => {
//   let connect = false;
//   if (connect) {
//     resolveFunction("Connection Established");
//   } else {
//     rejectFunction(Error("Connection Failed"));
//   }
// });

// console.log(myPromise);

// let resolver = (resolveValue) => console.log(`Good ${resolveValue}`);
// let rejecter = (rejectValue) => console.log(`Bad ${rejectValue}`);

// myPromise.then(resolver, rejecter);

// myPromise.then(
//   (resolveValue) => console.log(`Good ${resolveValue}`),
//   (rejectValue) => console.log(`Bad ${rejectValue}`)
// );

// myPromise.then(
//   (resolveValue) => console.log(`Good ${resolveValue}`),
//   (rejectValue) => console.log(`Bad ${rejectValue}`)
// );

/////////////////////////////////////////////////////////////////////////////////////////

// /*
//   Promise Training

//   We Will Go To The Meeting, Promise Me That We Will Find The 4 Employees
//   .then(We Will Choose Two People)
//   .then(We Will Test Them Then Get One Of Them)
//   .catch(No One Came)

//   Then    => Promise Is Successful Use The Resolved Data
//   Catch   => Promise Is Failed, Catch The Error
//   Finally => Promise Successful Or Failed Finally Do Something
// */

// const myPromise = new Promise((resolveFunction, rejectFunction) => {
//   let employees = [];
//   if (employees.length === 4) {
//     resolveFunction(employees);
//   } else {
//     rejectFunction(Error("Number Of Employees Is Not 4"));
//   }
// });
// // we write Error() to give us more details about where the error occurred ex:
// /*
//   at bootcamp.js:2017:20
//   at new Promise (<anonymous>)
//   at bootcamp.js:2012:19
// */

// myPromise
//   .then((resolveValue) => {
//     resolveValue.length = 2;
//     return resolveValue;
//   })
//   .then((resolveValue) => {
//     resolveValue.length = 1;
//     return resolveValue;
//   })
//   .then((resolveValue) => {
//     console.log(`The Choosen Emplyee Is ${resolveValue}`);
//   })
//   .catch((rejectedReason) => console.log(rejectedReason))
//   .finally(console.log("The Operation Is Done"));

/////////////////////////////////////////////////////////////////////////////////////////

// /*
//   Promise And XHR
// */

// const getData = (apiLink) => {
//   return new Promise((resolve, reject) => {
//     let myRequest = new XMLHttpRequest();
//     myRequest.onload = function () {
//       if (this.readyState === 4 && this.status === 200) {
//         resolve(JSON.parse(this.responseText));
//       } else {
//         reject(Error("No Data Found"));
//       }
//     };

//     myRequest.open("GET", apiLink);
//     myRequest.send();
//   });
// };

// // use .onload instead of .onreadystatechange, cuz it is more compatible with newer technologies and promise

// getData("https://api.github.com/users/elzerowebschool/repos")
//   .then((result) => {
//     result.length = 10;
//     return result;
//   })
//   .then((result) => console.log(result[0].name))
//   .catch((rej) => console.log(rej));

/////////////////////////////////////////////////////////////////////////////////////////

/*
  Fetch API
  - Return A Representation Of the Entire HTTP Response
*/

// fetch("https://api.github.com/users/elzerowebschool/repos")
//   .then((result) => {
//     console.log(result); // returns Response that contains the json file content
//     let myData = result.json();
//     console.log(myData); // returns Promise
//     return myData;
//   })
//   .then((full) => {
//     full.length = 10;
//     return full;
//   })
//   .then((ten) => {
//     console.log(ten[0].name);
//   });

// // const getData = (apiLink) => {
// //   return new Promise((resolve, reject) => {
// //     let myRequest = new XMLHttpRequest();
// //     myRequest.onload = function () {
// //       if (this.readyState === 4 && this.status === 200) {
// //         resolve(JSON.parse(this.responseText));
// //       } else {
// //         reject(Error("No Data Found"));
// //       }
// //     };

// //     myRequest.open("GET", apiLink);
// //     myRequest.send();
// //   });
// // };

// // getData("https://api.github.com/users/elzerowebschool/repos")
// //   .then((result) => {
// //     result.length = 10;
// //     return result;
// //   })
// //   .then((result) => console.log(result[0].name))
// //   .catch((rej) => console.log(rej));

/////////////////////////////////////////////////////////////////////////////////////////

/*
  Promise
  - All  => if all promises are resolved then it returns an array with them all, if only one ot them rejected it will return the rejected one only
  - All Settled => it always return with an array of objects inside these objects are status and value || reason
  - Race => returns the result of first promise always either resolved or rejected
*/

// const myFirstPromise = new Promise((res, rej) => {
//   setTimeout(() => {
//     res("Iam The First Promise");
//   }, 3000);
// });

// const mySecondPromise = new Promise((res, rej) => {
//   setTimeout(() => {
//     res("Iam The Second Promise");
//   }, 1000);
// });

// const myThirdPromise = new Promise((res, rej) => {
//   setTimeout(() => {
//     res("Iam The Third Promise");
//   }, 2000);
// });

// // Promise.all([myFirstPromise, mySecondPromise, myThirdPromise]).then(
// //   (resolvedValues) => console.log(resolvedValues),
// //   (rejectedValue) => console.log(`Rejected: ${rejectedValue}`)
// // );

// // Promise.allSettled([myFirstPromise, mySecondPromise, myThirdPromise]).then(
// //   (resolvedValues) => console.log(resolvedValues),
// //   (rejectedValue) => console.log(`Rejected: ${rejectedValue}`)
// // );

// Promise.race([myFirstPromise, mySecondPromise, myThirdPromise]).then(
//   (resolvedValues) => console.log(resolvedValues),
//   (rejectedValue) => console.log(`Rejected: ${rejectedValue}`)
// );

/////////////////////////////////////////////////////////////////////////////////////////

/*
  Async
  - Async Before Function Mean This Function Return A Promise
  - Async And Await Help In Creating Asynchronous Promise Behavior With Cleaner Style
*/

// function getData() {
//   return new Promise((res, rej) => {
//     let users = [];
//     if (users.length > 0) {
//       res("Users Found");
//     } else {
//       rej("No Users Found");
//     }
//   });
// }

// getData().then(
//   (resolvedValue) => console.log(resolvedValue),
//   (rejectedValue) => console.log("Rejected " + rejectedValue)
// );

// -------------------------------------------------------------------

// function getData() {
//   let users = ["Osama"];
//   if (users.length > 0) {
//     return Promise.resolve("Users Found");
//   } else {
//     return Promise.reject("No Users Found");
//   }
// }

// getData().then(
//   (resolvedValue) => console.log(resolvedValue),
//   (rejectedValue) => console.log("Rejected " + rejectedValue)
// );

// async function getData() {
//   let users = ["Osama"];
//   if (users.length > 0) {
//     return "Users Found";
//   } else {
//     throw new Error("No Users Found");
//   }
// }

// console.log(getData());

// getData().then(
//   (resolvedValue) => console.log(resolvedValue),
//   (rejectedValue) => console.log("Rejected " + rejectedValue)
// );

/*
In JavaScript, throw is a keyword used to explicitly throw an exception.
When an exception is thrown, it interrupts the normal flow of the program and transfers control to the nearest exception handler.
*/

// function divide(a, b) {
//   if (b === 0) {
//     throw new Error("Cannot divide by zero");
//   }
//   return a / b;
// }

// try {
//   console.log(divide(10, 0));
// } catch (error) {
//   console.error(error);
//   console.error(error.message);
// }

/////////////////////////////////////////////////////////////////////////////////////////

// /*
//   Await
//   - Await Works Only Inside Asnyc Functions
//   - Await Make JavaScript Wait For The Promise Result
//   - Await Is More Elegant Syntax Of Getting Promise Result
// */

// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // resolve("Iam The Good Promise");
//     reject(Error("Iam The Bad Promise"));
//   }, 3000);
// });

// async function readData() {
//   console.log("Before Promise");
//   // myPromise.then((resolvedValue) => console.log(resolvedValue));
//   // console.log(await myPromise);
//   console.log(await myPromise.catch((err) => err));
//   console.log("After Promise");
// }

// readData();

/////////////////////////////////////////////////////////////////////////////////////////

// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject(Error("Iam The Bad Promise"));
//   }, 3000);
// });

// async function readData() {
//   console.log("Before Promise");
//   try {
//     console.log(await myPromise);
//   } catch (error) {
//     console.log(`Reason is ${error}`);
//     console.log(error);
//   } finally {
//     console.log("After Promise");
//   }
// }

// readData();

////////////////////////////////////////////////////////////////////////////////

// /*
//   Async & Await With Try, Catch, Finally
// */

// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Iam The Good Promise");
//   }, 3000);
// });

// // async function readData() {
// //   console.log("Before Promise");
// //   try {
// //     console.log(await myPromise);
// //   } catch (reason) {
// //     console.log(`Reason: ${reason}`);
// //   } finally {
// //     console.log("After Promise");
// //   }
// // }

// // readData();

// // "https://api.github.com/users/elzerowebschool/repos"

// async function fetchData() {
//   console.log("Before Fetch");
//   try {
//     let myData = await fetch(
//       "https://api.github.com/users/elzerowebschool/repos"
//     );
//     console.log(await myData.json()); // here await will get you the data directly because it waited the Promise to finish its thing
//   } catch (reason) {
//     console.log(`Reason: ${reason}`);
//   } finally {
//     console.log("After Fetch");
//   }
// }

// fetchData();
