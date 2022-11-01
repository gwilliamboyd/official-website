const mobileMenu = document.getElementById("mobile-menu-icon");
const navBarLinks = document.getElementById("nav-bar-links");
navBarLinks.style.display = "none";

let menuActive = false;

mobileMenu.addEventListener("click", () => {
    navBarLinks.style.display = navBarLinks.style.display == "none" ? "flex" : "none";
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