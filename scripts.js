// Smooth scrolling for anchor links
document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("nav ul li a");
    for (const link of links) {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            targetElement.scrollIntoView({
                behavior: "smooth",
            });
        });
    }

// Updated JavaScript for the volunteer form
    const volunteerForm = document.getElementById("volunteer-form");
    const volunteerName = document.getElementById("volunteer-name");
    const volunteerEmail = document.getElementById("volunteer-email");
    const volunteerAvailability = document.getElementById("availability");

    volunteerForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const name = volunteerName.value;
        const email = volunteerEmail.value;
        const availability = volunteerAvailability.value;

        // Handle form data (e.g., send it to a server)
        console.log("Volunteer Form Submitted!");
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Availability:", availability);

        // Optionally, display a success message or clear the form
        volunteerForm.reset();
    });


    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        // Handle form data (e.g., send it to a server)
        console.log("Contact Form Submitted!");
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Message:", message);

        // Optionally, display a success message or clear the form
        contactForm.reset();
    });
});
