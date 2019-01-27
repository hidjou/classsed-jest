// Import validators
import {
  validateName,
  validatePassword,
  validateConfirmPassword,
  validateEmail
} from './validators';
import { setValid, setInvalid } from './utilityFunctions';
import '../styles/index.css';

// Form
const form = document.getElementById('myForm');

// Add onfocusout event function
const addFocusOutEvent = (field) => {
  field.addEventListener('focusout', () => {
    // If field value is invalid, set input to invalid else set valid
    const result = validateField(field.id);
    if (!result.valid) {
      setInvalid(field, result.error);
    } else {
      setValid(field);
    }
  });
};

// Get fields and add onfocusout event to them
const firstNameField = document.getElementById('firstName');
addFocusOutEvent(firstNameField);
const lastNameField = document.getElementById('lastName');
addFocusOutEvent(lastNameField);
const passwordField = document.getElementById('password');
addFocusOutEvent(passwordField);
const confirmPasswordField = document.getElementById('confirmPassword');
addFocusOutEvent(confirmPasswordField);
const emailField = document.getElementById('email');
addFocusOutEvent(emailField);

// Validate field depending on field name
const validateField = (field) => {
  switch (field) {
    case 'firstName':
      return validateName(firstNameField.value);
    case 'lastName':
      return validateName(lastNameField.value);
    case 'password':
      return validatePassword(passwordField.value);
    case 'confirmPassword':
      return validateConfirmPassword(
        passwordField.value,
        confirmPasswordField.value
      );
    case 'email':
      return validateEmail(emailField.value);
    default:
      return false;
  }
};

// Handle form
form.addEventListener('submit', function(event) {
  // Prevent default behaviour
  event.preventDefault();
  if (
    validateField('firstName') &&
    validateField('lastName') &&
    validateField('password') &&
    validateField('confirmPassword') &&
    validateField('email')
  ) {
    // Get user's name
    const name = firstName.value;
    // Get container
    const container = document.querySelector('div.container');
    // Create loading bar
    const loader = document.createElement('div');
    loader.className = 'progress';
    const loadingBar = document.createElement('div');
    loadingBar.className = 'indeterminate';
    loader.appendChild(loadingBar);
    // Add loading bar to container
    container.appendChild(loader);
    // Mimicking real world async code
    setTimeout(function() {
      // Get loading bar
      const loaderDiv = document.querySelector('div.progress');
      const panel = document.createElement('div');
      panel.className = 'card-panel green';
      const text = document.createElement('span');
      text.className = 'white-text';
      text.appendChild(
        document.createTextNode(
          `Sign up successful, welcom to SocialApe ${name}`
        )
      );
      panel.appendChild(text);
      // Replace loading bar with success message
      container.replaceChild(panel, loaderDiv);
    }, 1000);
  }
});
