const mobileMenu = document.getElementById("mobile-menu-icon");
const mobileMenuLinks = document.getElementById("mobile-menu-links");
mobileMenuLinks.style.display = "none";

let menuActive = false;

mobileMenu.addEventListener("click", () => {
    mobileMenuLinks.style.display = mobileMenuLinks.style.display == "none" ? "flex" : "none";
    });

// OLD METHOD - W3 Schools - didn't work

// function toggleMenu() {
//     console.log("Hello world!");    

//     // if(navBarLinks.style.display = "none") {
//     //     console.log("HIDDEN - needs to be displayed");
//     //     navBarLinks.style.display = "flex";
//     //     console.log("SHOWN - menu is now displayed!");
//     //     menuActive = true;
//     //     console.log(menuActive);
//     // }  
//     // else {
//     //     console.log("ACTIVE - the menu is showing");
//     //     navBarLinks.style.display = "none";
//     //     console.log("CLOSED - the menu is now closed");
//     //     menuActive = false;
//     // } 
// }