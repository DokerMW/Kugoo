const modal = document.querySelector('.modal'),
   modalThx = document.querySelector('.modal-thx'),
   modalDialog = document.querySelector('.modal-dialog'),
   modalThxDialog = document.querySelector('.modal-thx-dialog');

const toggleModal = (e, t, r) => {
   document.addEventListener('click', (s) => {
      (s.target.dataset.toggle == t ||
         s.target.parentNode.dataset.toggle == t ||
         (!s.composedPath().includes(r) && e.classList.contains('_active'))) &&
         (s.preventDefault(), e.classList.toggle('_active'));
   }),
      document.addEventListener('keyup', (t) => {
         'Escape' == t.key && e.classList.contains('_active') && e.classList.toggle('_active');
      });
};

toggleModal(modal, 'modal', modalDialog);
toggleModal(modalThx, 'modal-thx', modalThxDialog);
