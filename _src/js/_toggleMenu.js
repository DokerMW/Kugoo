const menuBody = document.querySelector('.body-main');
const menuBtn = document.querySelector('.menu-main__button');
const menuBtnIcon = document.querySelector('.btn-icon');

const toggleMenu = () => {
   document.addEventListener('click', function (e) {
      if (e.composedPath().includes(menuBtn)) {
         menuBody.classList.toggle('_active');
         menuBtnIcon.classList.toggle('_active');
      } else if (!e.composedPath().includes(menuBody) && !e.composedPath().includes(menuBtn)) {
         menuBody.classList.remove('_active');
         menuBtnIcon.classList.remove('_active');
      }
   });
};

toggleMenu();
