const menuBtnEl = document.querySelector('.menu-btn');
const burgerEl = document.querySelector('.burger');
const crossEl = document.querySelector('.cross');
const navListEl = document.querySelector('.navigation');

menuBtnEl.addEventListener('click', () => {
    burgerEl.classList.toggle('js-hide');
    crossEl.classList.toggle('js-hide');
    navListEl.classList.toggle('js-hide');
})