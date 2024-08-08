var headerLogo = document.querySelector(".header-logo");

window.addEventListener("scroll", function() {
    if (window.scrollY > 50) {
        headerLogo.classList.add("shrink");
    } else {
        headerLogo.classList.remove("shrink");
    }
});