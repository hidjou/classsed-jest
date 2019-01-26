import {
  validateName,
  validatePassword,
  validateConfirmPassword,
  validateEmail
} from './validators';
import '../styles/index.css';

// Form
const form = document.getElementById('myForm');

const addFocusOutEvent = (field) => {
  field.addEventListener('focusout', () => {
    validateField(field.id);
  });
};

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

const validateField = (field) => {
  switch (field) {
    case 'firstName':
      return validateName(firstNameField);
    case 'lastName':
      return validateName(lastNameField);
    case 'password':
      return validatePassword(passwordField);
    case 'confirmPassword':
      return validateConfirmPassword(passwordField, confirmPasswordField);
    case 'email':
      return validateEmail(emailField);
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
    const name = firstName.value;
    const container = document.querySelector('div.container');
    const loader = document.createElement('div');
    loader.className = 'progress';
    const loadingBar = document.createElement('div');
    loadingBar.className = 'indeterminate';
    loader.appendChild(loadingBar);
    container.appendChild(loader);
    setTimeout(function() {
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
      container.replaceChild(panel, loaderDiv);
    }, 1000);
  }
});
