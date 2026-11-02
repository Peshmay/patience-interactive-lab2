# Build Log – Patience Evertsson Interactive Portfolio


## Introduction

This Build Log documents the development of my interactive multi-page
portfolio for Lab 2.

The project builds on my Lab 1 HTML and CSS portfolio. Lab 1 established the
visual design, responsive layout, semantic structure and four original pages.
Lab 2 extends that foundation with vanilla JavaScript interaction.

The completed portfolio currently contains six interconnected pages:

- `index.html`
- `about.html`
- `skills.html`
- `projects.html`
- `feedback.html`
- `contact.html`

The project uses one shared `style.css` file and two JavaScript files:

- `websites/js/feedback.js` controls the Grade 3 feedback form.
- `websites/js/skills.js` controls the Grade 4 Skills showcase.

No JavaScript frameworks or jQuery are used.

---

## Part A – Lab 1 Foundation

The following sections summarise the HTML and CSS portfolio that became the
foundation for Lab 2.

## 1. Header and Navigation

### Initial version

![Initial header](screenshots/header-initial.png)

The first header contained the website identity and navigation links. However, the design was plain, and the navigation did not remain visible when scrolling.

### Problem

Visitors had to return to the top of the page to use the navigation. Anchor destinations could also be hidden underneath the fixed header.

### Changes made

- Added a fixed header
- Added consistent spacing between navigation links
- Added a gold underline for the current page
- Added `aria-current="page"` to identify the active page
- Added `scroll-margin-top` to anchor destinations
- Added a CSS-only hamburger menu for smaller screens

### Final version

![Final header](screenshots/header-final.png)

### Result

The final header remains visible while scrolling and clearly shows the visitor’s current location. The navigation is consistent across all four pages.

## 2. Hero Section

### Initial version

![Initial Hero section](screenshots/hero-initial.png)

The first Hero section contained a portrait, heading, introduction and button. However, the image and text did not feel visually balanced.

### Changes made

- Created a split blush and cream background
- Changed the portrait into an arched shape
- Added an overlapping information card
- Improved the heading hierarchy
- Added a primary “View My Work” button
- Added accessible GitHub and LinkedIn links
- Adjusted spacing and image size

### Final version

![Final Hero section](screenshots/hero-final.png)

### Responsive development

The first mobile version contained too much space and did not display all the important content clearly.

![Initial responsive Hero](screenshots/hero-responsive-initial.png)

I reduced the image size, adjusted the spacing and placed the portrait above the text card.

![Final responsive Hero](screenshots/hero-responsive.png)

### Result

The Hero section now introduces me clearly and adapts to desktop, tablet and mobile screens.

---

## 3. About Section

### Initial version

![Initial About section](screenshots/about-initial.png)

The first About layout contained an image and text, but the portrait and text card were not properly balanced.

### Changes made

- Used a two-column desktop layout
- Made the portrait taller
- Added rounded upper corners
- Improved the spacing between the image and text
- Added a clear `h1` heading
- Used descriptive alternative text for the portrait

### Final version

![Final About section](screenshots/about-final.png)

### Responsive version

![Responsive About section](screenshots/about-responsive.png)

On smaller screens, the two columns stack vertically so that the text remains readable without horizontal scrolling.

## 4. Experience and Education

### Initial version

![Initial Experience section](screenshots/experience-initial.png)

The section initially contained too much vertical space. The Education and Work Experience cards also appeared unbalanced.

### Changes made

- Created two timeline cards
- Used gold timeline lines and markers
- Reduced unnecessary section padding
- Removed fixed-height rules
- Used `align-items: stretch` to balance the cards
- Changed the layout to one column on smaller screens

### Final version

![Final Experience section](screenshots/experience-final.png)

### Responsive version

![Responsive Experience section](screenshots/experience-responsive.png)

### Result

Education and work experience can now be compared easily on desktop and read comfortably on mobile.

---

## 5. Projects Section

### Initial version

![Initial Projects section](screenshots/projects-initial.png)

The first project cards were functional, but their images, spacing and heights were inconsistent.

### Changes made

