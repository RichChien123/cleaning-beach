document.addEventListener('DOMContentLoaded', function() {

    // Example of smooth scroll for navigation links
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            let target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Example of simple form validation
    const contactForm = document.querySelector('#contact form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Add form validation logic here
        let name = this.querySelector('input[name="name"]').value;
        let email = this.querySelector('input[name="email"]').value;
        let message = this.querySelector('textarea[name="message"]').value;

        if (name && email && message) {
            // Process form data here
            console.log('Form submitted:', { name, email, message });
            // You can also add an AJAX request to send the data to a server
        } else {
            alert('Please fill out all fields.');
        }
    });

    // Add more interactive or animation scripts as needed

});
