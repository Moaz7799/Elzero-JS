let articleCall = new XMLHttpRequest();

articleCall.open("GET", "https://api.jsonbin.io/v3/b/64184951c0e7653a058b2efd");
articleCall.send();

let data = new Promise((resolve, reject) => {
  articleCall.onload = function () {
    if (articleCall.readyState === 4 && articleCall.status === 200) {
      resolve(JSON.parse(articleCall.responseText));
    } else {
      reject(Error("No Data Found"));
    }
  };
});

data
  .then((result) => {
    result.record.length = 5;
    for (let i = 0; i < result.record.length; i++) {
      let articleDiv = document.createElement("div");
      let h3 = document.createElement("h3");
      let p = document.createElement("p");

      h3.innerText = result.record[i].title;
      p.innerText = result.record[i].description;

      articleDiv.appendChild(h3);
      articleDiv.appendChild(p);

      document.body.appendChild(articleDiv);
    }
    document.body.appendChild(document.createElement("br"));
    document.body.appendChild(document.createElement("hr"));
    document.body.appendChild(document.createElement("br"));
  })
  .catch((rej) => {
    return rej;
  });

fetch("https://api.jsonbin.io/v3/b/64184951c0e7653a058b2efd")
  .then((result) => {
    let myData = result.json();
    return myData;
  })
  .then((full) => {
    full.record.length = 5;
    for (let i = 0; i < full.record.length; i++) {
      let articleDiv = document.createElement("div");
      let h3 = document.createElement("h3");
      let p = document.createElement("p");

      h3.innerText = full.record[i].title;
      p.innerText = full.record[i].description;

      articleDiv.appendChild(h3);
      articleDiv.appendChild(p);

      document.body.appendChild(articleDiv);
    }
  })
  .catch((error) => console.log(error));
