const hamburguerIcon = document.querySelector('.hero__hamburger-icon');
const menuModal = document.querySelector('.hero__menu--modal');
const heroArrow = document.querySelector('.hero__arrow');

hamburguerIcon.addEventListener('click', (e) =>{
    e.stopImmediatePropagation();
    menuModal.classList.toggle('hide');
    heroArrow.classList.toggle('hide');
});

document.addEventListener('click', (e) => {
  if (!menuModal.contains(e.target)) {
    menuModal.classList.add('hide');
    heroArrow.classList.remove('hide');
  }
});
