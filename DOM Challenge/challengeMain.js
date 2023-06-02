document.body.style.cssText =
  "margin: 0; font-family: Tahoma, Arial; background-color: rgb(236, 236, 236);";

let headerSection = document.createElement("header");
headerSection.className = "website-head";

let logoDiv = document.createElement("div");
logoDiv.className = "logo";
logoDiv.title = "Website Logo";

let logoText = document.createTextNode("Elzero");
logoDiv.appendChild(logoText);
headerSection.appendChild(logoDiv);

let ulMenu = document.createElement("ul");
ulMenu.className = "menu";

let menuArray = ["Home", "About", "Service", "Contact"];

for (let i = 0; i < menuArray.length; i++) {
  let liElement = document.createElement("li");
  let liContent = document.createTextNode(menuArray[i]);

  liElement.appendChild(liContent);
  ulMenu.appendChild(liElement);
}

headerSection.appendChild(ulMenu);
document.body.prepend(headerSection);

headerSection.style.cssText =
  "display: flex; padding: 20px; background-color: rgb(255, 255, 255); justify-content: space-between; align-items: center;";

logoDiv.style.cssText =
  "font-weight: bold; color: rgb(35, 169, 110); font-size: 26px;";

ulMenu.style.cssText =
  "display: flex; gap: 20px; color: #8b8b8b; padding: 0px; margin: 0px; display: flex; list-style: none;";

// ################################

let contentDiv = document.createElement("div");
contentDiv.className = "content";

for (let i = 1; i <= 15; i++) {
  let productDiv = document.createElement("div");
  productDiv.className = "product";
  let productText = document.createTextNode("Product");
  contentDiv.appendChild(productDiv);
  let spanOfProduct = document.createElement("span");
  let numberInSpan = document.createTextNode(i);
  spanOfProduct.appendChild(numberInSpan);
  productDiv.appendChild(spanOfProduct);
  productDiv.appendChild(productText);

  productDiv.style.cssText =
    "padding: 20px; background-color: rgb(255, 255, 255); border: 1px solid rgb(221, 221, 221); width: calc((100% - 40px) / 3); box-sizing: border-box; text-align: center; color: rgb(136, 136, 136); border-radius: 6px;";

  spanOfProduct.style.cssText =
    "font-size: 40px; color: black; font-weight: normal; display: block; margin-bottom: 10px; margin-top: 10px;";
}

headerSection.after(contentDiv);

contentDiv.style.cssText =
  "display: flex; padding: 20px; flex-wrap: wrap; justify-content: center; gap: 20px; min-height: calc(100vh - 143px); box-sizing: border-box;";

// ################################

let footerSection = document.createElement("footer");
footerSection.className = "footer";
let footerText = document.createTextNode("Copyright 2021");
footerSection.appendChild(footerText);

contentDiv.after(footerSection);

footerSection.style.cssText =
  "background-color: rgb(35, 169, 110); font-size: 26px; text-align: center; padding: 20px; color: rgb(255, 255, 255);";
