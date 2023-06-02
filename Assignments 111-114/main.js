let font = document.getElementById("font");
let color = document.getElementById("color");
let fontSize = document.getElementById("fontSize");

// window.localStorage.clear();

document.body.style.fontSize = fontSize.value;
document.body.style.color = color.value;
document.body.style.fontFamily = font.value;

font.onchange = function () {
  window.localStorage.setItem("font", font.value);
  document.body.style.fontFamily = font.value;
};
color.onchange = function () {
  window.localStorage.setItem("color", color.value);
  document.body.style.color = color.value;
};
fontSize.onchange = function () {
  window.localStorage.setItem("size", fontSize.value);
  document.body.style.fontSize = fontSize.value;
};

if (window.localStorage.font) {
  font.value = window.localStorage.font;
  document.body.style.fontFamily = window.localStorage.font;
}
if (window.localStorage.color) {
  color.value = window.localStorage.color;
  document.body.style.color = window.localStorage.color;
}
if (window.localStorage.size) {
  fontSize.value = window.localStorage.size;
  document.body.style.fontSize = window.localStorage.size;
}

////////////////////////////////////////////////////////

let one = document.querySelector("#one");
let two = document.querySelector("#two");
let three = document.querySelector("#three");
let select = document.querySelector("#select");

one.oninput = function () {
  window.sessionStorage.setItem("one", one.value);
};
two.oninput = function () {
  window.sessionStorage.setItem("two", two.value);
};
three.oninput = function () {
  window.sessionStorage.setItem("three", three.value);
};
select.onchange = function () {
  window.sessionStorage.setItem("select", select.value);
};

if (window.sessionStorage.one) {
  one.value = window.sessionStorage.one;
}
if (window.sessionStorage.two) {
  two.value = window.sessionStorage.two;
}
if (window.sessionStorage.three) {
  three.value = window.sessionStorage.three;
}
if (window.sessionStorage.select) {
  select.value = window.sessionStorage.select;
}
