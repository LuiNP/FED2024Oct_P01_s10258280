document.addEventListener('DOMContentLoaded', function () {
  // Get the initial value, increment it, and update the data attribute
  var mainElement = document.getElementById('main');
  var value = mainElement.getAttribute('data-number');
  console.log('Number = ' + value);
  value = parseInt(value, 10) + 1;
  mainElement.setAttribute('data-number', value);
  console.log('New value = ' + mainElement.getAttribute('data-number'));

  // Change the data attribute of the highlighted element
  var changeElements = document.querySelectorAll('.change');
  var highlightElement = document.querySelector('.highlight');

  changeElements.forEach(function (element) {
    element.addEventListener('click', function () {
      highlightElement.setAttribute('data-color', element.getAttribute('data-color'));
    });
  });

  // Change the background color on mouseover
  highlightElement.addEventListener('mouseover', function () {
    var color = highlightElement.getAttribute('data-color');
    highlightElement.style.backgroundColor = color;
  });
});
