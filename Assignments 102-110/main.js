/*
let promptValue = prompt("Print Number From – To", "Example: 5-20");

let promptArray = promptValue.split("-").sort((a, b) => a - b);


for (let i = +promptArray[0]; i <= promptArray[1]; i++) {
  let para = document.createElement("p");
  para.innerText = i;
  document.body.appendChild(para);
}
*/

/*
if (parseInt(promptArray[0]) < parseInt(promptArray[1])) {
  for (let i = parseInt(promptArray[0]); i <= parseInt(promptArray[1]); i++) {
    let para = document.createElement("p");
    para.innerText = i;
    document.body.appendChild(para);
  }
} else {
  for (let i = parseInt(promptArray[1]); i <= parseInt(promptArray[0]); i++) {
    let para = document.createElement("p");
    para.innerText = i;
    document.body.appendChild(para);
  }
}
*/

// ######################################################## 2

let parent = document.createElement("div");
let h1 = document.createElement("h1");
let p = document.createElement("p");
let btn = document.createElement("button");

function popup() {
  h1.textContent = "Welcome";
  p.textContent = "Welcome To Elzero  Web School";
  btn.textContent = "X";

  parent.append(h1, p, btn);
  document.body.append(parent);

  btn.addEventListener("click", function () {
    parent.remove();
  });

  document.body.style.cssText = "font-family: arial, Tahoma";
  parent.style.cssText =
    "width: 300px; height: 150px; background-color: #eee; padding: 20px; border: 1px solid #ccc; margin: 20px auto; position: relative; text-align: center";
  btn.style.cssText =
    "background-color: red; color: white; width: 30px; height: 30px; border-radius: 50%; border: none; position: absolute; top: -10px; right: -10px";
}

setTimeout(popup, 5000);

// ######################################################## 3

let counterDiv = document.querySelector("div");

function countdown() {
  counterDiv.innerText -= 1;
  if (counterDiv.innerText == 0) {
    clearInterval(counter);
  }
}

let counter = setInterval(countdown, 1000);

// ######################################################## 4

/*
let counterDiv = document.querySelector("div");

console.log(counterDiv);

function countdown() {
  counterDiv.innerText -= 1;
  if (counterDiv.innerText == 5) {
    window.open("https://elzero.org", "_self");
  }
}

let counter = setInterval(countdown, 1000);
*/

// ######################################################## 5

/*
let counterDiv = document.querySelector("div");

console.log(counterDiv);

function countdown() {
  counterDiv.innerText -= 1;
  if (counterDiv.innerText == 5) {
    window.open(
      "https://elzero.org",
      "_blank",
      "width=400,height=400,top=200,left=400"
    );
  }
  if (counterDiv.innerText == 0) {
    clearInterval(counter);
  }
}

let counter = setInterval(countdown, 1000);
*/
