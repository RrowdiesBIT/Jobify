

---

# Jobify

**Jobify** is a modern web application built with the MERN stack (MongoDB, Express, React, Node.js) that provides a platform for job seekers and employers. It includes features for job listings, user authentication, and more.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Client-Side Details](#client-side-details)
- [Server-Side Details](#server-side-details)
- [License](#license)

## Features

- **User Authentication**: Secure user authentication and authorization.
- **Job Listings**: Browse and apply for jobs.
- **Responsive UI**: Modern and responsive user interface.
- **Real-time Updates**: Asynchronous updates using React and Express.

## Installation

To set up the project locally, follow these steps:

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Clone the Repository

```bash
git clone https://github.com/your-username/jobify.git
cd jobify
```

### Server-Side Setup

1. Navigate to the `server` directory:

    ```bash
    cd server
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Create a `.env` file in the `server` directory and add your environment variables. Example:

    ```env
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    ```

4. Start the server:

    ```bash
    npm run dev
    ```

### Client-Side Setup

1. Navigate to the `client` directory:

    ```bash
    cd ../client
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Start the client:

    ```bash
    npm run dev
    ```

4. Open your browser and navigate to `http://localhost:5173` to view the application.

## Usage

- **Development Mode:** Both the client and server can be run in development mode using the commands provided. This will enable live-reloading for easier development.
- **Building for Production:** To build the client for production, run `npm run build` in the `client` directory. Serve the built assets using a static file server or integrate with your server-side setup.

## Client-Side Details

The client-side of Jobify is built using React and Vite. It includes:

- **React**: Frontend framework for building the user interface.
- **Vite**: Build tool for fast development and optimized production builds.
- **TailwindCSS**: Utility-first CSS framework for styling.
- **Redux**: State management for handling global state.
- **React Router**: For routing and navigation.

**Key dependencies:**

- `@headlessui/react`
- `@reduxjs/toolkit`
- `axios`
- `framer-motion`
- `moment`
- `react`
- `react-router-dom`
- `typewriter-effect`

**Development Dependencies:**

- `@types/react`
- `@types/react-dom`
- `@vitejs/plugin-react`
- `eslint`
- `tailwindcss`

## Server-Side Details

The server-side of Jobify is built using Node.js and Express. It includes:

- **Express**: Web framework for building the server-side logic.
- **Mongoose**: ODM for interacting with MongoDB.
- **jsonwebtoken**: For user authentication and token management.
- **bcryptjs**: For hashing passwords.
- **cors**: Middleware for handling CORS.
- **dotenv**: For managing environment variables.
- **morgan**: HTTP request logger middleware.
- **xss-clean**: Middleware for sanitizing user input to prevent XSS attacks.

**Key dependencies:**

- `bcryptjs`
- `body-parser`
- `cors`
- `dotenv`
- `express`
- `express-async-errors`
- `express-mongo-sanitize`
- `express-rate-limit`
- `jsonwebtoken`
- `mongoose`
- `morgan`
- `nodemon`
- `validator`
- `xss-clean`

## License

This project is licensed under the [ISC License](https://opensource.org/licenses/ISC).

---
