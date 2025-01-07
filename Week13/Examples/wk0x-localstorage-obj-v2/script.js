document.addEventListener("DOMContentLoaded", function () {
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
    let student = new Student(studentId, studentName, studentClass);

    //[STEP 4]: Set obj into localStorage
    //setting into localstorage as a normal obj
    //store to localstorage 
    //you can close n reopen the tab 
    //key: studentA
    //value: studentA Object
    localStorage.setItem('student', JSON.stringify(student));

    //let's retrieve the item (studentA) using getItem 
    let studentLocalStore = JSON.parse(localStorage.getItem('student'));

    //[STEP 5]: Print obj data from localStorage
    //let's print it out slowly..
    //we use vanilla JavaScript to select our elements by their ids
    document.getElementById('student-id').innerHTML = studentLocalStore.id;
    document.getElementById('student-name').innerHTML = studentLocalStore.studName;
    document.getElementById('student-class').innerHTML = studentLocalStore.studClass;
    document.getElementById('student-created').innerHTML = studentLocalStore.created;
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