- Used semantic `<article>` elements for project cards
- Added consistent image containers
- Used `object-fit: cover` to control image cropping
- Added hover feedback
- Improved the card spacing
- Created a responsive CSS Grid

The grid displays:

- Three columns on desktop
- Two columns on tablet
- One column on mobile

### Final version

![Final Projects section](screenshots/projects-final.png)

### Responsive version

![Responsive Projects section](screenshots/projects-responsive.png)

### Result

The final project cards are visually consistent and easier to scan.

## 6. Gallery Section

### Initial version

![Initial Gallery](screenshots/gallery-initial.png)

The first gallery did not have a suitable wrapper around all the repeated items. This made the grid difficult to control.

The original captions were also too brief and did not explain the meaning of the images.

### Changes made

- Added a gallery grid container
- Used semantic `<figure>` elements
- Connected every image to a `<figcaption>`
- Expanded the captions with truthful context
- Added descriptive alternative text
- Added a subtle image hover effect
- Created a responsive three-, two- and one-column grid

### Final version

![Final Gallery](screenshots/gallery-final.png)

### Responsive version

![Responsive Gallery](screenshots/gallery-responsive.png)

### Result

The Gallery now presents nine original images in a clear 3 × 3 desktop layout. Each caption explains the context and why the image is meaningful to me.

## 7. Contact Section

### Initial version

![Initial Contact section](screenshots/contact-initial.png)

The original form contained Name, Email and Message fields. It was also too tall and required unnecessary scrolling.

### Changes made

- Added the required Subject field
- Connected every input to a visible `<label>`
- Added HTML `required` validation
- Used the correct `email` input type
- Reduced unnecessary spacing
- Created a balanced two-column desktop layout
- Added visible keyboard focus states

### Final version

![Final Contact section](screenshots/contact-final.png)

### Responsive version

![Responsive Contact section](screenshots/contact-responsive.png)

### Result

The final form contains Name, Email, Subject and Message fields. On smaller screens, the introduction and form stack into one column.

## 8. Footer

### Initial version

![Initial footer](screenshots/footer-initial.png)

The original footer only displayed the website identity and copyright information. It did not provide navigation.

### Changes made

- Added links to Home, About, Projects and Contact
- Used the same footer on every page
- Improved spacing and alignment
- Kept the plum and gold visual identity

### Final version

![Final footer](screenshots/footer-final.png)

### Result

Visitors can continue navigating after reaching the bottom of any page.

## 9. CSS-Only Mobile Menu

![CSS-only hamburger menu](screenshots/hamburger-menu.png)

The mobile menu was created without JavaScript. It uses a checkbox and a connected label to open and close the navigation.

### Accessibility problem

The first version used `display: none` on the menu checkbox. This removed it
from the keyboard tab order, meaning keyboard users could not focus or activate
the mobile menu.

### Solution

I visually hid the checkbox while keeping it focusable
``css
.menu-toggle {
position: absolute;
width: 1px;
height: 1px;
overflow: hidden;
opacity: 0;
}

.menu-toggle:focus-visible + .hamburger {
outline: 3px solid var(--gold);
outline-offset: 6px;
}

## 10. Responsive Testing

I tested the portfolio at the following viewport widths:

- Desktop: 1440 px
  ![Desktop layout at 1440px](screenshots/desktop-final.png)
- Tablet: 768 px
  ![Tablet layout at 768px](screenshots/tablet-final.png)
- Mobile: 375 px
  ![Mobile](screenshots/mobile-final.png)
- Small mobile: 360 px
  ![Small Mobile](screenshots/smallmobile-final.png)
  I checked:
- Navigation behaviour
- Hamburger menu operation
- Text readability
- Image scaling and cropping
- Project and gallery grids
- Contact form alignment
- Horizontal overflow
- Keyboard focus indicators
  The screenshots above show how the layouts changed between desktop, tablet and mobile screens.

## 11. Lab 1 HTML and CSS Validation

I checked all four HTML pages using the W3C Markup Validation Service.

### Home page

![Successful validation of index.html](screenshots/indexhtml.png)

### About page

![Successful validation of about.html](screenshots/abouthtml.png)

### Projects page

