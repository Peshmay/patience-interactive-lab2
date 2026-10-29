"use strict";


const feedbackForm = document.querySelector("#feedback-form");
const formStatus = document.querySelector("#form-status");
const clearButton = document.querySelector(".feedback-clear");

let statusMessageTimer;

// FEEDBACK FORM ELEMENTS
// Each element is selected once and stored in a const.

const fullNameInput = document.querySelector("#full-name");
const fullNameError = document.querySelector("#full-name-error");

const emailInput = document.querySelector("#email");
const emailError = document.querySelector("#email-error");

const topicSelect = document.querySelector("#topic");
const topicError = document.querySelector("#topic-error");

const commentsInput = document.querySelector("#comments");
const commentsError = document.querySelector("#comments-error");
const characterCount = document.querySelector("#character-count");

const minimumCommentLength = 15;

const websiteInput = document.querySelector("#website");
const websiteError = document.querySelector("#website-error");

// REUSABLE FIELD-STATE FUNCTIONS

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

/*
  Restores a field to its neutral state.
  This is useful for optional fields that are empty.
*/
function clearFieldState(input, errorElement) {
  input.classList.remove("is-invalid", "is-valid");
  input.removeAttribute("aria-invalid");

  errorElement.textContent = "";
}

// FULL NAME VALIDATION

/*
  The Unicode pattern allows international letters,
  spaces, apostrophes, and hyphens.

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
      "Use letters, spaces, apostrophes, or hyphens only.",
    );
    return false;
  }

  clearFieldError(fullNameInput, fullNameError);
  return true;
}

// EMAIL VALIDATION

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

// TOPIC VALIDATION

/*
  The placeholder has an empty value.
  Therefore, an empty value means that no topic
  has been selected.
*/
function validateTopic() {
  if (topicSelect.value === "") {
    showFieldError(topicSelect, topicError, "Please choose a feedback topic.");
    return false;
  }

  clearFieldError(topicSelect, topicError);
  return true;
}

// COMMENTS VALIDATION

/*
  trim() prevents spaces alone from being counted
  as meaningful feedback.
*/
function validateComments() {
  const comments = commentsInput.value.trim();

  if (comments.length === 0) {
    showFieldError(
      commentsInput,
      commentsError,
      "Please enter your feedback comments.",
    );
    return false;
  }

  if (comments.length < minimumCommentLength) {
    showFieldError(
      commentsInput,
      commentsError,
      `Comments must contain at least ${minimumCommentLength} characters.`,
    );
    return false;
  }

  clearFieldError(commentsInput, commentsError);
  return true;
}

// OPTIONAL WEBSITE VALIDATION

/*
  The Website field is optional. An empty field returns
  to the neutral state. For URL validation, the HTML
  element should be <input type="url">.
*/
function validateWebsite() {
  const website = websiteInput.value.trim();

  if (website.length === 0) {
    clearFieldState(websiteInput, websiteError);
    return true;
  }

  if (websiteInput.validity.typeMismatch) {
    showFieldError(
      websiteInput,
      websiteError,
      "Enter a valid URL, such as https://example.com.",
    );
    return false;
  }

  clearFieldError(websiteInput, websiteError);
  return true;
}

// LIVE COMMENTS COUNTER

function updateCharacterCount() {
  const currentLength = commentsInput.value.trim().length;

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

// EVENT LISTENERS

fullNameInput.addEventListener("blur", validateFullName);

fullNameInput.addEventListener("input", () => {
  if (fullNameInput.classList.contains("is-invalid")) {
    validateFullName();
  }
});

emailInput.addEventListener("blur", validateEmail);

emailInput.addEventListener("input", () => {
  if (emailInput.classList.contains("is-invalid")) {
    validateEmail();
  }
});

topicSelect.addEventListener("change", validateTopic);
topicSelect.addEventListener("blur", validateTopic);

commentsInput.addEventListener("input", () => {
  updateCharacterCount();

  if (commentsInput.classList.contains("is-invalid")) {
    validateComments();
  }
});

commentsInput.addEventListener("blur", validateComments);

websiteInput.addEventListener("blur", validateWebsite);

websiteInput.addEventListener("input", () => {
  const websiteHasBeenChecked =
    websiteInput.classList.contains("is-invalid") ||
    websiteInput.classList.contains("is-valid");

  if (websiteHasBeenChecked) {
    validateWebsite();
  }
});

// COMPLETE FORM RESET

/*
  Restores the form values, validation classes, error
  messages, counter and status area to their initial state.
*/
function resetForm() {
  feedbackForm.reset();

  const formFields = [
    fullNameInput,
    emailInput,
    topicSelect,
    commentsInput,
    websiteInput,
  ];

  const errorElements = [
    fullNameError,
    emailError,
    topicError,
    commentsError,
    websiteError,
  ];

  formFields.forEach((field) => {
    field.classList.remove("is-invalid", "is-valid");
    field.removeAttribute("aria-invalid");
  });

  errorElements.forEach((errorElement) => {
    errorElement.textContent = "";
  });

  updateCharacterCount();

  formStatus.textContent = "";
  formStatus.classList.remove("status-error", "status-success");

  clearTimeout(statusMessageTimer);
}

// FORM SUBMISSION

/*
  Prevents the page from reloading, validates every field
  and displays an accessible result inside the page.
*/
function handleFormSubmit(event) {
  event.preventDefault();

  /*
    Store the name before resetting the form so it can
    be included in the personalized success message.
  */
  const submittedName = fullNameInput.value.trim();

  /*
    Run every validation function separately so that
    all invalid fields display their messages.
  */
  const isFullNameValid = validateFullName();
  const isEmailValid = validateEmail();
  const isTopicValid = validateTopic();
  const areCommentsValid = validateComments();
  const isWebsiteValid = validateWebsite();

  const isFormValid =
    isFullNameValid &&
    isEmailValid &&
    isTopicValid &&
    areCommentsValid &&
    isWebsiteValid;

  clearTimeout(statusMessageTimer);

  if (!isFormValid) {
    formStatus.textContent =
      "Please correct the highlighted fields before submitting.";

    formStatus.classList.add("status-error");
    formStatus.classList.remove("status-success");

    const firstInvalidField = feedbackForm.querySelector(".is-invalid");

    if (firstInvalidField) {
      firstInvalidField.focus();
    }

    return;
  }

  /*
    Reset values and validation states before displaying
    the personalized success message.
  */
  resetForm();

  formStatus.textContent = `Thanks for your feedback, ${submittedName}!`;

  formStatus.classList.add("status-success");
  formStatus.classList.remove("status-error");

  statusMessageTimer = setTimeout(() => {
    formStatus.textContent = "";
    formStatus.classList.remove("status-success");
  }, 4000);
}

// FORM EVENT LISTENERS

feedbackForm.addEventListener("submit", handleFormSubmit);

clearButton.addEventListener("click", (event) => {
  event.preventDefault();
  resetForm();
});

/*
  Establish the correct counter state when the page opens.
  This should be the final instruction in the file.
*/
updateCharacterCount();
