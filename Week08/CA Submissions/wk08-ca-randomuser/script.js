// https://randomuser.me/api/
//@TODO use only the fetch web api 

let url = 'https://randomuser.me/api/';


//modify this fetch method to the required settings.
/*
fetch()
  .then()
  .then();
*/


//insert and modify to your needs
/*fetch(url)
  .then(response => response.json()) 
  .then(function(data){
    console.log(data)
    console.log(data.name["name"])
  });*/



let email = document.getElementById("email")
let avatar = document.getElementById("avatar")
let fullname = document.getElementById("fullname")
let username = document.getElementById("username")
let city = document.getElementById("city")

let btn = document.getElementById("btn")

async function getUser()
{
  let data = await fetch(url).then(res=>res.json())
  console.log(data)
  let dEmail = data.results[0].email

  let dAvatar = data.results[0].picture.large

  let dFullName = data.results[0].name.first + " " + data.results[0].name.last

  let dCity = data.results[0].location.city

  let dUsername = data.results[0].login.username

  email.innerHTML = dEmail;

  avatar.setAttribute("src", dAvatar);

  city.innerHTML = dCity;

  fullname.innerHTML = dFullName;

  username.innerHTML = dUsername;

}



document.addEventListener("DOMContentLoaded", getUser)
btn.addEventListener("click", getUser)
