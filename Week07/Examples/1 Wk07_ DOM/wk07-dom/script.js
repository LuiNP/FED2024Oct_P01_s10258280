console.log(`Retrieve by ID`);
let getID = document.getElementById('one');
console.log(`Retrieve by ID: ${getID.innerHTML}`);

console.log(`\nRetrieve by ClassName`);
let getHot = document.getElementsByClassName('hot');
for(let i = 0; i < getHot.length; i++){
  console.log(`Retrieve by ClassName: ${getHot[i].innerHTML}`);
}

console.log(`\nRetrieve by TagName`);
let getTag = document.getElementsByTagName('li');
for(let i = 0; i < getTag.length; i++){
  console.log(`Retrieve by TagName: ${getTag[i].innerHTML}`);
}

//Query Selector retrieves the first result only
console.log(`\nRetrieve by QuerySelector`);
let getQuery = document.querySelector('#one');
console.log(`Retrieve by QuerySelector (Find an ID): ${getQuery.innerHTML}`);

getQuery = document.querySelector('.hot');
console.log(`Retrieve by QuerySelector (Find a Class): ${getQuery.innerHTML}`);

getQuery = document.querySelector('h1');
console.log(`Retrieve by QuerySelector (Find a Tag): ${getQuery.innerHTML}`);

//QuerySelectorAll retrieves all results and returns in a list(array)
console.log(`\nRetrieve by QuerySelectorAll`);
let getQueryAll = document.querySelectorAll('li');
for(let i = 0; i < getQueryAll.length; i++){
  console.log(`Retrieve by QuerySelectorAll: ${getQueryAll[i].innerHTML}`);
}
console.log("\n");
getQueryAll = document.querySelectorAll('#header, .hot');
for(let i = 0; i < getQueryAll.length; i++){
  console.log(`Retrieve by QuerySelectorAll: ${getQueryAll[i].innerHTML}`);
}

/*
Reading list
https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll
*/
