const menuBody=document.querySelector(".body-main"),menuBtn=document.querySelector(".menu-main__button"),menuBtnIcon=document.querySelector(".btn-icon"),toggleMenu=()=>{document.addEventListener("click",(function(e){e.composedPath().includes(menuBtn)?(menuBody.classList.toggle("_active"),menuBtnIcon.classList.toggle("_active")):e.composedPath().includes(menuBody)||e.composedPath().includes(menuBtn)||(menuBody.classList.remove("_active"),menuBtnIcon.classList.remove("_active"))}))};toggleMenu();const input=document.querySelectorAll("[data-item=placeholder]"),clearPlaceholder=()=>{input.forEach((e=>{const t=e.placeholder;e.addEventListener("focus",(function(){e.placeholder=""})),e.addEventListener("blur",(function(){e.placeholder=t}))}))};clearPlaceholder();const modal=document.querySelector(".modal"),modalItem=document.querySelector(".modal__item"),toggleModal=(e,t,o)=>{document.addEventListener("click",(n=>{console.log(n.target),(n.target.dataset.toggle==t||n.target.parentNode.dataset.toggle==t||!n.composedPath().includes(o)&&e.classList.contains("_active"))&&(n.preventDefault(),e.classList.toggle("_active"))})),document.addEventListener("keyup",(t=>{"Escape"==t.key&&e.classList.contains("_active")&&e.classList.toggle("_active")}))};toggleModal(modal,"modal",modalItem);