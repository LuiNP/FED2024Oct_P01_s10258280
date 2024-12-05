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



let email = document.getElementById("email")//these document.get element by id basically means to select the html elements, which will allow to link to these js variables
let avatar = document.getElementById("avatar")//let name = is a variable guys, we know this
let fullname = document.getElementById("fullname")
let username = document.getElementById("username")
let city = document.getElementById("city")

let btn = document.getElementById("btn")

async function getUser()
{
  let data = await fetch(url).then(res=>res.json())//fetches the data from the url, then(that's what the THEN is for) convert to json object with the res => res.json
  //Note from WM: notice how the await means the function needs the async tag? that's just JS
  /*
  Here's the thing about async and await:
  imagine you're at a table and your notebook is on another table. You can just reach out, but for computers where the notebook is in another server they can't do that
  they need to go through the server to get it. That's where async comes from, it tells the JS to execute it asynchronouusly because "sorry, i'll be some time" - WM

  and in await, it tells the program's op flow to wait and let it finish it's operation before moving on. 
  With await, it'll fetch the url and convert to json object then print to console. This sparks joy
  Without await, program will see the operation, start it but move on before it's done and see the console.log and print - this means it'll print before the data is done being fetched. This does not spark joy

  */
  //
  console.log(data)//print to console just to see data for checking
  let dEmail = data.results[0].email//basically just calling the elements of the data element
  //rememeber the data element is an array
  //you need to do the dots to go down a branch(ie from data is info and results, sleect results)
  //results has email, picture, name etc. select email
  let dAvatar = data.results[0].picture.large

  let dFullName = data.results[0].name.first + " " + data.results[0].name.last // you can concantenate with string

  let dCity = data.results[0].location.city

  let dUsername = data.results[0].login.username

  email.innerHTML = dEmail;

  avatar.setAttribute("src", dAvatar);//set attribute is to change the source of something, if you're changing text then jsut use innerhtml

  city.innerHTML = dCity;

  fullname.innerHTML = dFullName;

  username.innerHTML = dUsername;

}

//assign whatever the fethc gets from the url as the data...because it's the data

document.addEventListener("DOMContentLoaded", getUser)
btn.addEventListener("click", getUser)
//add event listener means that the js will *listen* for the event, and if triggered(here is dom content loaded, basically when the webpage is loaded)
//-the function will activate, here the get user WM defined

//for the event listener click, that means to activate the get user function when the button is triggered with a click

//also btw fullname is first name + last name
