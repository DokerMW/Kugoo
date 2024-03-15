const body = document.querySelector('body');

document.addEventListener('click', function (e) {
   if (
      modal.classList.contains('_active') ||
      (menuBody.classList.contains('_active') && window.innerWidth < 991.98)
   ) {
      body.classList.add('_lock');
   } else {
      body.classList.remove('_lock');
   }
});
