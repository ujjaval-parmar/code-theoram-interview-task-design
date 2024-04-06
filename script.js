
const menuButton = document.querySelector('.menu-button');
const menuLines = document.querySelectorAll('.line');
const headerContent = document.querySelector('.header-content');
const main = document.querySelector('.main');
const background = document.querySelector('.background');


menuButton.addEventListener('click', ()=>{
    menuButton.classList.toggle('show-menu');
    headerContent.classList.toggle('show-menu');
    main.classList.toggle('show-menu');
    background.classList.toggle('show-menu');
})


background.addEventListener('click', ()=>{
    menuButton.classList.toggle('show-menu');
    headerContent.classList.toggle('show-menu');
    main.classList.toggle('show-menu');
    background.classList.toggle('show-menu');
})


window.addEventListener('scroll', ()=>{
    if(window.scrollY >= 200){
        menuButton.classList.add('scrolled');
    }else{
        menuButton.classList.remove('scrolled')
    }
})
