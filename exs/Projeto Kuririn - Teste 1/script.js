const hamMenu = document.querySelector('#burguer');
const offScreenMenu = document.querySelector('.offscreen-menu');

hamMenu.addEventListener('click',()=>{
hamMenu.classList.toggle('active');
offScreenMenu.classList.toggle('active');
})