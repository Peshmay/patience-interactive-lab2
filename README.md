# Patience Evertsson Interactive Portfolio - Lab 2

## Project Overview

This project extends my Lab 1 portfolio with accessible and interactive
JavaScript features.

The portfolio is created using semantic HTML, responsive CSS and vanilla
JavaScript. No JavaScript frameworks or libraries are used.

My target for Lab 2 is Grade 5. The grading tracks are cumulative:

- Grade 3: Accessible feedback form and JavaScript validation
- Grade 4: Grade 3 plus a data-driven skills showcase
- Grade 5: Grades 3 and 4 plus persistent accessibility display settings

## Current Development Status

- Grade 3 feedback form: completed and tested
- Grade 4 data-driven skills showcase: completed and tested
- Grade 5 accessibility display settings: planned

The Grade 4 implementation is documented with desktop, tablet, mobile,
filtering, sorting and keyboard-testing evidence in the screenshots folder.

## Pages

The portfolio currently contains six interconnected pages:

- `index.html` - Hero introduction and social links
- `about.html` - Biography, education and work experience
- `skills.html` – Data-driven technical skills with filtering and sorting
- `projects.html` - Six projects and a 3 x 3 original-image gallery
- `contact.html` - Contact information and contact form
- `feedback.html` - Interactive feedback form with JavaScript validation

Every page uses the same header, footer and shared `style.css` file. Relative
links allow visitors to move between the pages.

The current page is identified using `aria-current="page"` and a gold visual
state.

## How to Run the Website

1. Download or clone the repository.
2. Keep the files and folders in their original structure.
3. Open the `websites` folder in Visual Studio Code.
4. Open `index.html` using Live Server.
5. Use the navigation links to move between the pages.

No package installation or build command is required. JavaScript must be
enabled in the browser for the interactive Lab 2 features.

## Project Structure

patience-interactive-lab2/
├── images/
├── screenshots/
├── websites/
│ ├── js/
│ │ ├── feedback.js
│ │ └── skills.js
│ ├── about.html
│ ├── contact.html
│ ├── feedback.html
│ ├── index.html
│ ├── projects.html
│ ├── skills.html
│ └── style.css
├── .gitignore
├── build_log.md
├── Patience-Documentation.pdf
└── README.md

The HTML documents and shared stylesheet are stored in the `websites` folder.
The Grade 3 JavaScript is stored in `websites/js/feedback.js`. Website images
are stored in `images`, while development and testing evidence is stored in
`screenshots`.

## Lab 2 JavaScript Enhancements

### Grade 3: Accessible Feedback Form

The Grade 3 feedback-form JavaScript is stored in
`websites/js/feedback.js`. The Grade 4 data-driven Skills feature is stored in
`websites/js/skills.js`. Website images are stored in `images`, while
development and testing evidence is stored in `screenshots`.

The form contains:

- Full Name
- Email Address
- Topic of Interest
- Comments
- Optional Website
- Submit button
- Clear button

### Validation Behaviour

- Full Name is required and accepts international letters, spaces, apostrophes
  and hyphens.
- Email is required and must contain a plausible address and domain.
- Topic of Interest requires one of the available choices.
- Comments are required and must contain at least 15 meaningful characters.
- A live counter communicates the Comments minimum using text and colour.
- Website is optional but uses browser URL validation when completed.
- Invalid fields receive a red border and written error message.
- Valid fields receive a green border only after passing validation.
- JavaScript updates `aria-invalid` after checking a field.
- Focus moves to the first invalid field after an invalid submission.

### Successful Submission

The form uses `event.preventDefault()` because Lab 2 does not include a backend.

After successful validation, JavaScript displays:

`Thanks for your feedback, [Full Name]!`

The form values, validation classes, error messages and character counter are
reset. The success message disappears automatically after four seconds.

The Clear button also restores the complete initial state.

### Main Grade 3 Functions

- `showFieldError()` displays an error message and invalid state.
- `clearFieldError()` changes a checked field to its valid state.
- `clearFieldState()` restores an optional empty field to neutral.
- `validateFullName()` checks the name requirements.
- `validateEmail()` checks the email format.
- `validateTopic()` confirms that a topic was selected.
- `validateComments()` checks the Comments requirement.
- `validateWebsite()` checks the optional URL.
- `updateCharacterCount()` updates the live counter.
- `resetForm()` restores the complete initial state.
- `handleFormSubmit()` validates the form and controls submission feedback.

## Grade 4: Data-Driven Skills Showcase

