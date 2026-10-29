"use strict";

/*
   FEEDBACK FORM ELEMENTS
   Each element is selected once and stored in a const.
 */

const fullNameInput = document.querySelector("#full-name");
const fullNameError = document.querySelector("#full-name-error");

const emailInput = document.querySelector("#email");
const emailError = document.querySelector("#email-error");

const commentsInput = document.querySelector("#comments");
const characterCount = document.querySelector("#character-count");

const minimumCommentLength = 15;

/*
   REUSABLE FIELD-STATE FUNCTIONS
   ================================================== */

/*
  Displays an accessible written error and adds
  the red invalid state to the related field.
*/
function showFieldError(input, errorElement, message) {
  input.classList.add("is-invalid");
  input.classList.remove("is-valid");
  input.setAttribute("aria-invalid", "true");

  errorElement.textContent = message;
}

/*
  Removes the written error and adds the green state.
  This runs only after the field has been checked.
*/
function clearFieldError(input, errorElement) {
  input.classList.remove("is-invalid");
  input.classList.add("is-valid");
  input.setAttribute("aria-invalid", "false");

  errorElement.textContent = "";
}

/* FULL NAME VALIDATION */

/*
  The Unicode pattern allows international letters,
  spaces, apostrophes and hyphens.

  Accepted examples:
  Patience Evertsson
  Åsa Lind
  Jean-Pierre
  O'Connor
*/
function validateFullName() {
  const fullName = fullNameInput.value.trim();

  const validNamePattern = /^[\p{L}\p{M}]+(?:[ '\u2019-][\p{L}\p{M}]+)*$/u;

  if (fullName.length === 0) {
    showFieldError(
      fullNameInput,
      fullNameError,
      "Please enter your full name.",
    );

    return false;
  }

  if (fullName.length < 2) {
    showFieldError(
      fullNameInput,
      fullNameError,
      "Your name must contain at least 2 characters.",
    );

    return false;
  }

  if (!validNamePattern.test(fullName)) {
    showFieldError(
      fullNameInput,
      fullNameError,
      "Use letters, spaces, apostrophes or hyphens only.",
    );

    return false;
  }

  clearFieldError(fullNameInput, fullNameError);
  return true;
}

/* EMAIL VALIDATION */

/*
  Checks that the email contains content before and
  after @, followed by a plausible domain extension.
*/
function validateEmail() {
  const email = emailInput.value.trim();

  const validEmailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  if (email.length === 0) {
    showFieldError(emailInput, emailError, "Please enter your email address.");

    return false;
  }

  if (!validEmailPattern.test(email)) {
    showFieldError(
      emailInput,
      emailError,
      "Enter a valid email address, such as name@example.com.",
    );

    return false;
  }

  clearFieldError(emailInput, emailError);
  return true;
}

/* LIVE COMMENTS COUNTER */

function updateCharacterCount() {
  const currentLength = commentsInput.value.length;

  if (currentLength < minimumCommentLength) {
    characterCount.textContent =
      `${currentLength} characters entered - ` +
      `minimum ${minimumCommentLength} required`;

    characterCount.classList.remove("counter-valid");
    characterCount.classList.add("counter-short");
  } else {
    characterCount.textContent = `${currentLength} characters entered - minimum reached`;

    characterCount.classList.remove("counter-short");
    characterCount.classList.add("counter-valid");
  }
}

/* EVENT LISTENERS */

/* Validate the name after the visitor leaves the field. */
fullNameInput.addEventListener("blur", validateFullName);

/* Recheck the name while an existing error is corrected. */
fullNameInput.addEventListener("input", () => {
  if (fullNameInput.classList.contains("is-invalid")) {
    validateFullName();
  }
});

/* Validate the email after the visitor leaves the field. */
emailInput.addEventListener("blur", validateEmail);

/* Recheck the email while an existing error is corrected. */
emailInput.addEventListener("input", () => {
  if (emailInput.classList.contains("is-invalid")) {
    validateEmail();
  }
});

/* Update the comments counter after every input. */
commentsInput.addEventListener("input", updateCharacterCount);

/* Establish the correct initial counter state. */
updateCharacterCount();
