let one = document.getElementById("elzero");
let two = document.getElementsByTagName("div")[0];
let three = document.getElementsByClassName("element")[0];

let four = document.querySelector("[name='js']");
let five = document.querySelector("#elzero");
let six = document.querySelector(".element");
let seven = document.querySelector("div");

let eight = document.querySelectorAll("[name='js']")[0];
let nine = document.querySelectorAll("#elzero")[0];
let ten = document.querySelectorAll(".element")[0];
let eleven = document.querySelectorAll("div")[0];

let twelve = document.getElementsByName("js")[0];

let thirteen = document.body.children[0];

let fourteen = document.body.firstElementChild;

let fifteen = document.firstChild;

let sixteen = document.body.childNodes[3];

console.log(sixteen);

//
//
//
//
//

for (let i = 0; i < 10; i++) {
  let getImages = document.images[i];

  getImages.setAttribute(
    "src",
    "https://elzero.org/wp-content/themes/elzero/imgs/logo.png"
  );

  getImages.setAttribute("alt", "Elzero Logo");
}

//
//
//
//
//

let userInput = document.querySelector("[name='dollar']");

let resultBar = document.getElementsByClassName("result")[0];

document.forms[0].oninput = function () {
  let output = userInput.value * 15.6;
  resultBar.textContent = `{ ${
    userInput.value
  } } USD Dollar = { ${output.toFixed(2)} } Egyptian Pound`;
};

//
//
//
//
//

let first = document.getElementsByClassName("one")[0];
let second = document.getElementsByClassName("two")[0];

let titleOne = second.getAttribute("title");
let titleTwo = first.getAttribute("title");

let contentOne = second.textContent;
let contentTwo = first.textContent;

first.textContent = contentOne;
second.textContent = contentTwo + " " + second.attributes.length;

// Another easier way
/*
let first = document.getElementsByClassName("one")[0];
let second = document.getElementsByClassName("two")[0];

first.title = first.className;
second.title = second.className;

first.textContent = first.className;
second.textContent = second.className + " " + second.attributes.length;
*/

//
//
//
//
//

for (let i = 10; i <= 14; i++) {
  if (document.images[i].hasAttribute("alt")) {
    document.images[i].alt = "Old";
  } else {
    document.images[i].alt = "Elzero New";
  }
}

//
//
//
//
//

let elementsCounter = document.getElementsByName("elements")[0];
let elementsText = document.getElementsByName("texts")[0];
let elementsType = document.getElementsByName("type")[0];

let resultDiv = document.getElementsByClassName("results")[0];

let createButton = document.getElementsByName("create")[0];

createButton.onclick = function (e) {
  resultDiv.innerHTML = "";
  e.preventDefault();
  for (let i = 0; i < elementsCounter.value; i++) {
    let newElement = document.createElement(`${elementsType.value}`);

    let textInElement = document.createTextNode(`${elementsText.value}`);

    newElement.setAttribute("class", "box");
    newElement.setAttribute("title", "Element");
    newElement.setAttribute("id", `id-${i + 1}`);

    newElement.appendChild(textInElement);

    resultDiv.appendChild(newElement);
  }
};
