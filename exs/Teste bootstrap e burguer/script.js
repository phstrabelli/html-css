const hamMenu = document.querySelector('#burguer');
const offScreenMenu = document.querySelector('.offscreen-menu');
const logo = document.querySelector('#logo');

hamMenu.addEventListener('click',()=>{
hamMenu.classList.toggle('active');
offScreenMenu.classList.toggle('active');
})

let uou = false;
logo.addEventListener('click',()=>{
    if(uou) logo.style.backgroundColor="#456464";

    else logo.style.backgroundColor="red";
    uou=!uou;
})