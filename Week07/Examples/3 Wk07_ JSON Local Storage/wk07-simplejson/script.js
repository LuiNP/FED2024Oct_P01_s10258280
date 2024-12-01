let contact = function(fname) {
  this.firstName = fname;
};
let example = new contact('Pokemon Master');
localStorage.setItem('user1', JSON.stringify(example));

let contacts = []; //let's use arrays to store more
contacts.push(JSON.parse(localStorage.getItem('user1')));
let temp = document.getElementById("name").innerHTML;

let fname = contacts[0].firstName;

document.getElementById("name").innerHTML = fname;
//alert(contacts[0].firstName);
