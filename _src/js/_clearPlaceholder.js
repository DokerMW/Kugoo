const input = document.querySelectorAll('[data-item=placeholder]');

const clearPlaceholder = () => {
   input.forEach((e) => {
      const currentPlaceholder = e['placeholder'];

      e.addEventListener('focus', function () {
         e['placeholder'] = '';
      });
      e.addEventListener('blur', function () {
         e['placeholder'] = currentPlaceholder;
      });
   });
};

clearPlaceholder();
