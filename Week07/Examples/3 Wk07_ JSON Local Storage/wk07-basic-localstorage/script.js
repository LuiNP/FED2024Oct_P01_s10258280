//@Simple demo on how localStorage works
//we create localstorage items via a key/value pair
//check out your storage item in inspector -> application -> localStorage
localStorage.setItem('name', 'Luke Skywalker');
let myName  = localStorage.getItem('name');

//alert(myName);
console.log(myName);

//prints out to the html document
document.write(myName);

//retrieving directly via localStorage
console.log(`Retrieve Directly (Dot notation): ${localStorage.name}`);
console.log(`Retrieve Directly (array notation): ${localStorage['name']}`);