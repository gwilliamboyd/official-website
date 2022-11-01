function displayMenu() {
    console.log("Mobile menu clicked!");
    const navBarLinks = document.getElementById("nav-bar-links");
    if(navBarLinks.style.display === "block") {
        navBarLinks.style.display === "none";
    } else {
        navBarLinks.style.display === "block";
    }
}