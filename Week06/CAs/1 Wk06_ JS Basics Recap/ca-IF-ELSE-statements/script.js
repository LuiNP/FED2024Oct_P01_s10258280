//Students to take note of how we can use javascript to modify css. These you can use for your assignment to program interactivity.

let isSunny = false;
let isCloudy = true;
let isEveGoing =true;
let isTuesday = false;
let isJaniceGoing = false;

//HTML DOM method of storing the button element references to a var.
var button = document.getElementById("compute");

//using the var button reference to add an event listener.
button.addEventListener("click" , function(){

  if((???){
    //changing background color of the html element via javascript through html dom method.
      document.getElementById("Going").style.backgroundColor = "green";
      
  } else {
    //changing background color of the html element via javascript through html dom method.
      document.getElementById("notGoing").style.backgroundColor = "green";
  }
});