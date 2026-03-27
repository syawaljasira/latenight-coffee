This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

First, run the development server:

```bash
npm run dev
```

# Kopi Nusantara ☕

A modern, responsive landing page for Kopi Nusantara - a specialty coffee shop celebrating Indonesian coffee heritage.

![Next.js](https://img.shields.io/badge/Next.js-14-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3-06B6D4)
![License](https://img.shields.io/badge/License-MIT-green)

## 📋 Table of Contents

- [Kopi Nusantara ☕](#kopi-nusantara-)
  - [📋 Table of Contents](#-table-of-contents)
  - [🎯 Overview](#-overview)
  - [🛠️ Tech Stack](#️-tech-stack)
  - [🚀 Getting Started](#-getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
- [or](#or)

## 🎯 Overview

Kopi Nusantara landing page showcases a premium coffee shop brand with:

- Elegant visual design highlighting Indonesian coffee culture
- Interactive menu display with coffee selections
- Dynamic business hours status
- Smooth scroll animations
- Fully responsive layout

## 🛠️ Tech Stack

| Technology             | Purpose                                            |
| ---------------------- | -------------------------------------------------- |
| **Next.js 14**         | React framework with App Router for SSR/SSG        |
| **TypeScript**         | Type safety and better developer experience        |
| **TailwindCSS + Sass** | Utility-first styling with custom SCSS mixins      |
| **motion**             | Smooth scroll and hover animations                 |
| **react-icons**        | Consistent iconography across the site             |
| **moment.js**          | Dynamic open/closed status based on business hours |
| **Jest + RTL**         | Component testing                                  |

latenight-coffee/
├── public/
│ └── assets/ # All image assets
├── src/
│ ├── app/
│ │ ├── layout.tsx # Root layout (fonts, metadata)
│ │ ├── page.tsx # Main landing page
│ │ ├── not-found.tsx # Not found page
│ │ └── globals.css # Global styles + Tailwind
│ ├── components/
│ │ ├── home/ # all components section for landing page
│ │ ├── Navbar.tsx
│ │ ├── Footer.tsx
│ │ ├── Button.tsx
│ │ └── NotFoundSection.tsx
│ ├── utils/
│ │ └── dummyData.ts # Menu items, testimonials, USP data, other..
│ └── styles/
│ ├── main.scss # another global SCSS
├── components/tests/ # Component tests
├── tailwind.config.ts
└── package.json

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm / yarn / pnpm

### Installation

1. Clone the repository:

```bash
git clone https://github.com/syawaljasira/latenight-coffee.git
cd latenight-coffee

2. Install dependencies:

npm install

3. Run the development server:

npm run dev

4. Open http://localhost:3000 to view the site.

Build for Production

npm run build
npm start

✨ Features

Smooth Animations - Scroll-triggered animations with motion

Responsive Design - Fully responsive across all devices

Type Safety - Full TypeScript support

SEO Optimized - Metadata and semantic HTML

Fast Performance - Optimized images and Next.js features

🧪 Testing
Run component tests with Jest and React Testing Library:

npm test
# or
npm test:watch

Test coverage includes:

- Navbar component

- Hero section

- Footer component
```
