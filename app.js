// do something!

const body = document.querySelector('body');
const nav = document.querySelector('nav');
const toggle = document.querySelector('.toggle');

toggle.addEventListener('click', function(event) {
    body.classList.remove('preload');
    nav.classList.toggle('active');
    
    if (localStorage.getItem('sideMenu') === 'close') {
        localStorage.setItem("sideMenu", 'open');
    } else {
        localStorage.setItem("sideMenu", 'close');
    }
})

window.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('sideMenu') === 'close') {
        nav.classList.remove('active');
    } else {
        nav.classList.add('active');
    }

    body.style.visibility = 'visible';
})
