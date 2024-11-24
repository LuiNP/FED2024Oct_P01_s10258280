for (???) {
  if (???) {
    //when i is even
    //create a new element using javascript
    let newDiv = document.createElement("div");
    //add class to element through javascript
    newDiv.classList.add("even")
    // and give it some content
    let newContent = document.createTextNode(""+ i+"(even)");
    // add the text node to the newly created div
    newDiv.appendChild(newContent);
    //add the div to the body of the html
    document.body.appendChild(newDiv);
  } else {
    //create a new element using javascript
    let newDiv = document.createElement("div");
    //add class to element through javascript
    newDiv.classList.add("odd")
    // and give it some content
    let newContent = document.createTextNode(""+ i);
    // add the text node to the newly created div
    newDiv.appendChild(newContent);
    //add the div to the body of the html
    document.body.appendChild(newDiv);
  }
}