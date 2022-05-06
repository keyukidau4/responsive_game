let menuIcon = document.querySelector(".menu-icon");
let menu = document.querySelector(".menu");


menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("move");
    menu.classList.toggle("active");
});

// Notification

let bell = document.querySelector(".notification");
let bellIcon = document.querySelector("#bell-icon");

bellIcon.addEventListener("mouseover",()=>{
    bell.classList.add("active");
});

bellIcon.addEventListener("mouseout",()=>{
    bell.classList.remove("active");
});



