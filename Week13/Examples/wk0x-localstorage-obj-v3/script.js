//start by creating a doucment ready to ensure DOM ok
document.addEventListener("DOMContentLoaded", function () {
  //[STEP 1]: Display all details in a table
  displayStudents();

  //[STEP 3]: Creating our form event listener
  //form id: frm-create-student
  document.getElementById("frm-create-student").addEventListener("submit", function (e) {
    e.preventDefault();

    //[STEP 3]: Creating our obj via form
    //creating our student obj via retrieval of form details
    //(form) txt-id, txt-name, txt-class
    let studentId = document.getElementById('txt-id').value;
    let studentName = document.getElementById('txt-name').value;
    let studentClass = document.getElementById('txt-class').value;

    //@TODO 
    //Do your own error validation
    //create only 
    //before we correct we need to do validation

    let student = new Student(studentId, studentName, studentClass);

    //[STEP 4]: Set an empty array
    let studentList = [];

    //[STEP 5]: Retrieve items from localStorage first
    if (localStorage.getItem('studentList')) {
      studentList = JSON.parse(localStorage.getItem('studentList'));
    }

    //[STEP 6]: Push obj into array
    studentList.push(student);

    //[STEP 7]: Set obj into localStorage
    //setting into localstorage as a normal obj
    //store to localstorage 
    //you can close n reopen the tab 
    //key: studentA
    //value: studentA Object
    localStorage.setItem('studentList', JSON.stringify(studentList));

    //[STEP 9]: display info in a table
    displayStudents();
  });
});//eof

//[Step 2]
//creating our student function object model "template"
function Student(studentId, studentName, studentClass) {
  this.id = studentId;
  this.studName = studentName;
  this.studClass = studentClass;
  this.created = Date.now();
}

//[STEP 8]: Create our table looper 
//Display student info in a table format
function displayStudents() {

  let studentInfo = "";

  //check whether there's localstorage'studentlist' first 
  if (localStorage.getItem('studentList')) {
    let studentList = JSON.parse(localStorage.getItem('studentList'));

    if (studentList.length) {
      for (let student of studentList) {
        studentInfo += `<tr><td>${student.id}</td><td>${student.studName}</td><td>${student.studClass}</td><td>${student.created}</td></tr>`;
      }

      //Using normal for loop
      /*
      for(let i = 0; i < studentList.length; i++){
        studentInfo += `<tr>
        <td>${student[i].id}</td>
        <td>${student[i].studName}</td>
        <td>${student[i].studClass}</td>
        <td>${student[i].created}</td>
        </tr>`;
      }
      */

      document.getElementById('student-info').innerHTML = studentInfo;
    } else {
      document.getElementById('student-info').innerHTML = 'No students found';
    }
  }

}
