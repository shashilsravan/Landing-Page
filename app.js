var navToggle = document.querySelector('.nav-toggle');
var links = document.querySelector('.links');
var linksContainer = document.querySelector('.links-container');
navToggle.addEventListener('click', function(){
    // navToggle.classList.toggle('show');
    // linksContainer.classList.toggle('show-links');
    const linksHeight = links.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    console.log(linksHeight);
    if (containerHeight === 0) {
        linksContainer.style.height = `${linksHeight}px`;
        navToggle.classList.toggle('show');
    }
    else{
        linksContainer.style.height = 0;
    }
});

const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", function () {
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;
    if (scrollHeight > navHeight) {
        navbar.classList.add("fixed-nav");
    }
    else {
        navbar.classList.remove("fixed-nav");
    }
    if (scrollHeight > 500) {
        topLink.classList.add("show-link");
    }
    else {
        topLink.classList.remove("show-link");
    }
});
const scrollLinks = document.querySelectorAll('.scroll-link');
scrollLinks.forEach(function(link){
    link.addEventListener('click', function(e){
        e.preventDefault();
        const id = e.currentTarget.getAttribute("href").slice(1);
        const element = document.getElementById(id);
        const navHeight = navbar.getBoundingClientRect().height;
        const containerHeight = linksContainer.getBoundingClientRect().height;
        const fixedNav = navbar.classList.contains("fixed-nav");
        let position = element.offsetTop - navHeight;
        if (!fixedNav) {
            position = position - navHeight;
        }
        if (navHeight > 82) {
            position = position + containerHeight - 40;
        }
        window.scrollTo({
            left: 0,
            top: position,
        });
        linksContainer.style.height = 0;
    })
})
