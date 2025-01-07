//[STEP 1]: Start with document ready
$(document).ready(function () {

  //[STEP 2]: Interface with our API
  //Depending on the API we will either use GET or POST
  $.ajax({
    method: "GET",
    url: "https://ipapi.co/json",
    //we are not sending any request data so we can ignore this field
    //data: { }
  })//[STEP 3]: when the request is successfully done it gets set to our callback function .. function(abc) to be processed
    //as this is nicely formatted json string 
    .done(function (data) {
      console.log("Data Saved: " + data);
      //we can slowly pull out the data by referencing the object that's parse back
      //data.<key>
      console.log(`Single Value retrieval`);
      console.log(`IP Address: ${data.ip}`);
      //let's just set the ip to our html first
      //do not confused the way template literals use curly braces for variables ${} with jquery $()

      $('h4 span').html(`${data.ip}`); 

      //let's apply jquery loop to loop all 
      console.log(`Looping through our keys and values`);
      for (const [key, value] of Object.entries(data)) {
        console.log(`${key}: ${value}`);
      }

      //@TODO your own way of access and displaying to the div block ip-details
      //[STEP 4]: Display in your own way to HTML :) 

    });
})



