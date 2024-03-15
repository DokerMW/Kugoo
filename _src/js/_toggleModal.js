const modal = document.querySelector('.modal');
const modalItem = document.querySelector('.modal__item');

const toggleModal = (e, t, r) => {
   document.addEventListener('click', (s) => {
      console.log(s.target);

      (s.target.dataset.toggle == t ||
         s.target.parentNode.dataset.toggle == t ||
         (!s.composedPath().includes(r) && e.classList.contains('_active'))) &&
         (s.preventDefault(), e.classList.toggle('_active'));
   }),
      document.addEventListener('keyup', (t) => {
         'Escape' == t.key && e.classList.contains('_active') && e.classList.toggle('_active');
      });
};

toggleModal(modal, 'modal', modalItem);
