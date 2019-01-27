// Importing util functions
import {
  checkIfOnlyLetters,
  checkIfEmpty,
  meetLength,
  containsCharacters,
  setValidationRes
} from './utilityFunctions';

// Valid result
const validResponse = {
  valid: true
};

// Validators
const validateName = (value) => {
  // check if is empty
  if (!checkIfEmpty(value).valid) return checkIfEmpty(value);
  // is if it has only letters
  if (!checkIfOnlyLetters(value).valid) return checkIfOnlyLetters(value);
  return validResponse;
};
const validatePassword = (password) => {
  // Empty check
  if (!checkIfEmpty(password).valid) return checkIfEmpty(password);
  // Must of in certain length
  if (!meetLength(password, 4, 100).valid) return meetLength(password, 4, 100);
  // check password against our character set
  // 1- a
  // 2- a 1
  // 3- A a 1
  // 4- A a 1 @
  if (!containsCharacters(password, 1).valid)
    return containsCharacters(password, 1);
  return validResponse;
};
const validateConfirmPassword = (password, confirmPassword) => {
  if (!validatePassword(password).valid)
    return setValidationRes(false, 'Password must be valid');
  // If they match
  if (password !== confirmPassword)
    return setValidationRes(false, 'Passwords must match');
  return validResponse;
};
const validateEmail = (email) => {
  if (!checkIfEmpty(email).valid) return checkIfEmpty(email);
  if (!containsCharacters(email, 5).valid) return containsCharacters(email, 5);
  return validResponse;
};

export {
  validateName,
  validatePassword,
  validateConfirmPassword,
  validateEmail
};
