"use strict";

// FEEDBACK FORM ELEMENTS
// Each element is selected once and stored in a const.

const fullNameInput = document.querySelector("#full-name");
const fullNameError = document.querySelector("#full-name-error");

const commentsInput = document.querySelector("#comments");
const characterCount = document.querySelector("#character-count");

const minimumCommentLength = 15;

//REUSABLE FIELD-STATE FUNCTIONS

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
  Removes an existing error and adds the green state.
  This runs only after the field has been checked.
*/
function clearFieldError(input, errorElement) {
  input.classList.remove("is-invalid");
  input.classList.add("is-valid");
  input.setAttribute("aria-invalid", "false");

  errorElement.textContent = "";
}

//   FULL NAME VALIDATION

/*
  The Unicode pattern allows international letters,
  spaces, apostrophes and hyphens.

  Examples accepted:
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

// LIVE COMMENTS COUNTER

function updateCharacterCount() {
  const currentLength = commentsInput.value.length;

  if (currentLength < minimumCommentLength) {
    characterCount.textContent =
      `${currentLength} characters entered — ` +
      `minimum ${minimumCommentLength} required`;

    characterCount.classList.remove("counter-valid");
    characterCount.classList.add("counter-short");
  } else {
    characterCount.textContent = `${currentLength} characters entered — minimum reached`;

    characterCount.classList.remove("counter-short");
    characterCount.classList.add("counter-valid");
  }
}

//   EVENT LISTENERS

/*
  Validate after the visitor leaves the name field.
  This avoids showing an error before they have interacted.
*/
fullNameInput.addEventListener("blur", validateFullName);

/*
  After an error has appeared, check again while the
  visitor corrects their answer.
*/
fullNameInput.addEventListener("input", () => {
  if (fullNameInput.classList.contains("is-invalid")) {
    validateFullName();
  }
});

/* Update the comments counter after every input. */
commentsInput.addEventListener("input", updateCharacterCount);

/* Establish the correct initial counter state. */
updateCharacterCount();