The Skills page is generated dynamically from a JavaScript array containing 22
skill objects across five categories:

- Frontend
- Backend
- Databases
- Testing and DevOps
- Cloud and AI

Every skill object contains:

- A unique ID
- Name
- Category
- Proficiency from 1 to 5
- Years of experience
- Description
- Technology icon class

The `renderSkills()` function creates the cards with DOM methods instead of
placing repeated cards directly in the HTML.

### Filtering

The category buttons use `data-category` attributes. Selecting a button updates
the active category, its `aria-pressed` state and the displayed cards.

The available filters are:

- All Skills
- Frontend
- Backend
- Databases
- Testing and DevOps
- Cloud and AI

### Sorting

The Skills page supports three sorting choices:

- Proficiency from high to low
- Experience from high to low
- Name from A to Z

The sorting function copies the filtered array before calling `sort()`. This
prevents the original skills data from being changed.

### Combined State

Filtering and sorting use the shared `activeCategory` and `activeSort` state
variables. Changing the sorting option does not reset the selected category,
and changing the category does not reset the selected sorting option.

### Dynamic Result Counter

The result counter displays the number of visible skills, for example:

`Showing 7 of 22 skills`

It uses `role="status"`, `aria-live="polite"` and `aria-atomic="true"` so that
updates can be announced by assistive technology.

### Skills Accessibility

The Skills page includes:

- Keyboard-accessible filter buttons and sorting control
- Visible focus indicators
- `aria-pressed` states on category buttons
- A live result counter
- A list role for the skills container
- List-item roles for generated skill cards
- Written proficiency values alongside decorative visual bars
- Reduced-motion support
- A `noscript` fallback message

### Skills Responsive Design

The Skills grid displays:

- Three columns on desktop
- Two columns on tablet
- One column on mobile

Testing evidence is stored in the `screenshots` folder.

## Design System and CSS custom properties

The visual identity combines deep plum headings, warm cream surfaces, muted body text, and a controlled gold accent.
:root {
--plum: #42184f;
--gold: #bd9140;
--dark: #211c23;
--text: #715878;
--cream: #fffdf9;
--light-cream: #faf7f1;
--blush: #f4eaf0;
--border: #e8dfd4;
}

## Seed Constraint

The seed constraint is the gold accent colour #BD9140. It is used for:

- Active and hovered navigation links
- Introductory labels
- Highlighted heading text
- Timeline markers
- Selected borders
- Buttons and interaction feedback
- Keyboard focus indicators
  Gold is used as an accent instead of a dominant background colour. This allows
  it to guide attention without overwhelming the design.

## Typography

- Headings: Cormorant Garamond
- Body text, navigation, buttons and form controls: Jost
  Cormorant Garamond gives the headings an elegant and personal appearance,
  while Jost keeps paragraphs and interactive controls clear and readable.

## Responsive Design

The website uses CSS Grid, Flexbox, clamp() and media queries to adapt its
layout.
The primary mobile breakpoint is 850px, with an additional small-phone
breakpoint at 520px.
Responsive behaviour includes:

- Project cards: three columns, two columns and then one column
- Gallery: three columns, two columns and then one column
- Experience cards: two columns followed by one column
- Contact section: two columns followed by one column
- CSS-only hamburger navigation below 850px
- Smaller typography, images and spacing on narrow screens
  Anchor destinations use scroll-margin-top so that headings remain visible
  below the fixed header.
- Feedback page: two columns on desktop and one column on smaller screens
- Skills grid: three columns, two columns and then one column

## Semantic HTML

The website uses semantic elements to describe the purpose of its content:

- <header> contains the repeated identity and navigation
- <nav> groups the page links
- <main> contains each page's unique content
- <section> groups related content
- <article> represents each independent project
- <figure> and <figcaption> connect gallery images to their descriptions
- `<form>` groups the controls on the Contact and Feedback pages
- <footer> contains secondary navigation and copyright information
  Every page contains one main <h1> describing its subject.

## Accessibility

Accessibility features include:

- Descriptive alt text for meaningful images
- Accessible labels for navigation areas
- Connected <label> elements for form controls
- Accessible names for external icon links
- aria-current="page" on the current navigation link
- Visible :focus-visible keyboard states
- A keyboard-accessible CSS-only mobile menu
- Reduced animation through prefers-reduced-motion
- Responsive layouts without removing important content
- Error messages connected to fields using `aria-describedby`
- Dynamic `aria-invalid` states
- A live status area for submission feedback
- Written validation messages that do not rely on colour alone
- Keyboard focus moves to the first invalid field after submission

