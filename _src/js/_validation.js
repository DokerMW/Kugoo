const forms = document.querySelectorAll('form');

forms.forEach((form) => {
   const validation = new JustValidate(form, {
      errorFieldCssClass: 'is-invalid',
   });
   validation
      .addField('input', [
         {
            rule: 'required',
            errorMessage: 'Укажите телефон',
         },
      ])
      .onSuccess((e) => {
         const t = e.target;
         ((e) => {
            fetch(t.getAttribute('action'), { method: t.getAttribute('method'), body: e }).then(
               (e) => {
                  e.ok
                     ? (t.reset(), modal.classList.remove('_active'))
                     : alert('Ошибка: '.response.statusText);
               }
            );
         })(new FormData(t));
      });
});

const inputTel = document.querySelectorAll('input');

inputTel.forEach((input) => {
   input.addEventListener('focus', function () {
      if (input.classList.contains('_phone')) {
         input.classList.add('_mask');
         Inputmask('+9 (999) 999-99-99', {
            placeholder: '+7 (___) __  __  __',
            clearIncomplete: true,
            clearMaskOnLostFocus: true,
         }).mask(input);
      }
   });
});
