const menuIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".close-menu");
const responsiveBar= document.querySelector("#responsive-bar");

menuIcon.addEventListener("click", () => {
    responsiveBar.style.right = "0";
    
    menuIcon.style.display = "none";
});
closeIcon.addEventListener("click", () => {
    responsiveBar.style.right = "-100%";
     
    menuIcon.style.display = "block";
});
