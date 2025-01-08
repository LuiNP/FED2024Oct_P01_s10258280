//[STEP 0]: Make sure our document is A-OK
document.addEventListener("DOMContentLoaded", function () {
  // What kind of interface we want at the start 
  const APIKEY = "5ffa0351823229477922c949";
  getStudents();
  document.getElementById("update-student-container").style.display = "none";
  document.getElementById("add-update-msg").style.display = "none";

  //[STEP 1]: Create our submit form listener
  document.getElementById("student-submit").addEventListener("click", function (e) {
    // Prevent default action of the button 
    e.preventDefault();

    //[STEP 2]: Let's retrieve form data
    // For now, we assume all information is valid
    // You are to do your own data validation
    let studentName = document.getElementById("student-name").value;
    let studentEmail = document.getElementById("student-email").value;
    let studentMessage = document.getElementById("student-msg").value;

    //[STEP 3]: Get form values when the user clicks on send
    // Adapted from restdb API
    let jsondata = {
      "name": studentName,
      "email": studentEmail,
      "message": studentMessage
    };

    //[STEP 4]: Create our AJAX settings. Take note of API key
    let settings = {
      method: "POST", //[cher] we will use post to send info
      headers: {
        "Content-Type": "application/json",
        "x-apikey": APIKEY,
        "Cache-Control": "no-cache"
      },
      body: JSON.stringify(jsondata),
      beforeSend: function () {
        //@TODO use loading bar instead
        // Disable our button or show loading bar
        document.getElementById("student-submit").disabled = true;
        // Clear our form using the form ID and triggering its reset feature
        document.getElementById("add-student-form").reset();
      }
    }

    //[STEP 5]: Send our AJAX request over to the DB and print response of the RESTDB storage to console.
    fetch("https://interactivedev-adbb.restdb.io/rest/student", settings)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        document.getElementById("student-submit").disabled = false;
        //@TODO update frontend UI 
        document.getElementById("add-update-msg").style.display = "block";
        setTimeout(function () {
          document.getElementById("add-update-msg").style.display = "none";
        }, 3000);
        // Update our table 
        getStudents();
      });
  });//end click 


  //[STEP] 6
  // Let's create a function to allow you to retrieve all the information in your students
  // By default, we only retrieve 10 results
  function getStudents(limit = 10, all = true) {

    //[STEP 7]: Create our AJAX settings
    let settings = {
      method: "GET", //[cher] we will use GET to retrieve info
      headers: {
        "Content-Type": "application/json",
        "x-apikey": APIKEY,
        "Cache-Control": "no-cache"
      },
    }

    //[STEP 8]: Make our AJAX calls
    // Once we get the response, we modify our table content by creating the content internally. We run a loop to continuously add on data
    // RESTDb/NoSql always adds in a unique id for each data; we tap on it to have our data and place it into our links 
    fetch("https://interactivedev-adbb.restdb.io/rest/student", settings)
      .then(response => response.json())
      .then(response => {
        let content = "";

        for (var i = 0; i < response.length && i < limit; i++) {
          //console.log(response[i]);
          //[METHOD 1]
          // Let's run our loop and slowly append content
          // We can use the normal string append += method
          /*
          content += "<tr><td>" + response[i].name + "</td>" +
            "<td>" + response[i].email + "</td>" +
            "<td>" + response[i].message + "</td>
            "<td>Del</td><td>Update</td</tr>";
          */

          //[METHOD 2]
          // Using our template literal method using backticks
          // Take note that we can't use += for template literal strings
          // We use ${content} because -> content += content 
          // We want to add on previous content at the same time
          content = `${content}<tr id='${response[i]._id}'><td>${response[i].name}</td>
          <td>${response[i].email}</td>
          <td>${response[i].message}</td>
          <td><a href='#' class='delete' data-id='${response[i]._id}'>Del</a></td><td><a href='#update-student-container' class='update' data-id='${response[i]._id}' data-msg='${response[i].message}' data-name='${response[i].name}' data-email='${response[i].email}'>Update</a></td></tr>`;

        }

        //[STEP 9]: Update our HTML content
        // Let's dump the content into our table body
        document.getElementById("student-list").getElementsByTagName("tbody")[0].innerHTML = content;

        document.getElementById("total-students").innerHTML = response.length;
      });
  }

  //[STEP 10]: Create our update listener
  // Here we tap onto our previous table when we click on update
  // This is a delegation feature of jQuery
  // Because our content is dynamic in nature, we listen in on the main container which is "#student-list". For each row, we have a class .update to help us
  document.getElementById("student-list").addEventListener("click", function (e) {
    if (e.target.classList.contains("update")) {
      e.preventDefault();
      // Update our update form values
      let studentName = e.target.getAttribute("data-name");
      let studentEmail = e.target.getAttribute("data-email");
      let studentMsg = e.target.getAttribute("data-msg");
      let studentId = e.target.getAttribute("data-id");
      console.log(e.target.getAttribute("data-msg"));

      //[STEP 11]: Load in our data from the selected row and add it to our update student form 
      document.getElementById("update-student-name").value = studentName;
      document.getElementById("update-student-email").value = studentEmail;
      document.getElementById("update-student-msg").value = studentMsg;
      document.getElementById("update-student-id").value = studentId;
      document.getElementById("update-student-container").style.display = "block";
    }
  });//end student-list listener for update function

  //[STEP 12]: Here we load in our student form data
  // Update form listener
  document.getElementById("update-student-submit").addEventListener("click", function (e) {
    e.preventDefault();
    // Retrieve all my update form values
    let studentName = document.getElementById("update-student-name").value;
    let studentEmail = document.getElementById("update-student-email").value;
    let studentMsg = document.getElementById("update-student-msg").value;
    let studentId = document.getElementById("update-student-id").value;

    console.log(document.getElementById("update-student-msg").value);
    console.log(studentMsg);

    //[STEP 12a]: We call our update form function which makes an AJAX call to our RESTDB to update the selected information
    updateForm(studentId, studentName, studentEmail, studentMsg);
  });//end updatestudentform listener

  //[STEP 13]: Function that makes an AJAX call and processes it 
  // UPDATE Based on the ID chosen
  function updateForm(id, studentName, studentEmail, studentMsg) {
    //@TODO create validation methods for id etc. 

    var jsondata = { "name": studentName, "email": studentEmail, "message": studentMsg };
    var settings = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "x-apikey": APIKEY,
        "Cache-Control": "no-cache"
      },
      body: JSON.stringify(jsondata)
    }

    //[STEP 13a]: Send our AJAX request and hide the update student form
    fetch(`https://interactivedev-adbb.restdb.io/rest/student/${id}`, settings)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        document.getElementById("update-student-container").style.display = "none";
        // Update our students table
        getStudents();
      });
  }//end updateform function

});
