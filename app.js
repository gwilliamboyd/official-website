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

  // Scroll down home page - offset by nav bar height
  /* const navbar = document.getElementById('#nav-bar');
  let navbarHeight = navbar.offsetHeight;
  let navbarWidth = navbar.offsetWidth;
  console.log(navbarHeight);
  console.log(navbarWidth);

  let domRect = navbar.getBoundingClientRect();
  console.log(domRect);
 */

/*   if(window.scrollY > 0) {
    console.log('Window scrolled!');
  } else if(window.scrollY === 0) {
    console.log('At the top!');
  }
  
  console.log(window.scrollY); */

 /*  document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM content is loaded');
    
  }); */

// navbar.style.opacity = '1.0';

// mobileMenu.style.color = 'red';
// console.log(mobileMenu.style);
userHasScrolled = false;
window.onscroll = function ()
{
  //console.log(navbar.style.display);
  //navbar.style.opacity = 1;
  if(window.scrollY === 0) {
    userHasScrolled = false;
    // navbar.style.opacity = 1;

  } else {
    userHasScrolled = true;
    // navbar.style.opacity = 0.5;
  }
  console.log(userHasScrolled);
}
console.log(userHasScrolled);


function scrollHome(){
  window.scrollTo(0, 0);
}

function scrollWork(){
    const workBody = document.getElementById('body-work');
    let headerOffset = 60;
    let workBodyPosition = workBody.getBoundingClientRect().top;
    let offsetPosition = workBodyPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
    });
}
function scrollAboutMe(){
    const aboutMeBody = document.getElementById('body-about-me');
    let headerOffset = 60;
    let aboutMeBodyPosition = aboutMeBody.getBoundingClientRect().top;
    let offsetPosition = aboutMeBodyPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
    });
}
function scrollContact(){
    const contactBody = document.getElementById('body-contact');
    let headerOffset = 45;
    let contactBodyPosition = contactBody.getBoundingClientRect().top;
    let offsetPosition = contactBodyPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
    });
}