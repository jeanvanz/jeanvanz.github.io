// Navigation Section
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

// Scroll Reveal Section
const sr = ScrollReveal ({
    distance: '40px',
    duration: 2050,
    delay: 200,
    reset: true
})

sr.reveal('.home',{origin: 'top'});
sr.reveal('.about',{origin: 'bottom'});
sr.reveal('.projects',{origin: 'top'});