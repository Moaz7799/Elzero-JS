let ip = "2001:db8:3333:4444:5555:6666:7777:8888";

let ipRegEx = /\d{4}:\w{2}\d:\d{4}:\d{4}:\d{4}:\d{4}:\d{4}:\d{4}/g;

console.log(ip.match(ipRegEx));

console.log("-".repeat(50));
//////////////////////////////////////////////////////////////////////

let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";

let snRegEx = /Os\d*O/g;

console.log(specialNames.match(snRegEx));

// Output
// ['Os10O', 'OsO', 'Os100O']

console.log("-".repeat(50));
//////////////////////////////////////////////////////////////////////

let phone = "+(995)-123 (4567)";

let phoneRegEx = /\+\(\d{3}\)-\d{3}\s\(\d{4}\)/g;

console.log(phone.match(phoneRegEx));

console.log("-".repeat(50));
//////////////////////////////////////////////////////////////////////

let re = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i;

/*
    https? = if there is http with s or no s at the end
    :
    \/\/ = skipping this sign /  twice to prevent any error

    (?:[-\w]+\.)? = first there can be brackets or no at the begging and ending
    :
    [-\w]+ = there should be one or more from - then any word characters
    \. =skipping the dot sign

    ([-\w]+) = there should be one or more from - then any word characters
    \. = skipping the dot sign

    \w+ = at least one or more word characters

    (?:\.\w+)? = first there can be brackets or no at the begging and ending
    :
    \. = skipping the dot sign
    \w+ = at least one or more word characters

    \/? = skipping this character / and it can be there or no
    .* = here can be no, one or more dots
*/

//////////////////////////////////////////////////////////////////////
let date1 = "25/10/1982";
let date2 = "25 - 10 - 1982";
let date3 = "25 10 1982";
let date4 = "25 10 82";

let reg = /\d{2}\s?\/?-?\s?\d{2}\s?\/?-?\s?\d{2,4}/g; // Write Pattern Here

console.log(date1.match(reg)); // "25/10/1982"
console.log(date2.match(reg)); // "25 - 10 - 1982"
console.log(date3.match(reg)); // "25 10 1982"
console.log(date4.match(reg)); // "25 10 82"

console.log("-".repeat(50));
//////////////////////////////////////////////////////////////////////

let url1 = "elzero.org";
let url2 = "http://elzero.org";
let url3 = "https://elzero.org";
let url4 = "https://www.elzero.org";
let url5 = "https://www.elzero.org:8080/articles.php?id=100&cat=topics";

let reg1 =
  /(https?:\/\/)?(www.)?\w+.\w{2,}(:\d+\/)?(\w+.\w+\?id=\w+\W*\w*=\w+)?/g;
console.log(url1.match(reg1));
console.log(url2.match(reg1));
console.log(url3.match(reg1));
console.log(url4.match(reg1));
console.log(url5.match(reg1));
