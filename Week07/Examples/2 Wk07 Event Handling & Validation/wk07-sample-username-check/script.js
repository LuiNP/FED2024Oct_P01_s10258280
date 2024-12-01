//the e defined in this function refers to the event that occured
function checkUsername(e){
  console.log("entering check username")
  errorMsg = "";
  let username = document.getElementById('username').value;
  //let username = e.target.value; //same as calling the element except we are passing the reference of the event element that was triggered
  //console.log(username.value);
  if(username.length < 5){
  	errorMsg = `Hohoho...  you input less than <b>5 characters</b>`;
    console.log(errorMsg);
		document.getElementById('errorUsername').innerHTML = errorMsg;
  }else{
    document.getElementById('errorUsername').innerHTML = "";
  }
}
var txtUserName = document.getElementById('username');

txtUserName.addEventListener('blur', checkUsername, false);
//console.log("hi");

