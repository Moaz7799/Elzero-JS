console.log(elzero.innerHTML); // object
console.log(typeof elzero); // object

let a = "We Love";
let b = "JavaScript";
let c = "And";
let d = "Programming";

console.log(`${a} ${b} ${c} ${d}`);

/*
	this way will make you add spaces or any character way easier
  each space between the variables will; actually count
*/

console.log(a + ' "" ' + b + "\n" + c + " " + d);  //We Love "" JavaScript
                                                   //And Programming

console.log(`${a} "" '' \\ ${b}  
${c} ${d}`);

//We Love "" '' \ JavaScript  
//And Programming

console.log(a + " \"\" " + b +    
"\n" + c + " " + d);

console.log(`${a} "" '' \\ ${b}  
${c} ${d}`);
