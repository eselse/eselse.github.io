// let menu = document.getElementById("nav-btn");
// let navbar = document.getElementById("navbar");
// let closeMenu = document.getElementById("nav-close");
// menu.addEventListener("click", navbar.classList.add("showNav"));
// closeMenu.addEventListener("click", navbar.classList.remove("showNav"));

const navButton = document.getElementById("nav-btn");
const navBar = document.getElementById("navbar");
const navClose = document.getElementById("nav-close");

navButton.addEventListener("click",() =>{
    navBar.classList.add("showNav");
});
navClose.addEventListener("click",() =>{
    navBar.classList.remove("showNav");
});