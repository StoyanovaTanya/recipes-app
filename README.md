# Recipes App
The project is part of the ReactJS course at SoftUni.
This is a SPA (Single Page Application) recipe app with a user area and CRUD functionalities.

## Starting the project
Install the dependencies:
npm install
Run the project:
npm run dev
Open a browser and visit http://localhost:5173 (or the address that Vite shows you).

# Project structure
src/components/ — all components
Home/ — home page
Recipes/ — list of recipes
Details/ — details for a specific recipe
Auth/ — Login and Register components
Create/ — recipe creation
Edit/ — recipe editing
src/layout/ — Layout component with Navbar and <Outlet />
src/App.jsx — Routing of the entire application
src/main.jsx — application launch point

# Features
Public pages: Home, Recipes, Details
Authentication: Login and Register
User area: Create, edit and delete recipes (CRUD)
Routing: Navigation between components via React Router
Components: Separated into independent components, all with a clean structure

# Future improvements
Connection with Firebase for backend
Form validation and error handling
Adding likes and comments to recipes
