const inputTel = document.querySelectorAll('input');

const forms = document.querySelectorAll('._send');

forms.forEach((form) => {
   const validation = new JustValidate(form, {
      errorFieldCssClass: 'is-invalid',
   });
   validation
      .addField('[name=usertel]', [
         {
            rule: 'required',
            errorMessage: 'Укажите телефон',
         },
      ])
      .addField('[name=checkbox]', [
         {
            rule: 'required',
            errorMessage: ' ',
         },
      ])
      .onSuccess((event) => {
         const thisForm = event.target;
         const formData = new FormData(thisForm);
         const ajaxSend = (formData) => {
            fetch(thisForm.getAttribute('action'), {
               method: thisForm.getAttribute('method'),
               body: formData,
            }).then((response) => {
               if (response.ok) {
                  thisForm.reset(),
                     modal.classList.remove('_active'),
                     modalThx.classList.add('_active');
               } else {
                  alert('Ошибка: '.response.statusText);
               }
            });
         };
         ajaxSend();
      });
});

inputTel.forEach((input) => {
   input.addEventListener('focus', function () {
      if (input.classList.contains('_phone')) {
         input.classList.add('_mask');
         Inputmask('+9 (999) 999-99-99', {
            placeholder: '+7 (___) __  __  __',
            clearIncomplete: !0,
            clearMaskOnLostFocus: true,
         }).mask(input);
      }
   });
});
