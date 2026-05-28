# Photo Gallery & Portfolio

A professional photo gallery and portfolio application built with Next.js 15, TypeScript, and Tailwind CSS. This project is designed for **demoing GitHub Copilot features** in a real-world, component-driven Next.js application. The included demos showcase how Copilot can assist with code generation, refactoring, UI building, and more.

## Demos

- All demo guides and examples are in the [`demos/`](demos/) folder.
- For more information about each demo, refer to the [README](demos/README.md) file in the `demos/` directory.
- To get started, check out the first demo [`features-demo.md`](demos/features-demo.md) for a walkthrough of gallery features and Copilot capabilities.

### Creating a New Demo

If you want to contribute and create a new demo, follow these steps:

1. Open GitHub Copilot Chat.
2. Type the prompt `/create-copilot-demo' with an explanation of your demo idea
3. Copilot will generate a new demo file in the `demos/` directory.
4. Fill in remaining sections with detailed instructions, examples, and expected results.

After finishing the demo, don't forget this quick follow-up:

1. Add in the overview, key skills, and demo link to the [demo README](demos/README.md)

## Getting Started

### Technical Requirements

- **Node.js** v18 or newer
- **npm** (or yarn, pnpm, bun)

### Quick Start with GitHub Codespaces

The fastest way to get started is using GitHub Codespaces:

1. Click the **"Code"** button on the GitHub repository page
2. Select the **"Codespaces"** tab
3. Click **"Create codespace on main"** (or your current branch)
4. Wait for the codespace to build and start

The codespace will automatically:
- Install all dependencies (`npm install`)
- Start the development server (`npm run dev`)
- Configure GitHub Copilot and essential VS Code extensions
- Forward port 3000 for the Next.js application

Once ready, you can access the application at the forwarded port URL provided in the terminal.

### Local Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ps-copilot-sandbox/copilot-intermediate-gallery-repo.git
   cd gallery-repo
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Theming (Light / Dark / System)

The app ships with a built-in theme system that supports three states:

- `light` – always light mode
- `dark` – always dark mode
- `system` – follows the operating system preference (default)

The current selection is persisted in `localStorage` under the `theme` key and is
applied to `<html>` (as the `.dark` class) by a small inline script in the document
`<head>`, so there is **no flash of incorrect theme** on first paint.

### Toggling the theme

A keyboard-accessible toggle button is rendered in the top navigation. Clicking it
(or pressing Enter / Space when focused) cycles through `light → dark → system`.

### Using the theme in components

```tsx
"use client";
import { useTheme } from "@/components/theme";

export function MyComponent() {
  const { theme, resolvedTheme, setTheme } = useTheme();
  // theme: "light" | "dark" | "system" (user preference)
  // resolvedTheme: "light" | "dark" (effective theme, after resolving "system")
  return <button onClick={() => setTheme("dark")}>Use dark</button>;
}
```

When styling with Tailwind, use the `dark:` variant as usual – it is wired to the
`.dark` class on `<html>`:

```tsx
<div className="bg-white text-slate-900 dark:bg-slate-900 dark:text-white" />
```

## Project Structure

```bash
src/
├── app/                 # Next.js 15 App Router pages
├── components/          # Reusable React components
├── lib/                 # Utility functions and helpers
demos/                   # Demo guides and templates
```