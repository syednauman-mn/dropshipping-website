// ===========================
// MOBILE MENU
// ===========================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});

// ===========================
// CLOSE MENU AFTER CLICKING
// ===========================

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});

// ===========================
// SCROLL EFFECT FOR NAVBAR
// ===========================

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if (window.scrollY > 50) {

        header.style.background = "rgba(5,15,30,0.95)";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.4)";

    } else {

        header.style.background = "rgba(5,15,30,0.65)";
        header.style.boxShadow = "none";

    }

});

// ===========================
// SCROLL REVEAL ANIMATION
// ===========================

const sections = document.querySelectorAll("section");

const revealSections = () => {

    const triggerBottom = window.innerHeight * 0.85;

    sections.forEach(section => {

        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < triggerBottom) {

            section.style.opacity = "1";
            section.style.transform = "translateY(0)";

        }

    });

};

sections.forEach(section => {

    section.style.opacity = "0";
    section.style.transform = "translateY(40px)";
    section.style.transition = "all 0.8s ease";

});

window.addEventListener("scroll", revealSections);
window.addEventListener("load", revealSections);
