// Show or Hide Nav Menu
const menu = document.querySelector('.nav-menu');
const menuBtn = document.querySelector('#open-menu-btn');
const closeBtn = document.querySelector('#close-menu-btn');

menuBtn.addEventListener('click',() =>{
    menu.style.display="flex";
    menuBtn.style.display="none";
    closeBtn.style.display="inline-block";
})

closeBtn.addEventListener('click', () =>{
    menu.style.display="none";
    closeBtn.style.display="none"
    menuBtn.style.display="inline-block";
})

// Header Typing Effect
var typed = new Typed(".auto-type",{
    strings : ["Coder.", "Web Designer.", "Programmer.","Front End Developer.", "Backend Developer.", "Web Programmer.","Software Developer.", "Programmer."],
    typeSpeed : 100,
    backSpeed : 100,
    looped : true
})
