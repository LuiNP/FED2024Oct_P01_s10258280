let checker = document.getElementById('checker');
checker.addEventListener('click', function() {
  console.log('hi');
  const checkboxes = document.querySelectorAll('input[name="chkFood"]:checked');

  //perform loop to cycle through checked values
  //using for .. of loop 
  let userInputEl = document.getElementById('userInput');
  let userInput = "";
  for (let chk of checkboxes) {
    console.log(chk.value);
    userInput += `<li>${chk.value}</li>`
  }
  console.log(userInput);
  userInputEl.innerHTML = userInput;

}, false);

//Radio buttons
let rdoChecker = document.getElementById('rdoChecker');
rdoChecker.addEventListener('click', function() {
  let rdoValue = document.querySelector('input[name="rdoFood"]:checked').value;
  let rdoInput = document.getElementById('rdoInput');
  console.log(rdoValue);
  rdoInput.innerHTML = rdoValue;
}, false);


