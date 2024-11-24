//Create momobae literal object here.
let momobae = new Object();

momobae.name = "Momobae";//string
momobae.specialty = "K-pop";//string
momobae.power = 49;//number
momobae.hitpoints = 28;//number
momobae.level = 7;//number
momobae.gender = "Female";//string

/*
name: Momobae
Specialty: K-Pop
Power: 49
Hitpoints: 28
Level: 7
Gender: Female
*/
//create a new element using javascript
let newDiv = document.createElement("div");
//add class to element through javascript
newDiv.classList.add("mystyle")
// and give it some content
newDiv.innerHTML = "Name: " + momobae.name + "<br>Specialty: " + momobae.specialty + "<br>Power: " + momobae.power + "<br>Hitpoints: " + momobae.hitpoints + "<br>Level: " + momobae.level + "<br>Gender: " + momobae.gender;
//add the div to the body of the html
document.body.appendChild(newDiv);