## Main Sections

### Home

The Home page contains a split-background Hero section, arched portrait,
overlapping information card, primary project link and social-media links.

### About

The About page presents a biography followed by responsive Education and Work
Experience timeline cards.

### Skills

The Skills page presents 22 technical skills generated dynamically from a
JavaScript array. Visitors can filter the skills by category and sort them by
proficiency, experience or name.

Filtering and sorting work together through shared state variables. A live
counter communicates how many skills are currently displayed.

### Projects and Gallery

The Projects page contains six semantic project articles and a responsive
3 × 3 gallery. Every gallery image uses <figure> and <figcaption>.

### Contact

The Contact page contains Name, Email, Subject and Message fields. Every field
has a connected label and uses HTML validation.
Because this project does not include a backend, the form uses mailto: and
requires a configured email application.

### Feedback

The Feedback page contains an accessible form with Full Name, Email Address,
Topic of Interest, Comments and an optional Website field.

JavaScript provides immediate validation, written error messages, valid and
invalid field states, a live character counter, complete Clear behaviour and a
personalized success message.

Because Lab 2 does not include a backend, the feedback is processed only in the
browser and is not sent to a server.

## Technologies

### Core

- HTML5
- CSS3
- Vanilla JavaScript
- CSS Grid
- Flexbox
- CSS custom properties
- CSS media queries
- DOM manipulation
- JavaScript event listeners
- Google Fonts
- Font Awesome
- Devicon technology icons

## Project Constraints

- Vanilla JavaScript only
- No JavaScript frameworks
- No jQuery
- No backend
- Feedback form data is not sent to a server

## Problem-Solving Evidence

### Problem 1: The original one-page structure

The first version placed all content on one long page. Although the navigation
worked, this structure did not satisfy the advanced multi-page requirement.
For Lab 1, I separated the original one-page portfolio into four interconnected
HTML documents. Lab 2 later added `feedback.html` and `skills.html`, bringing
the portfolio to six interconnected pages.

### Problem 2: Keyboard access to the CSS-only mobile menu

The first mobile-menu checkbox used display: none. This removed it from the
keyboard tab order.

I replaced that rule with a visually hidden but focusable checkbox:

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

### Problem 3: Anchor links and the fixed header

The fixed header originally covered headings reached through anchor links.
I added scroll-margin-top to the anchor destinations:
#experience-education,
#gallery,
#contact {
scroll-margin-top: 88px;
}

### Problem 4: Preventing repeated form event listeners

While developing the Feedback form, I accidentally placed the Submit and Clear
event listeners inside `resetForm()`. This meant that every reset could register
another copy of the same event listener.

I moved the event listeners outside `resetForm()` and placed them once at the
end of `feedback.js`. The reset function now only resets values, validation
classes, messages, the character counter and the status area.

This correction keeps each function focused on one responsibility and prevents
the same submission handler from running more than once.

## Testing

The portfolio was tested at the following viewport widths:

- Desktop: 1440px
- Tablet: 768px
- Mobile: 390px
- Small mobile: 360px
  Testing covered:
- Header and navigation behaviour
- CSS-only hamburger menu
- Anchor-link positioning
- Project and gallery grids
- Image scaling and cropping
- Contact-form alignment
- Keyboard focus indicators
- Horizontal overflow
- Reduced-motion behaviour
- Alternative text and form labels

### Grade 3 Feedback Form Testing

- All six HTML pages were checked using the W3C Markup Validation Service,
  including the Lab 2 `feedback.html` and `skills.html` pages. The shared
  stylesheet was checked using the W3C CSS Validation Service. JavaScript syntax
  was checked using `node --check`, and the browser Console was checked for
  runtime errors.
- Empty feedback-form submission
- Invalid and valid field values
- Live Comments counter
- Optional Website behaviour
- Personalized success message
- Four-second success-message timeout
- Complete Clear-button reset
- Keyboard-only form operation
- Browser-console error check

### Grade 4 Skills Testing

The Skills page was tested for:

- Correct rendering of all 22 skill objects
- All five category filters
- Proficiency, experience and alphabetical sorting
- Combined filtering and sorting
- Dynamic result-counter updates
- Keyboard operation
- Visible focus states
- Desktop, tablet and mobile layouts
- Horizontal overflow
- JavaScript Console errors

The JavaScript syntax was also checked with:

`node --check websites/js/skills.js`
