let ajaxCall = new XMLHttpRequest();

ajaxCall.open("GET", "https://api.jsonbin.io/v3/b/641621caebd26539d0911154");
ajaxCall.send();

ajaxCall.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    console.log(`JSON Object Content Here`);
    console.log(this.responseText);
    console.log(`Data Loaded`);

    let mainData = JSON.parse(this.responseText);

    let divData = document.createElement("div");
    divData.id = "data";
    document.body.appendChild(divData);

    for (let i = 0; i < 5; i++) {
      let articleDiv = document.createElement("div");
      divData.appendChild(articleDiv);

      let h2 = document.createElement("h2");
      h2.innerText = mainData.record[i].articleTitle;
      articleDiv.appendChild(h2);

      let p1 = document.createElement("p");
      p1.innerText = mainData.record[i].content;
      articleDiv.appendChild(p1);

      let p2 = document.createElement("p");
      p2.innerText = `Author: ${mainData.record[i].authorName}`;
      articleDiv.appendChild(p2);

      let p3 = document.createElement("p");
      p3.innerText = `Category: ${mainData.record[i].category}`;
      articleDiv.appendChild(p3);
    }

    for (let i = 0; i < mainData.record.length; i++) {
      mainData.record[i].category = "All";
    }
    console.log(mainData.record);

    let updatedData = JSON.stringify(mainData.record);

    console.log(updatedData);
  }
};
