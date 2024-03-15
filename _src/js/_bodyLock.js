const body = document.querySelector('body');

document.addEventListener('click', function () {
   return modal.classList.contains('_active')
      ? body.classList.add('_lock')
      : body.classList.remove('_lock');
});
