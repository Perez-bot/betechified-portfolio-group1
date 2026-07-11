# betechified-portfolio-group1

# Premium Interactive Portfolio Website

Welcome to the official repository for **Group 1's Advanced Frontend Capstone Project**. This project is a fully responsive, highly interactive portfolio application engineered using semantic HTML5, modern CSS architectures (Custom Properties, Flexbox, Grid), and modular Vanilla JavaScript DOM engine controllers.

This website goes far beyond a basic Minimum Viable Product (MVP) to showcase semantic layouts, real-time input verification algorithms, and dynamic interface styling.

---

## 📂 Project Structure Overview

```text
portfolio-project/
│
├── index.html          # Semantic HTML5 Application Skeleton
├── style.css           # Design Tokens, Fluid Layouts & Theme Styling
├── script.js          # Interactive JavaScript DOM Engine Controllers
└── images/             # Tracked Local Visual Image Assets
    ├── hero-illustration.svg
    ├── project-medium.jpg
    ├── project-dashboard.jpg
    └── project-bootstrap.jpg

**🧱 File Breakdown & Code Logic Explanation**
## 1. index.html — The Structural Skeleton
This file holds the semantic blueprint of our application. Instead of using generic <div> wrappers everywhere, it follows HTML5 Accessibility (a11y) best practices to ensure clear document parsing.

<header class="navbar">: Contains our branding logo and main navigation links. The links use internal anchors (href="#about") to enable smooth scrolling targets.

<section id="hero">: High-impact introductory block using structural semantic tags (<h1>, <p>, and Call-to-Action buttons) designed to grab user attention immediately.

<section id="skills">: Structured using text descriptions coupled with progress bar containers (.progress-bar-wrap), dynamically tracking skill percentages cleanly.

<article class="project-card">: The projects section uses independent <article> tags for each card asset. Crucially, each card carries a custom data attribute (data-category="core" or data-category="apps") which our JavaScript uses to sort components seamlessly.

<form id="portfolioContactForm">: Outfitted with a novalidate attribute. This overrides browser-default alerts, allowing our custom JavaScript validator engine to handle form error checking smoothly.

## 2. style.css — The Visual Design System
Our styling framework relies heavily on modern layouts and clean design tokens, eliminating the need for bulky external frameworks.

CSS Custom Properties (:root & [data-theme="dark"]):
We declared design tokens (like --bg-main, --text-main, and --accent) as variables. When the JavaScript engine applies the data-theme="dark" attribute to the root element, the browser automatically swaps out the color values globally.

Flexbox & CSS Grid:

Flexbox is used for single-axis alignments, such as keeping the navigation items neatly spaced inside the navbar.

CSS Grid (grid-template-columns: repeat(auto-fit, minmax(320px, 1fr))) manages our responsive grids. The auto-fit and minmax properties allow card grids to scale and snap across screens automatically without breaking.

Micro-Interactions:
We added hover states (transform: scale(1.05)) with a custom cubic-bezier timing curve (transition: var(--transition)). This gives buttons and image elements elegant, snappy animation feedback when hovered.

## 3. script.js — The Interactivity Engine
The JavaScript file is wrapped entirely inside a DOMContentLoaded listener, guaranteeing that the script runs safely only after the browser has completely parsed the HTML structure. It runs 4 modular engines:

🌗 Module 1: Light/Dark Theme Controller
How it works: It listens for a click event on the #themeToggle button. It checks the current theme attribute on the document root, toggles it between light and dark, and caches the choice in the user's browser using localStorage. This preserves their choice even if they refresh the page.

📱 Module 2: Mobile Mobile Navigation (Hamburger)
How it works: Monitors clicks on the .hamburger icon. When clicked, it toggles an .active CSS class onto the menu drawer. This triggers a smooth CSS transition that slides the navigation overlay into view on mobile screens. Clicking a nav link automatically closes the drawer.

🔍 Module 3: Dynamic Category Project Filter
How it works: Listens for clicks on the filter category buttons. When a user clicks a button (e.g., "Web Apps"), the script reads its data-filter value. It then loops through all project cards, matching the filter value against each card's data-category. Unmatched cards are hidden with a smooth scaling animation, while matching cards are instantly highlighted.

✉️ Module 4: Live Contact Form Validation
How it works: Listens for the form's submit event and overrides raw page reloads via event.preventDefault(). It evaluates the text inputs using string evaluation (.trim() !== '') and checks the email format against a strict Regular Expression (RegEx) matching array (emailRegex). If any field fails validation, a .invalid class is applied to display a custom error tooltip. If all checks pass, it displays a success banner and resets the form.

**🎯 Presentation Preparation Guide for Group Members**
To ensure our group functions smoothly and scores a perfect mark during the live presentation, keep these key points in mind:

Code Consistency: If the tutor asks how the website is dark-mode responsive, point out that we manipulate the root element's data-theme attribute via JavaScript, letting the CSS Variables update the colors globally and cleanly.

Responsiveness Mastery: Be ready to show how the project grid naturally reflows on small screens thanks to the CSS Grid auto-fit logic, keeping it completely framework-free.

Form Security: Highlight that we use a custom RegEx validator to intercept errors in real-time, providing an elegant user experience before data is even dispatched.
