// --- Part 2 & 3: Interactive JavaScript Functions ---

// 1. Mobile Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');
const mainNav = document.querySelector('.main-nav');

/**
 * Toggles the mobile navigation menu's visibility.
 * This function adds or removes the 'active' class on the navigation container and the button,
 * triggering the CSS animations defined in style.css.
 */
function toggleMobileNav() {
    mainNav.classList.toggle('active');
    navToggle.classList.toggle('active');
}

navToggle.addEventListener('click', toggleMobileNav);


// 2. Contact Form Validation
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
        // Prevent the form from submitting normally
        event.preventDefault(); 
        
        // Function to validate the form
        const isValid = validateForm();
        
        if (isValid) {
            // If the form is valid, simulate a successful submission
            formStatus.textContent = 'Message sent successfully!';
            formStatus.style.color = '#27ae60';
            contactForm.reset(); // Clear the form
        } else {
            // If the form is invalid, display a message
            formStatus.textContent = 'Please fill out all required fields correctly.';
            formStatus.style.color = '#e74c3c';
        }
    });
}

/**
 * Validates the contact form fields.
 * This function checks if each required field has a value and a valid email format.
 * It uses local scope for all its variables.
 * @returns {boolean} True if the form is valid, false otherwise.
 */
function validateForm() {
    let formIsValid = true;
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    // Array of form elements to validate
    const elementsToValidate = [nameInput, emailInput, messageInput];

    elementsToValidate.forEach(input => {
        const errorMessageEl = input.nextElementSibling;
        
        // Check if the input is empty
        if (input.value.trim() === '') {
            errorMessageEl.textContent = `${input.name.charAt(0).toUpperCase() + input.name.slice(1)} is required.`;
            formIsValid = false;
        } else if (input.type === 'email' && !isValidEmail(input.value)) {
            // Check for valid email format
            errorMessageEl.textContent = 'Please enter a valid email address.';
            formIsValid = false;
        } else {
            // Clear any previous error messages
            errorMessageEl.textContent = '';
        }
    });

    // The return statement is crucial for sending the validation status back to the calling code.
    return formIsValid;
}

/**
 * A helper function to validate an email format using a simple regex.
 * @param {string} email The email string to validate.
 * @returns {boolean} True if the email is valid, false otherwise.
 */
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
