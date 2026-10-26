# Patience Evertsson Portfolio Website

## Project Overview

This project is a responsive and accessible multi-page portfolio created using
HTML and CSS only.

The portfolio demonstrates:

- Semantic HTML
- CSS Grid and Flexbox
- CSS custom properties
- Responsive media queries
- Accessible navigation and form labels
- Keyboard focus states
- Reduced-motion support
- CSS-only mobile navigation

## Pages

The portfolio contains four interconnected pages:

- `index.html` – Hero introduction and social links
- `about.html` – Biography, education and work experience
- `projects.html` – Six projects and a 3 × 3 original-image gallery
- `contact.html` – Contact information and a four-field form

Every page uses the same header, footer and `style.css` file. Relative links
allow visitors to move between the pages.

The current page is identified using `aria-current="page"` and a gold visual
state.

## How to View the Website

1. Download or clone the project.
2. Keep the HTML files, stylesheet and image folders in their original
   structure.
3. Open `index.html` in a web browser.
4. Use the navigation links to move between the four pages.

No installation or JavaScript is required.

## Project Structure

LAB1_PORTFOLIO/
├── images/
├── screenshots/
├── websites/
│ ├── about.html
│ ├── contact.html
│ ├── index.html
│ ├── projects.html
│ └── style.css
├── build_log.md
├── Patience-Documentation.pdf
└── README.md

The four HTML pages and shared stylesheet are stored in the `websites` folder.
Website images are stored in `images`, while development and testing evidence
is stored in `screenshots`. The main project documentation is provided through
`README.md`, `build_log.md` and `Patience-Documentation.pdf`.

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

## Semantic HTML

The website uses semantic elements to describe the purpose of its content:

- <header> contains the repeated identity and navigation
- <nav> groups the page links
- <main> contains each page's unique content
- <section> groups related content
- <article> represents each independent project
- <figure> and <figcaption> connect gallery images to their descriptions
- <form> contains the contact controls
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

## Main Sections

### Home

The Home page contains a split-background Hero section, arched portrait,
overlapping information card, primary project link and social-media links.

### About

The About page presents a biography followed by responsive Education and Work
Experience timeline cards.

### Projects and Gallery

The Projects page contains six semantic project articles and a responsive
3 × 3 gallery. Every gallery image uses <figure> and <figcaption>.

### Contact

The Contact page contains Name, Email, Subject and Message fields. Every field
has a connected label and uses HTML validation.
Because this project does not include a backend, the form uses mailto: and
requires a configured email application.

## Technologies

## Core

- HTML5
- CSS3
- CSS Grid
- Flexbox
- CSS custom properties
- CSS media queries
- Google Fonts
- Font Awesome

## Project Constraint

- No JavaScript

## Problem-Solving Evidence

### Problem 1: The original one-page structure

The first version placed all content on one long page. Although the navigation
worked, this structure did not satisfy the advanced multi-page requirement.
I separated the content into four HTML documents and connected them using
repeated header and footer navigation. Each page now has a clear purpose, while
the shared stylesheet maintains visual consistency.

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
  All four HTML pages were checked using the W3C Markup Validation Service. The
  stylesheet was checked using the W3C CSS Validation Service.
  The original testing and development screenshots are stored in the
  screenshots folder. The Build Log explains the problems, changes and final
  results shown in those screenshots.
# patience-interactive-lab2
