# Project: Personal Portfolio v4

This document provides a comprehensive overview of the `portfolio-v4` project, designed to serve as a contextual guide for AI-powered development assistance.

## Project Overview

This is a personal portfolio website for Abraham Anak Agung, a software creator. It showcases his projects, ideas, and provides a point of contact. The site is built as a static site using [Astro](https://astro.build/) and styled with [Tailwind CSS](https://tailwindcss.com/) and [Shadcn/ui](https://ui.shadcn.com/).

### Core Technologies

-   **Framework**: [Astro](https://astro.build/)
-   **UI Components**: [React](https://reactjs.org/), integrated via `@astrojs/react`.
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/) with a custom configuration.
-   **Content**: Content is managed through [Sanity.io](https://www.sanity.io/) and also from local JSON files (`src/data/projects.json`).
-   **Deployment**: The project is configured for deployment on [Vercel](https://vercel.com/).
-   **Package Manager**: The project uses `bun` as indicated by the `bun.lockb` file.

### Architecture

-   **Pages**: Located in `src/pages/`, defining the routes for the website. The main pages are `index.astro`, `projects.astro`, `wander.astro`, and a blog section under `src/pages/blog/`.
-   **Layouts**: The main site structure is defined in `src/layouts/Layout.astro`. It includes the main navigation (`src/layouts/MainNav.astro`) and global styles.
-   **Components**: Reusable UI components, both in Astro (`.astro`) and React (`.tsx`), are located in `src/components/`. This includes UI primitives from `shadcn/ui`.
-   **Data**: Project data is stored in `src/data/projects.json`. Blog and other content are fetched from Sanity.
-   **Static Site Generation**: The `output` in `astro.config.mjs` is set to `static`, meaning the site is pre-rendered into HTML at build time.

## Building and Running

The following scripts are available in `package.json` to manage the development lifecycle.

-   **Development Server**: To start the local development server:
    ```bash
    bun dev
    ```
    or
    ```bash
    bun start
    ```
-   **Build**: To build the project for production:
    ```bash
    bun run build
    ```
    This command also runs `astro check` for type-checking.
-   **Preview**: To preview the production build locally:
    ```bash
    bun run preview
    ```

## Development Conventions

-   **Styling**: Use Tailwind CSS classes for styling. Base styles are disabled in the astro config (`applyBaseStyles: false`), so styling is primarily utility-class driven.
-   **Components**: Create reusable components in `src/components/`. Use `.astro` for components that don't require client-side interactivity, and `.tsx` for React components.
-   **Content**: For blog posts and dynamic content, use the Sanity Studio. For the projects list, update `src/data/projects.json`.
-   **Code Formatting**: The project includes an `.editorconfig` file, which suggests a consistent coding style.
-   **Transitions**: The site uses Astro's `ViewTransitions` for smooth page transitions.
-   **Environment Variables**: The Sanity integration relies on environment variables (`SANITY_PROJECT_ID`, `SANITY_DATASET`) which should be present in the environment or a `.env` file.
