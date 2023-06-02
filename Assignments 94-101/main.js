let addInput = document.querySelector(".classes-to-add");
let removeInput = document.querySelector(".classes-to-remove");

let currentElement = document.querySelector('[title = "Current"]');

let currentClassesDiv =
  document.querySelector(".classes-list").lastElementChild;

addInput.onblur = function () {
  if (addInput.value !== "") {
    currentClassesDiv.innerHTML = "";
    let addInputValue = addInput.value.toLowerCase().split(" ");
    addInput.value = "";
    for (let i = 0; i < addInputValue.length; i++) {
      if (addInputValue[i] === "") {
        continue;
      }
      currentElement.classList.add(addInputValue[i]);
    }
    for (let i = 0; i < currentElement.classList.length; i++) {
      let classesSpan = document.createElement("span");
      let classesText = document.createTextNode(
        [...currentElement.classList].sort()[i]
      );
      console.log();
      classesSpan.appendChild(classesText);
      currentClassesDiv.appendChild(classesSpan);
    }
  }
};

removeInput.onblur = function () {
  if (removeInput.value !== "") {
    currentClassesDiv.innerHTML = "";
    let removeInputValue = removeInput.value.toLowerCase().split(" ");
    removeInput.value = "";
    for (let i = 0; i < removeInputValue.length; i++) {
      if (removeInputValue[i] === "") {
        continue;
      }
      currentElement.classList.remove(removeInputValue[i]);
    }
    for (let i = 0; i < currentElement.classList.length; i++) {
      let classesSpan = document.createElement("span");
      let classesText = document.createTextNode(
        [...currentElement.classList].sort()[i]
      );

      classesSpan.appendChild(classesText);
      currentClassesDiv.appendChild(classesSpan);
    }
    if (currentElement.hasAttribute("class")) {
      if (currentElement.getAttribute("class") === "") {
        let noClasses = document.createTextNode("No Classes To Show");
        currentClassesDiv.appendChild(noClasses);
      }
    }
  }
};

for (let i = 0; i < currentElement.classList.length; i++) {
  let classesSpan = document.createElement("span");
  let classesText = document.createTextNode(
    [...currentElement.classList].sort()[i]
  );

  classesSpan.appendChild(classesText);
  currentClassesDiv.appendChild(classesSpan);
}
if (currentElement.hasAttribute("class")) {
  if (currentElement.getAttribute("class") === "") {
    let noClasses = document.createTextNode("No Classes To Show");
    currentClassesDiv.appendChild(noClasses);
  }
}

// #####################################################

let ourElement = document.querySelector(".our-element");
ourElement.nextElementSibling.remove();

let startElement = document.createElement("div");
startElement.className = "start";
startElement.title = "Start Element";
startElement.setAttribute("data-value", "Start");

let startElementText = document.createTextNode("Start");
startElement.appendChild(startElementText);

//

let endElement = document.createElement("div");
endElement.className = "end";
endElement.title = "End Element";
endElement.setAttribute("data-value", "End");

let endElementText = document.createTextNode("End");
endElement.appendChild(endElementText);

ourElement.before(startElement);
ourElement.after(endElement);

// #####################################################

let elzeroDiv = document.getElementsByTagName("div")[7];

console.log(elzeroDiv.lastChild.nodeValue.trim());

// #####################################################

let fifth = document.querySelector(".five").children;

for (let i = 0; i < fifth.length; i++) {
  fifth[i].addEventListener("click", function (e) {
    console.log(`This is ${e.target.nodeName}`);
  });
}
