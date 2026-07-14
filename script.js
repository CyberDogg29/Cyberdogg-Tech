// Cyberdogg Tech Website JavaScript

// Welcome message
window.addEventListener("load", () => {
    console.log("Welcome to Cyberdogg Tech");
});

// Smooth scrolling for navigation links
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Reveal sections on scroll
const sections = document.querySelectorAll("section");

function revealSections(){
    const trigger = window.innerHeight * 0.85;

    sections.forEach(section => {
        const top = section.getBoundingClientRect().top;

        if(top < trigger){
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        }
    });
}

sections.forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(50px)";
    section.style.transition = "all 0.8s ease";
});

window.addEventListener("scroll", revealSections);
revealSections(); 
