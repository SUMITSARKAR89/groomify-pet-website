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

// =================button content ===================

const tabBtn = document.querySelectorAll(".tab-btn");
const tabContent = document.querySelectorAll(".tab-content");

tabBtn.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        tabBtn.forEach( btn => {
            btn.classList.remove("active")
        })
        btn.classList.add("active");
        

        tabContent.forEach(content => {
            content.classList.remove('tabActive');

        })
        tabContent[i].classList.add("tabActive")
    })
});

// date=================

    const dateText = document.getElementById('dateText');
    const today = new Date();
    const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
    const formattedDate = today.toLocaleDateString('en-US', options);
    dateText.textContent = `Date: ${formattedDate}`;