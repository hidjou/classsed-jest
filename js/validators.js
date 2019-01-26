import {
  setValid,
  setInvalid,
  checkIfOnlyLetters,
  checkIfEmpty,
  meetLength,
  containsCharacters
} from './utilityFunctions';
// Validators
const validateName = (field) => {
  // check if is empty
  if (checkIfEmpty(field)) return;
  // is if it has only letters
  if (!checkIfOnlyLetters(field)) return;
  return true;
};
const validatePassword = (password) => {
  // Empty check
  if (checkIfEmpty(password)) return;
  // Must of in certain length
  if (!meetLength(password, 4, 100)) return;
  // check password against our character set
  // 1- a
  // 2- a 1
  // 3- A a 1
  // 4- A a 1 @
  //   if (!containsCharacters(password, 4)) return;
  return true;
};
const validateConfirmPassword = (password, confirmPassword) => {
  if (password.className !== 'valid') {
    setInvalid(confirmPassword, 'Password must be valid');
    return;
  }
  // If they match
  if (password.value !== confirmPassword.value) {
    setInvalid(confirmPassword, 'Passwords must match');
    return;
  } else {
    setValid(confirmPassword);
  }
  return true;
};
const validateEmail = (email) => {
  if (checkIfEmpty(email)) return;
  if (!containsCharacters(email, 5)) return;
  return true;
};

export {
  validateName,
  validatePassword,
  validateConfirmPassword,
  validateEmail
};
