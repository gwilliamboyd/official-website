// Mobile menu - show and hide
const mobileMenu = document.getElementById("mobile-menu-icon");
const mobileMenuLinks = document.getElementById("mobile-menu-links");
mobileMenuLinks.style.display = "none";

let menuActive = false;

mobileMenu.addEventListener("click", () => {
    mobileMenuLinks.style.display = mobileMenuLinks.style.display == "none" ? "flex" : "none";
    });

// Scroll down home page - offset by nav bar height

/* function scrollWork() {
    const navbar = document.getElementById('#nav-bar');
    //const navbarHeight = navbar.style.height;
    //console.log(navbarHeight);

    const workBody = document.getElementById("body-work");    
    workBody.scrollIntoView().window.scrollBy(0, -50);
    //window.scrollBy(0, 50);
    //window.scroll
    console.log(window.screenY);
  } */

  function scrollHome(){
    window.scrollTo(0, 0);
  }

function scrollWork(){
    const workBody = document.getElementById('body-work');
    let headerOffset = 80;
    let workBodyPosition = workBody.getBoundingClientRect().top;
    let offsetPosition = workBodyPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
    });
}
function scrollAboutMe(){
    const aboutMeBody = document.getElementById('body-about-me');
    let headerOffset = 120;
    let aboutMeBodyPosition = aboutMeBody.getBoundingClientRect().top;
    let offsetPosition = aboutMeBodyPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
    });
}
function scrollContact(){
    const contactBody = document.getElementById('body-contact');
    let headerOffset = 30;
    let contactBodyPosition = contactBody.getBoundingClientRect().top;
    let offsetPosition = contactBodyPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
    });
}