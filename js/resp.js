var burger = document.querySelector('.burger');
var navbar = document.querySelector('.navbar');
var rightNav = document.querySelector('.rightNav');
var navList = document.querySelector('.nav-list');
var item = document.getElementsByClassName('list-item');
burger.addEventListener('click' , () => {
    rightNav.classList.toggle('v-class-resp');
    navList.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
});
