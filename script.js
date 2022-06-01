const navOpen = document.querySelector('.fa-bars');
const navClose = document.querySelector('.fa-times');
const navMenu = document.querySelector('.nav-menu');
const logo = document.querySelector('.logo');


navOpen.addEventListener('click', () => {
    navOpen.classList.toggle('hide-open');
    navClose.classList.toggle('show-close');
    navMenu.classList.toggle('show-menu');
    logo.classList.toggle('hide-logo');
});

navClose.addEventListener('click', () => {
    navOpen.classList.remove('hide-open');
    navClose.classList.remove('show-close');
    navMenu.classList.remove('show-menu');
    logo.classList.remove('hide-logo');
});

window.addEventListener('resize', () =>{
    if(window.innerWidth > 767){
        logo.classList.add('bring-logo');
    }
});
