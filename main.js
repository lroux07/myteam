import './style.css';
const open = document.querySelector('#menu');
const close = document.querySelector('#closeMenu');
let openMenu = false;
const div = document.querySelector('.divMenu');

function clickMenu() {
    if(openMenu) {
        openMenu = false;
        div.classList.remove('open');
        close.style.display = "none";

    } else {
        openMenu = true
        div.classList.add('open');
        close.style.display = "flex";
    }
}
open.addEventListener('click', clickMenu);



let closeMenu = true;

function closeMenuBtn() {
    if(closeMenu) {
        closeMenu = false;
        close.classList.remove('closeActive');
    } else {
        closeMenu = true
        close.classList.add('closeActive');
    }
}
close.addEventListener("click", closeMenuBtn);