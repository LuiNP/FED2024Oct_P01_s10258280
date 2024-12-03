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
fetch(url)
  .then(response => response.json()) 
  .then(function(data){
    console.log(data)
    console.log(data.name["name"])
  });