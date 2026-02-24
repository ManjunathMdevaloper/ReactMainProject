# Libraria - Library Management System

Libraria is a modern, full-featured Library Management System built with React.js. It features a clean, professional **Gray/Light Theme** and a fully responsive design, providing a seamless experience across desktop and mobile devices.

## 🚀 Key Features

- **Dual Portals**: Separate dashboards for Administrators and Users.
- **Advanced Search**: Real-time filtering for books and users by title, author, email, or location.
- **Book Management**: Full CRUD operations for administrators (Add, View, Delete).
- **User Management**: Admin-controlled user registration and directory.
- **Interactive Library**: Users can browse books, view detailed descriptions, and manage a personal cart.
- **Premium Design**: Built with a clean gray aesthetic, glassmorphism effects, and smooth micro-animations.
- **Responsive Navigation**: Adaptive navbar with a mobile hamburger-menu toggle.

## 🛠️ Tech Stack

- **Frontend**: React.js 18, Vite
- **Routing**: React Router DOM (v6)
- **API Handling**: Axios & Fetch API
- **Styling**: Vanilla CSS (Modular Stylesheets)
- **Backend/Database**: JSON Server (Mock REST API)

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/)

## ⚙️ Installation

1. **Clone the repository**:
   ```bash
   git clone [repository-url]
   cd library_app
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Install JSON Server (if not global)**:
   ```bash
   npm install -g json-server
   ```

## 🏃 Running the Application

You need to run two separate terminals:

### Terminal 1: Backend (JSON Server)
Navigate to the data directory and start the mock server:
```bash
cd src/appdata
json-server --watch data.json --port 4000
```
*Note: The application is configured to communicate via port 4000.*

### Terminal 2: Frontend (Vite)
Start the development server:
```bash
npm run dev
```

## 🔐 Credentials

### Admin Login
- **Email**: `admin@gmail.com`
- **Password**: `admin123`

### User Login
- **Email**: Any user email from `data.json` (e.g., `user@gmail.com`)
- **Password**: `user1234` (Default for all users)

## 📁 Project Structure

```text
src/
├── assets/
│   └── styles/          # Modular CSS files for each component
├── Components/
│   ├── Admin/           # Admin-specific components (AddBook, AddUser, etc.)
│   ├── Users/           # User-specific components (UserLogin, AddtoCart)
│   ├── Books.jsx        # Book directory logic
│   ├── Navbar.jsx       # Responsive navigation
│   └── ...              # Other core components
├── appdata/
│   └── data.json        # Mock database file
└── App.js               # Route configurations
```

---
Built with ❤️ by your Manjunath.
