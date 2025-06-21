# FarmerLine Assessment

A simplified dashboard built with React that displays key farmer information.

## Login Credentials
  Use the credentials below to login admin account :

- Email: admin@farmerline.co
- Password: password123

## Changes made to Mock Data.
   The reason for this change is because the initial mock Data structure was making easy work complicated and time wasting:

  ### Old Mock Data   

   ```json                                                             
   {
   "farmerId": "F005",
   "name": "Grace Amoah", 
   "location": "Eastern, Koforidua", 
   "contactNumber": "+233277889900",
   "registrationDate": "2023-05-12",
   "productsPurchased": ["Tools"]
   },
   ```

  ### New Mock Data
   ```json
   {
   "farmerId": "F005",
   "firstName": "Grace", 
   "lastName": "Amoah",
   "region": "Eastern", 
   "district": "Koforidua",
   "contactNumber": "0277889900",
   "registrationDate": "2023-05-12",
   "productsPurchased": ["Tools"]
   }
   ```


## Project Structure

### `src/` — Main Source Folder

- **`components/`**  
  Reusable React components.  
  - `ui/`: UI primitives powered by Shadcn (e.g., Button, Dialog, Input).  
  - `utils/`: Utility components like route guards (e.g., ProtectedRoute).

- **`hooks/`**  
  Custom React hooks, e.g., for responsive behavior or shared logic.

- **`lib/`**  
  Utility/helper functions — e.g., Tailwind class merging or common formatters.

- **`services/`**  
  Contains mock data or service logic (e.g., static API-like files).

- **`schema/`**  
  Zod schemas used for form validation and type enforcement.

- **`pages/`**  
  Route-based components. Each file or folder here maps to a page route.

### Other Key Files

- **`App.tsx`** — Root component that sets up routes and layout.
- **`main.tsx`** — React app entry point. Renders the `App` component and mounts to DOM.
- **`index.css`** — Global styles and Tailwind/Shadcn setup.
- **`index.html`** — HTML template used by Vite.
- **`vite-env.d.ts`** — Type definitions required for Vite.
- **`tsconfig*.json`** — TypeScript configuration files for the app and tooling.
- **`package.json`** — Lists project dependencies and scripts.

  


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