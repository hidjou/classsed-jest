// Validation colors
const green = '#4CAF50';
const red = '#F44336';

// Valid and invalid consts for readability
const VALID = true;
const INVALID = false;

// Utility functions
const setInvalid = (field, message) => {
  field.className = 'invalid';
  field.nextElementSibling.innerHTML = message;
  field.nextElementSibling.style.color = red;
};
const setValid = (field) => {
  field.className = 'valid';
  field.nextElementSibling.innerHTML = '';
};
const setValidationRes = (valid, error) => {
  if (valid) return { valid };
  else return { valid, error };
};
const checkIfOnlyLetters = (value) => {
  if (/^[a-zA-Z ]+$/.test(value)) {
    return setValidationRes(VALID);
  } else {
    return setValidationRes(INVALID, 'Must contain only letters');
  }
};
const checkIfEmpty = (value) => {
  if (isEmpty(value.trim())) {
    return setValidationRes(INVALID, 'Must not be empty'); // e.g. { valid: false, error: 'Must not be empty' }
  } else {
    return setValidationRes(VALID);
  }
};
const isEmpty = (value) => {
  if (value === '') return true;
  return false;
};
const meetLength = (value, minLength, maxLength) => {
  if (value.length >= minLength && value.length < maxLength) {
    return setValidationRes(VALID);
  } else if (field.value.length < minLength) {
    return setValidationRes(
      INVALID,
      `Must be at least ${minLength} characters long`
    );
  } else {
    return setValidationRes(
      INVALID,
      `Must be shorter than ${maxLength} characters`
    );
  }
};
// if value contains a set of characters (depending of code case) return valid response
const containsCharacters = (value, code) => {
  let regEx;
  switch (code) {
    case 1:
      // letters
      regEx = /(?=.*[a-zA-Z])/;
      return matchRegExAndGetRes(
        regEx,
        value,
        'Must contain at least one letter'
      );
    case 2:
      // letter and numbers
      regEx = /(?=.*\d)(?=.*[a-zA-Z])/;
      return matchRegExAndGetRes(
        regEx,
        value,
        'Must contain at least one letter and one number'
      );
    case 3:
      // uppercase, lowercase and number
      regEx = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/;
      return matchRegExAndGetRes(
        regEx,
        value,
        'Must contain at least one uppercase, one lowercase letter and one number'
      );
    case 4:
      // uppercase, lowercase, number and special char
      regEx = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/;
      return matchRegExAndGetRes(
        regEx,
        value,
        'Must contain at least one uppercase, one lowercase letter, one number and one special character'
      );
    case 5:
      // Email pattern
      regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return matchRegExAndGetRes(regEx, value, 'Must be a valid email address');
    default:
      return setValidationRes(INVALID, 'Oups, something went wrong');
  }
};
// If value matches RegEx return valid res else return invalid with err
const matchRegExAndGetRes = (regEx, value, error) => {
  if (value.match(regEx)) return setValidationRes(VALID);
  return setValidationRes(INVALID, error);
};

// Exports functions for use and for testing
module.exports = {
  setValid,
  setInvalid,
  checkIfOnlyLetters,
  isEmpty,
  checkIfEmpty,
  meetLength,
  containsCharacters,
  matchRegExAndGetRes,
  setValidationRes
};
