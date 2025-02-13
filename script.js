/* script.js */
document.addEventListener("DOMContentLoaded", function() {
    console.log("Resume page loaded");
    
    let email = document.querySelector("header p a");
    email.addEventListener("mouseover", function() {
        email.style.color = "red";
    });
    email.addEventListener("mouseout", function() {
        email.style.color = "black";
    });
});
