# FarmerLine Assessment

A simplified dashboard built with React that displays key farmer information.

## Project Structure
.
├── src/                            # Main source code directory
│   ├── components/                 # Reusable React components
│   │   ├── ui/                     # Shadcn UI components (buttons, cards, etc.)
│   │   └── utils/                  # e.g., ProtectedRoute for admin access
│
│   ├── hooks/                      # Custom hooks (e.g., Shadcn mobile responsive config)
│   ├── lib/                        # Utility functions (e.g., Tailwind class merging helpers)
│   ├── services/                   # Mock data
│   ├── pages/                      # Route-based components (each file = a route)
│
│   ├── App.tsx                     # Main application layout & logic
│   ├── main.tsx                    # App entry point (renders App, includes router setup)
│   ├── index.css                   # Global styles and Tailwind/Shadcn config
│   ├── vite-env.d.ts               # Vite-specific type definitions
│   ├── index.html                  # Root HTML file used by Vite to mount the React app

│
├── package.json                   # Project metadata, dependencies, and scripts
├── package-lock.json              # Exact dependency versions
├── tsconfig.json                  # Global TypeScript configuration
├── tsconfig.app.json              # TypeScript config specific to the app
├── tsconfig.node.json             # TypeScript config for Node-related scripts


## Tech Stack

- **Framework**: React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4.0
- **Routing**: React Router DOM (library for routing)
- **Package Manager**: NPM
- **Build Tool**: Vite

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v20 or higher)
- Node package manager(Npm) - comes with node js

## Getting Started

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd farmerline assessment
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev 
   ```

## Project Guidelines

- Use TypeScript for all new code
- Follow the existing code style and naming conventions
- Update documentation for significant changes
- Use conventional commit messages

## Learn More

- [Vite Documentation](https://vite.dev/)
- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [Shadcn Documentation](https://ui.shadcn.com/)
- [Typescript Documentation](https://www.typescriptlang.org/)

## Support

For support and questions, please refer to the project documentation.