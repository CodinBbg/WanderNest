'use strict';

/**
 * navbar toggle
 */

const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const header = document.querySelector("[data-header]");

navToggleBtn.addEventListener("click", function () {
  this.classList.toggle("active");
  header.classList.toggle("active");
});



/**
 * show go top btn when scroll window to 500px
 */

const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
  window.scrollY >= 500 ? goTopBtn.classList.add("active")
    : goTopBtn.classList.remove("active");
});

// Ensure the script runs only after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Select the "Book Now" button and form section
  const bookNowButton = document.getElementById("book-now-btn");
  const formSection = document.getElementById("book-now-form");

  // Check if the elements exist to avoid errors
  if (bookNowButton && formSection) {
    // Add a click event listener to the "Book Now" button
    bookNowButton.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent the default link behavior

      // Show the form by removing the 'hidden' class
      if (formSection.classList.contains("hidden")) {
        formSection.classList.remove("hidden");

        // Smoothly scroll to the form
        formSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  } else {
    // Log an error if elements are not found
    console.error(
      "Error: 'Book Now' button or form section not found. Please check the IDs in your HTML."
    );
  }
});
