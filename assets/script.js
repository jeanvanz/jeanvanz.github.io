const header = document.querySelector("header");

window.addEventListener("scroll", function(){
    header.classList.toggle ("sticky", window.scrollY > 200)
});

let menu = document.querySelector("#menuIcon");

let headerNav = document.querySelector(".headerNav");

menu.onclick = () => {
    menu.classList.toggle("bx-x");
    headerNav.classList.toggle("open");
}