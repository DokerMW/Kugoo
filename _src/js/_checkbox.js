const checkbox = document.querySelectorAll('.checkbox');

checkbox.forEach((e) => {
   e.addEventListener('click', function () {
      e.classList.toggle('_active');
      const checkboxInput = e.querySelector('.input-check');

      if (e.classList.contains('_active')) {
         checkboxInput.checked = true;
      } else {
         checkboxInput.checked = false;
      }

      if (checkboxInput.checked) {
         e.classList.add('_active');
      } else {
         e.classList.remove('_active');
      }
   });
});
