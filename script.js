/* script.js - Enhancing Interactivity & Professionalism */

document.addEventListener("DOMContentLoaded", function () {
    console.log("Resume page successfully loaded");

    // Select the email link inside the header
    const emailLink = document.querySelector("header p a");

    if (emailLink) {
        // Add smooth hover effects for better UI interaction
        emailLink.addEventListener("mouseover", function () {
            emailLink.style.color = "#0073e6"; // Professional Blue
            emailLink.style.transition = "color 0.3s ease-in-out";
        });

        emailLink.addEventListener("mouseout", function () {
            emailLink.style.color = "#FF0000"; // Default Dark Gray
        });
    } else {
        console.warn("Email link not found in the header.");
    }
});

