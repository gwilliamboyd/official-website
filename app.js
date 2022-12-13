const mobileMenu = document.getElementById("mobile-menu-icon");
const mobileMenuLinks = document.getElementById("mobile-menu-links");
mobileMenuLinks.style.display = "none";

let menuActive = false;

mobileMenu.addEventListener("click", () => {
    mobileMenuLinks.style.display = mobileMenuLinks.style.display == "none" ? "flex" : "none";
    });