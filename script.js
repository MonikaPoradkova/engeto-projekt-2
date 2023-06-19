const navMenu = document.querySelector(".nav-menu")
const hamburger = document.querySelector(".hamburger")

hamburger.addEventListener("click", () =>{    
    navMenu.classList.toggle("active");
   hamburger.classList.toggle("active");
})