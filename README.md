# Frontend Mentor - Hotel Booking Confirmation Page Solution

This is my solution to the **Hotel Booking Confirmation Page** challenge on Frontend Mentor. This project focuses on building a modern, fully responsive hotel booking confirmation dashboard that adapts seamlessly across desktop, tablet, and mobile devices.

The challenge provided an excellent opportunity to practice React component architecture, reusable components, React Hooks, responsive layouts with Tailwind CSS v4, CSS Grid, Flexbox, interactive UI states, click-outside detection, and deploying a production-ready application using Vite and GitHub Pages.

---

## Table of contents

- [Overview](#overview)
- [The challenge](#the-challenge)
- [Design](#design)
- [Links](#links)
- [My process](#my-process)
- [Built with](#built-with)
- [What I learned](#what-i-learned)

---

## Overview

This project is a responsive hotel booking confirmation dashboard that displays a guest's stay information, reservation details, hotel services, weather information, and booking-related actions.

The interface was built following a mobile-first approach using React and Tailwind CSS v4. The layout adapts across mobile, tablet, and desktop screen sizes while maintaining a consistent visual hierarchy and user experience.

The application is organized into reusable React components, making it easier to maintain and extend the interface.

---

## The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size.
- View hotel booking confirmation details.
- Navigate through the different sections of the hotel dashboard.
- Open and close the mobile navigation menu.
- Close the mobile menu by clicking outside of it.
- View interactive hover states across the interface.
- Experience responsive layouts across mobile, tablet, and desktop devices.
- View different reservation information based on the reservation type.
- Interact with UI elements using reusable React components.

---

## Design

### Desktop Design

<img src="./design/desktop-design.jpg" alt="Desktop design preview" width="700">

### Active states

<img src="./design/active-states.jpg" alt="Desktop design active states" width="700">

### Mobile Design

<img src="./design/mobile-design.jpg" alt="Mobile design preview" width="250">

### Mobile Navigation

<img src="./design/mobile-menu.jpg" alt="Mobile navigation design" width="250">

---

## Links

- Solution URL: [GitHub Repository](https://github.com/mlopezl/hotel-booking-confimation-page)
- Live Site URL: [Live Demo](https://mlopezl.github.io/hotel-booking-confimation-page/)

---

## My process

- Structured the application using reusable React functional components.

- Organized the project by feature-based component folders, including:

  - Navigation
  - Header
  - Cards
  - Reservations

- Followed a mobile-first workflow to ensure a responsive experience across different screen sizes.

- Built responsive layouts using Flexbox, CSS Grid, and Tailwind CSS utility classes.

- Implemented responsive breakpoints using:

  - `md:`
  - `lg:`
  - `xl:`

- Customized Tailwind CSS v4 using the `@theme` directive.

- Created a custom design system using CSS variables for:

  - Colors
  - Typography

- Configured custom fonts from Google Fonts, including:

  - Fraunces
  - DM Sans
  - DM Mono

- Created reusable components for navigation items, cards, reservation content, and interactive elements.

- Used React props to pass data and callback functions between parent and child components.

- Managed UI state using React's `useState` Hook.

- Implemented conditional rendering based on component state and data values.

- Rendered navigation items and reservation cards dynamically using the `.map()` method.

- Used unique `key` props when rendering dynamic lists.

- Implemented component composition using the `children` prop.

- Created data-driven reservation cards that render different content depending on the reservation type.

- Implemented interactive hover states using React state and mouse events.

- Added hover interactions using:

  - `onMouseEnter`
  - `onMouseLeave`

- Implemented a responsive mobile navigation menu using React state.

- Managed the mobile navigation state through reusable callback functions.

- Added click-outside detection using:

  - `useEffect`
  - `useRef`
  - `document.addEventListener()`

- Automatically close the mobile navigation when the user clicks outside the navigation container.

- Cleaned up global event listeners when the component unmounts.

- Added accessibility attributes to interactive elements, including:

  - `aria-expanded`
  - `aria-controls`
  - `aria-label`

- Used SVG assets and optimized images throughout the interface.

- Built and optimized the project using Vite.

- Generated a production build with:

```bash
pnpm run build
```
- Deployed the production build to GitHub Pages.

## Built with

- React
- JSX
- JavaScript (ES6+)
- React Hooks
- `useState`
- `useEffect`
- `useRef`
- React Props
- Component Composition
- Tailwind CSS v4
- CSS Grid
- Flexbox
- CSS Custom Properties (Variables)
- Google Fonts
- SVG Assets
- Responsive Design Principles
- Mobile-first Workflow
- Semantic HTML
- Conditional Rendering
- Dynamic List Rendering
- Event Handling
- DOM Events
- Click-outside Detection
- Accessibility Attributes
- Tailwind Theme Customization
- Vite
- PNPM
- ESLint
- GitHub Pages

---

## What I learned

- Building responsive interfaces using React and Tailwind CSS.
- Creating reusable React components with a clear separation of responsibilities.
- Passing data and callback functions between components using props.
- Managing interactive UI states with the `useState` Hook.
- Using conditional rendering to dynamically change the interface based on application state.
- Rendering dynamic content from JavaScript arrays using the `.map()` method.
- Understanding the importance of unique `key` props when rendering lists in React.
- Using component composition and the `children` prop to create flexible reusable components.
- Building data-driven UI components where the content is separated from the presentation logic.
- Creating interactive hover effects by combining React state with Tailwind CSS classes.
- Working with React mouse events such as `onMouseEnter` and `onMouseLeave`.
- Using `useEffect` to manage side effects and global DOM event listeners.
- Using `useRef` to reference DOM elements from React components.
- Detecting clicks outside a component using `contains()`.
- Cleaning up event listeners inside the `useEffect` cleanup function.
- Creating accessible navigation controls using ARIA attributes.
- Working with Tailwind CSS v4 and the `@theme` configuration system.
- Creating reusable design tokens with CSS custom properties.
- Building responsive layouts using CSS Grid and Flexbox together.
- Organizing a React application using a feature-based component structure.
- Understanding the Vite development and production workflow.
- Building optimized production bundles with Vite.
- Deploying a React application to GitHub Pages.