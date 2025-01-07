//Have document ready before manipulating.
document.addEventListener("DOMContentLoaded", function() {
  //[STEP 2]: Creating our variables
  //storing simple values
  let studentId = 'T932939';
  let studentName = 'Uncle Roger';
  let studentClass = 'M94';
  let studentCreated = Date.now();

  //[STEP 3]: Store into local storage
  //store everything into localstorage
  //localStorage.setItem(<key>,<value>)  --> key/value pair
  localStorage.setItem('studentId', studentId);
  localStorage.setItem('studentName', studentName);
  localStorage.setItem('studentClass', studentClass);
  localStorage.setItem('studentCreated', studentCreated);

  //[STEP 4]: Updating our HTML
  //let's print it out slowly..
  //we use vanilla JavaScript to select our elements by their ids
  document.getElementById('student-id').innerHTML = localStorage.getItem('studentId');
  document.getElementById('student-name').innerHTML = localStorage.getItem('studentName');
  document.getElementById('student-class').innerHTML = localStorage.getItem('studentClass');
  document.getElementById('student-created').innerHTML = localStorage.getItem('studentCreated');
});
