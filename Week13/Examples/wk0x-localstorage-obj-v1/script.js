document.addEventListener("DOMContentLoaded", function () {
  //[Step 3]
  //creating our student obj
  let studentA = new Student('T939329F', 'Phil', 'M02');

  //setting into localstorage as a normal obj
  //store to localstorage 
  //you can close and reopen the tab 
  //key: studentA
  //value: studentA Object
  localStorage.setItem('studentA', JSON.stringify(studentA));

  //let's retrieve the item (studentA) using getItem 
  let studentLocalStore = JSON.parse(localStorage.getItem('studentA'));

  //let's print it out slowly..
  //we use vanilla JavaScript to select our elements by their ids
  document.getElementById('student-id').innerHTML = studentLocalStore.id;
  document.getElementById('student-name').innerHTML = studentLocalStore.studName;
  document.getElementById('student-class').innerHTML = studentLocalStore.studClass;
  document.getElementById('student-created').innerHTML = studentLocalStore.created;
});

//[Step 2]
//creating our student function object model "template"
function Student(studentId, studentName, studentClass) {
  this.id = studentId;
  this.studName = studentName;
  this.studClass = studentClass;
  this.created = Date.now();
}

var x = new Student("T01", "Uncle Roger", 'Class01');
//properties and values tagged to x object 
//this.id ==> T01
//this.studName ==> Uncle Roger
//this.create ==> Class01