![Successful validation of projects.html](screenshots/projecthtml.png)

### Contact page

![Successful validation of contact.html](screenshots/contacthtml.png)

### CSS validation

![Successful CSS validation](screenshots/css-validation.png)

The shared `style.css` file was checked using the W3C CSS Validation Service,
and no errors were reported.

---

## Part B – Lab 2 JavaScript Development

## 12. Grade 3: Accessible Feedback Form

### Initial structure

I created `feedback.html` as a new interconnected page. The first version
contained the semantic form structure before JavaScript behaviour was added.

The form includes:

- Full Name
- Email Address
- Topic of Interest
- Comments
- Optional Website
- Submit button
- Clear button
- Form-status area

Each form control has a visible and connected label.

### Initial feedback form

![Initial feedback form](screenshots/feedback-normal.png)

### Problem: validating different fields

The fields required different validation rules. A single validation check would
not provide clear feedback for every type of input.

I created separate validation functions:

- `validateFullName()`
- `validateEmail()`
- `validateTopic()`
- `validateComments()`
- `validateWebsite()`

Each function returns `true` or `false`. This allows the submission handler to
check the complete form.

### International name validation

The Full Name field accepts international letters, combining characters,
spaces, apostrophes and hyphens.

This allows names such as:

- Patience Evertsson
- Åsa Lind
- Jean-Pierre
- O'Connor

### Field states

I created reusable functions for the three field states:

- `showFieldError()` applies the invalid state and written error.
- `clearFieldError()` applies the valid state.
- `clearFieldState()` returns an optional empty field to neutral.

Invalid fields receive:

- A red border
- A written error message
- `aria-invalid="true"`

Valid fields receive a green border after successful validation.

### Validation errors

![Feedback validation errors](screenshots/feedback-error.png)

### Live Comments counter

The Comments field requires at least 15 meaningful characters.

The live counter:

- Updates after every input
- Uses the trimmed text length
- Appears red below 15 characters
- Appears green when the minimum is reached
- Includes written feedback instead of relying only on colour

### Problem: repeated event listeners

During development, I accidentally placed the Submit and Clear event listeners
inside `resetForm()`.

This could register another listener every time the form was reset and cause a
handler to run more than once.

I moved the listeners outside `resetForm()` and registered each listener once
at the end of `feedback.js`.

### Submission behaviour

The form uses `event.preventDefault()` because the project does not include a
backend.

When the form is invalid:

1. Every required field is checked.
2. Written errors are displayed.
3. Focus moves to the first invalid control.

When the form is valid:

1. A personalised success message is displayed.
2. The message includes the visitor's name.
3. The form is reset.
4. Validation classes and errors are removed.
5. The counter returns to its initial state.
6. The success message disappears after four seconds.

### Successful submission

![Successful feedback submission](screenshots/feedback-success.png)

### Clear-button behaviour

The Clear button restores:

- Empty form values
- Neutral field states
- Empty error messages
- Initial character counter
- Empty status message
- Cancelled success-message timeout

### Grade 3 accessibility

The Feedback page includes:

- Connected form labels
- `aria-describedby` relationships
- Dynamic `aria-invalid` values
- Visible keyboard focus
- Written validation errors
- A live form-status region
- Keyboard-accessible controls
- Reduced-motion support
- A skip link

### Grade 3 testing

I tested:

- Empty form submission
- Invalid name
- International name
- Invalid and valid email addresses
- Empty topic
- Comments below and above 15 characters
- Optional empty Website
- Invalid and valid Website addresses
- Personalised success message
- Four-second message timeout
- Clear-button reset
- Keyboard-only operation
- Browser Console errors

JavaScript syntax was checked using:

`node --check websites/js/feedback.js`

### Grade 3 result

The final Feedback page validates every field, provides accessible written
feedback, manages complete submission and reset behaviour and works without a
JavaScript framework.

---

## 13. Grade 4: Data-Driven Skills Showcase

### Initial structure

I created `skills.html` with containers for:

- Page introduction
- Category filters
- Sorting control
- Dynamic result counter
- Empty Skills grid
- `noscript` fallback

The skill cards were not written manually because Grade 4 requires them to be
generated from JavaScript data.

