const checkbox = document.querySelectorAll('.checkbox');

checkbox.forEach((e) => {
   e.addEventListener('click', function () {
      e.classList.toggle('_active');
      const checkboxInput = e.querySelector('.input-check');

      if (checkbox.classList.contains('_active')) {
         checkboxInput.checked = true;
      } else {
         checkboxInput.checked = false;
      }

      if (checkboxInput.checked) {
         checkbox.classList.add('_active');
      } else {
         checkbox.classList.remove('_active');
      }
   });
});
