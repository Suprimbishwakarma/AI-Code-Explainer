# AI Code Explainer 🧠

Built with React and Node.js, powered by OpenAI's language models through Nebius API.

## 📋 Table of Contents

- [Overview](#overview)
- [Technologies & Packages](#technologies--packages)
- [Project Structure](#project-structure)
- [What You'll Learn](#what-youll-learn)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [License](#license)

## 🎯 Overview

Simply paste your code, select the language, and get a clear, AI-generated explanation.

### Supported Languages
- JavaScript
- TypeScript
- Python
- Java
- Go
- Rust

## 🛠️ Technologies & Packages

### Frontend (Client)

#### Core Framework & Build Tools
- **[React](https://react.dev/)** (v19.2.0) - Modern UI library with latest features
  - **[react-dom](https://react.dev/reference/react-dom)** (v19.2.0) - DOM rendering for React
- **[Vite](https://vitejs.dev/)** (v7.2.4) - Next-generation frontend build tool for lightning-fast development

#### Styling
- **[TailwindCSS](https://tailwindcss.com/)** (v4.1.17) - Utility-first CSS framework for rapid UI development
- **[@tailwindcss/vite](https://www.npmjs.com/package/@tailwindcss/vite)** (v4.1.17) - Vite plugin for Tailwind CSS

#### Markdown & Formatting
- **[react-markdown](https://github.com/remarkjs/react-markdown)** (v10.1.0) - Renders markdown in React components
- **[remark-gfm](https://github.com/remarkjs/remark-gfm)** (v4.0.1) - GitHub Flavored Markdown plugin for enhanced markdown features

#### Development Tools
- **[ESLint](https://eslint.org/)** (v9.39.1) - Code linting and quality enforcement
  - **[@eslint/js](https://www.npmjs.com/package/@eslint/js)** - ESLint JavaScript configuration
  - **[eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)** - Enforces React Hooks rules
  - **[eslint-plugin-react-refresh](https://www.npmjs.com/package/eslint-plugin-react-refresh)** - Validates React Refresh usage
- **[@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react)** (v5.1.1) - Official Vite plugin for React support
- **[globals](https://www.npmjs.com/package/globals)** (v16.5.0) - Global identifiers from different JavaScript environments

#### TypeScript Support
- **[@types/react](https://www.npmjs.com/package/@types/react)** (v19.2.5) - TypeScript definitions for React
- **[@types/react-dom](https://www.npmjs.com/package/@types/react-dom)** (v19.2.3) - TypeScript definitions for React DOM

### Backend (Server)

#### Core Framework & Runtime
- **[Express](https://expressjs.com/)** (v5.2.1) - Fast, unopinionated web framework for Node.js
- **[Node.js](https://nodejs.org/)** - JavaScript runtime (using ES Modules)

#### AI Integration
- **[OpenAI](https://github.com/openai/openai-node)** (v6.10.0) - Official OpenAI Node.js client library
  - Configured with Nebius API for AI-powered code explanations

#### Security & Middleware
- **[Helmet](https://helmetjs.github.io/)** (v8.1.0) - Secures Express apps by setting HTTP headers
- **[CORS](https://github.com/expressjs/cors)** (v2.8.5) - Cross-Origin Resource Sharing middleware
- **[express-rate-limit](https://github.com/express-rate-limit/express-rate-limit)** (v8.2.1) - Rate limiting middleware to prevent abuse
  - Configured to allow 100 requests per 15 minutes

#### Configuration & Development
- **[dotenv](https://github.com/motdotla/dotenv)** (v17.2.3) - Loads environment variables from `.env` file
- **[nodemon](https://nodemon.io/)** (v3.1.11) - Auto-restarts server during development

## 📁 Project Structure

```
AI-Code-Explainer/
├── client/                    # Frontend React application
│   ├── src/
│   │   ├── actionstate/      # Server actions (React 19 feature)
│   │   │   └── index.js      # Form action for code explanation
│   │   ├── components/       # React components
│   │   │   ├── CodeDetails.jsx    # Displays AI explanation
│   │   │   ├── Error.jsx          # Error message component
│   │   │   ├── Forms.jsx          # Code input form
│   │   │   └── Header.jsx         # App header
│   │   ├── App.jsx          # Main app component
│   │   ├── main.jsx         # Entry point
│   │   └── index.css        # Global styles
│   ├── index.html           # HTML template
│   ├── vite.config.js       # Vite configuration
│   ├── eslint.config.js     # ESLint configuration
│   └── package.json         # Client dependencies
│
├── server/                   # Backend Node.js application
│   ├── controllers/         # Route controllers
│   │   └── code.controllers.js   # Code explanation logic
│   ├── routes/              # API routes
│   │   └── code.route.js         # Code explanation endpoint
│   ├── app.js              # Express app setup
│   ├── server.js           # Server entry point
│   ├── .env                # Environment variables
│   └── package.json        # Server dependencies
│
└── LICENSE                  # MIT License
```

## 🎓 What You'll Learn

Building this project teaches you valuable full-stack development concepts:

### Frontend Development

1. **React 19 Features**
   - **`useActionState` Hook** - Managing form state with server actions
   - Modern form handling patterns
   - Optimistic UI updates and pending states

2. **State Management**
   - Local component state with `useState`
   - Form state management with React 19's `useActionState`
   - Handling loading, success, and error states

3. **Modern React Patterns**
   - Functional components and hooks
   - Component composition
   - Props and prop drilling
   - Conditional rendering

4. **Vite Build System**
   - Fast development with Hot Module Replacement (HMR)
   - Modern ES modules
   - Production builds and optimization

5. **TailwindCSS**
   - Utility-first CSS approach
   - Responsive design principles
   - Custom styling with utility classes
   - Modern UI design patterns (rounded corners, shadows, gradients)

6. **Markdown Rendering**
   - Parsing and rendering markdown in React
   - GitHub Flavored Markdown support
   - Safely displaying dynamic content

7. **Clipboard API**
   - Browser Clipboard API usage
   - Async/await patterns
   - Error handling in async operations

### Backend Development

8. **Express.js Framework**
   - RESTful API design
   - Routing and controllers pattern (MVC architecture)
   - Middleware implementation
   - Request/response handling

9. **API Integration**
   - OpenAI API integration
   - Custom baseURL configuration (Nebius API)
   - API key management
   - Request/response handling with external APIs

10. **Security Best Practices**
    - Helmet for HTTP header security
    - CORS configuration for cross-origin requests
    - Rate limiting to prevent API abuse
    - Environment variable management for sensitive data

11. **ES Modules in Node.js**
    - Using `import/export` syntax
    - `"type": "module"` in package.json
    - Modern JavaScript in backend

12. **Error Handling**
    - Try-catch blocks
    - Proper HTTP status codes
    - User-friendly error messages
    - Validation and input checking

13. **AI/LLM Integration**
    - Prompt engineering for code explanations
    - Temperature settings for response creativity
    - Token management and limits
    - Structured API requests to language models

### Full-Stack Concepts

14. **Client-Server Communication**
    - Fetch API usage
    - JSON data exchange
    - HTTP methods (POST, GET)
    - Request headers and body formatting

15. **Environment Configuration**
    - `.env` files for secrets
    - Different configs for development/production
    - Frontend/backend URL management

16. **Development Workflow**
    - Separate client and server development
    - Nodemon for auto-reloading
    - Vite dev server
    - npm scripts organization

17. **Code Organization**
    - Separation of concerns
    - MVC pattern (Model-View-Controller)
    - Component-based architecture
    - File and folder structure best practices

18. **Git & Version Control**
    - `.gitignore` usage (excluding `node_modules`, `.env`)
    - Project structure for collaborative development

## 📦 Prerequisites

- **Node.js** (v18 or higher recommended)
- **npm** or **yarn** package manager
- **Nebius API Key** (or OpenAI API key with modified configuration)
- Basic understanding of JavaScript, React, and Node.js

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone <repository-url>
cd AI-Code-Explainer
```

### 2. Install Dependencies

**Install server dependencies:**
```bash
cd server
npm install
```

**Install client dependencies:**
```bash
cd ../client
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the `server` directory:

```env
NEBIUS_API_KEY=your_nebius_api_key_here
FRONTEND_URL=http://localhost:5173
PORT=3000
```

Create a `.env` file in the `client` directory (or use Vite's `.env` format):

```env
VITE_SERVER_URL=http://localhost:3000/api/code-explainer
```

### 4. Run the Application

**Start the server:**
```bash
cd server
npm run dev
```

**Start the client (in a new terminal):**
```bash
cd client
npm run dev
```

The application should now be running:
- **Frontend:** http://localhost:5173
- **Backend:** http://localhost:3000

## 🔐 Environment Variables

### Server (.env)

| Variable | Description | Example |
|----------|-------------|---------|
| `NEBIUS_API_KEY` | API key for Nebius/OpenAI service | `sk-...` |
| `FRONTEND_URL` | URL of the frontend application | `http://localhost:5173` |
| `PORT` | Port for the backend server | `3000` |

### Client (.env)

| Variable | Description | Example |
|----------|-------------|---------|
| `VITE_SERVER_URL` | Backend API endpoint URL | `http://localhost:3000/api/code-explainer` |

## 🎨 Features

- **Multi-language Support:** Explain code in JavaScript, TypeScript, Python, Java, Go, and Rust
- **AI-Powered Explanations:** Uses advanced language models for accurate and clear explanations
- **Copy to Clipboard:** Easily copy explanations for later reference
- **Real-time Feedback:** Loading states and error handling for better UX
- **Rate Limiting:** Prevents API abuse with built-in rate limiting
- **Security Headers:** Helmet.js for enhanced security
- **Responsive Design:** Works on desktop and mobile devices

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **OpenAI** for the powerful language models
- **Nebius** for API services
- **React** and **Vite** teams for amazing developer tools
- **TailwindCSS** for the utility-first CSS framework

---

**Built with ❤️ for developers who want to understand code better**
