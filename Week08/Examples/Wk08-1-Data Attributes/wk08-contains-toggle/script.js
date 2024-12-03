document.addEventListener('DOMContentLoaded', function () {
  var specialElements = document.querySelectorAll('.special');

  specialElements.forEach(function (element) {
    element.addEventListener('click', function () {
      if (element.classList.contains('red')) {
        element.classList.remove('red');
        element.classList.add('green');
      } else {
        element.classList.remove('green');
        element.classList.add('red');
      }
    });
  });
});
