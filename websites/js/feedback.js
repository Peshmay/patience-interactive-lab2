"use strict";

// Store references to the elements once.

const commentsInput = document.querySelector("#comments");
const characterCount = document.querySelector("#character-count");

const minimumCommentLength = 15;

// Updates the counter whenever the visitor types.

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

// Run the function after every change in the textarea.
commentsInput.addEventListener("input", updateCharacterCount);

// Establish the correct initial state.
updateCharacterCount();
