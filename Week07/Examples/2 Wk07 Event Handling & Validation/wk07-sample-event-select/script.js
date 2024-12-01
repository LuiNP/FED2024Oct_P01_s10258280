let locations = document.getElementById('locations');

locations.addEventListener('change', function(event) {
  console.log(event.target.value);
  document.getElementById('selected').textContent = event.target.value;
});

let multiLocations = document.getElementById('multi-locations');

multiLocations.addEventListener('click', function(e) {
  console.log('clicked');
  let values = [];
  //loop through those that were selected and assign to array
  for (var i = 0; i < multiLocations.length; i++) {
    if (multiLocations.options[i].selected) {
      values.push(multiLocations.options[i].value);
    }
  }

  let msg = "";
  //create a message list of values
  for (var val of values) {
    msg += `<li>${val}</li>`;
  }
  //print to HTML
  document.getElementById('multi-selected').innerHTML = msg;
  console.log(values);
});
