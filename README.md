# UI

A collection of **React** (with **TypeScript**) and **Tailwind CSS** components for building web applications. Written for personal use to reduce the startup time of greenfield development.

This library is loosely inspired by [shadcn/ui](https://ui.shadcn.com/). Simply install the required dependencies and then copy-and-paste the components into your codebase.

## Prerequisites

Some configuration is required to use these components...

### Dependencies

You must install the following NPM packages:

- [`tailwindcss`](https://tailwindcss.com/docs/installation)
- [`tailwind-merge`](https://www.npmjs.com/package/tailwind-merge)
- [`class-variance-authority`](https://cva.style/docs)
- For some components, [`headlessui`](https://headlessui.com/`).

### Color Palette

My components use Tailwind CSS' `neutral` color palette. To alter this, either alias `neutral` to point to a different color palette such as `zinc` (recommended), or amend the styles directly.