### Skills data

I created a `skills` array containing 22 objects across five categories:

- Frontend
- Backend
- Databases
- Testing and DevOps
- Cloud and AI

Each skill contains:

- Unique ID
- Name
- Category
- Proficiency from 1 to 5
- Years of experience
- Description
- Icon class

### Dynamic card generation

The `renderSkills()` function creates each card using DOM methods:

- `document.createElement()`
- `classList.add()`
- `textContent`
- `append()`
- `replaceChildren()`

This prevents repeated card markup in `skills.html`.

### Initial Skills result

![Skills desktop](screenshots/skills-desktop.png)

### Category filtering

The filter buttons use `data-category` attributes. Selecting a filter:

1. Updates `activeCategory`.
2. Updates the buttons' `aria-pressed` states.
3. Applies the active visual state.
4. Filters the Skills data.
5. Renders the matching cards.
6. Updates the result counter.

### Sorting

The sorting control provides:

- Proficiency from high to low
- Experience from high to low
- Name from A to Z

The sorting function copies the filtered array before using `sort()`. This keeps
the original `skills` array unchanged.

### Problem: combining filtering and sorting

Filtering and sorting initially needed to work without resetting each other.

I stored the current interface state in:

- `activeCategory`
- `activeSort`

The `updateSkillsDisplay()` function filters first, sorts the filtered result
and then renders the cards.

### Filtered and sorted result

![Filtered and sorted Skills](screenshots/skills-filtered-sorted.png)

### Dynamic counter

The counter displays results such as:

`Showing 7 of 22 skills`

It uses:

- `role="status"`
- `aria-live="polite"`
- `aria-atomic="true"`

### Proficiency indicators

Every card displays a written value such as `4 out of 5` and a visual
proficiency bar.

The bar uses `aria-hidden="true"` because the written value already communicates
the same information.

### Grade 4 accessibility

The Skills page includes:

- Keyboard-accessible filter buttons
- Native sorting control
- Connected sorting label
- Visible focus states
- Dynamic `aria-pressed` states
- Live result counter
- List and list-item roles
- Decorative icons hidden from screen readers
- Reduced-motion support
- `noscript` fallback

### Responsive Skills layouts

The Skills grid displays:

- Three columns on desktop
- Two columns on tablet
- One column on mobile

![Skills tablet](screenshots/skills-tablet.png)

![Skills mobile](screenshots/skills-mobile.png)

### Keyboard focus

![Skills keyboard focus](screenshots/skills-keyboard-focus.png)

### Grade 4 testing

I tested:

- Rendering all 22 objects
- All five filters
- All three sorting options
- Combined filtering and sorting
- Dynamic counter updates
- Keyboard operation
- Visible focus indicators
- Desktop, tablet and mobile layouts
- Horizontal overflow
- Browser Console errors

JavaScript syntax was checked using:

`node --check websites/js/skills.js`

### Grade 4 result

The final Skills page is generated entirely from JavaScript data. Filtering,
sorting and the live counter work together while remaining responsive and
keyboard accessible.

## 14. Lab 2 Validation

### Feedback page validation

![Successful validation of feedback.html](screenshots/feedback-validation.png)

### Skills page validation

![Successful validation of skills.html](screenshots/skills-validation.png)

### JavaScript syntax checks

I checked both JavaScript files using:

- `node --check websites/js/feedback.js`
- `node --check websites/js/skills.js`

I also tested both pages in the browser and checked the Console for runtime
errors.

## 15. Final Reflection

Lab 2 changed my portfolio from a static HTML and CSS website into an
interactive vanilla JavaScript project.

The Grade 3 Feedback form improved my understanding of validation, DOM state,
accessible error messages, live regions, event handling and complete form
reset behaviour.

The Grade 4 Skills showcase improved my understanding of arrays, objects,
dynamic DOM rendering, filtering, sorting and shared interface state.

The most important lesson was that interactive features require more than
visual styling. They must also provide keyboard access, written feedback,
logical state management and predictable behaviour.

The final project is more interactive, accessible, responsive and technically
organised than the original Lab 1 portfolio.
