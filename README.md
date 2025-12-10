# 🍽️ Recipes App  
Single Page Application built with **ReactJS (Vite)** as part of the **ReactJS course at SoftUni**.  
The application includes a public area, private user area, authentication, catalog, details page, and full CRUD for recipes.

---

## 🚀 Getting Started

### 1. Install dependencies
npm install

### 2. Start the JSON server (Backend)
npm run server
# Backend runs at http://localhost:5000

### 3. Start the React application
npm run dev  
# Frontend runs at http://localhost:5173

---

## 📁 Project Structure

src/
│
├── assets/images
├── components/
│ ├── Home/ – Public home page
│ ├── Recipes/ – Catalog of all recipes, RecipeCard
│ ├── MyRecipes/ – View only own recipes
│ ├── Favorites/ – Favorites recipes
│ ├── Details/ – Single recipe view (dynamic page)
│ ├── Create/ – Create new recipe (private)
│ ├── Edit/ – Edit recipe (private, author only)
│ ├── Navbar/ - Navbar.jsx
│ └── Auth/ – Login, Register, PrivateRoute, GuestRoute
│
├── layout/
│ └── MainLayout.jsx – Layout wrapper with Navbar and <Outlet>
│
├── context/
│ └── AuthContext.jsx – Authentication state using Context API
│
├── App.jsx – Application routing
└── main.jsx – Application entry point

---

## ✨ Features

### 🔓 **Public Area**
- Home page  
- View all recipes (Catalog)  
- View details of a selected recipe  
- Login / Register  

### 🔐 **Private User Area**
- Create new recipe  
- Edit own recipe  
- Delete own recipe  
- View **My Recipes** (only your own recipes)  
- Mark recipes as **Favorite**  
- Route guards prevent unauthorized access  

### 📌 **CRUD Functionality**
Users can:
- **Create** recipes  
- **Read** recipes (catalog + details)  
- **Update** *their own* recipes  
- **Delete** *their own* recipes  

Stored via REST API using `json-server`.

### 🧭 **Routing**
- Implemented using **React Router v6**
- Uses:
  - Dynamic routes with parameters (`/recipes/:id`)
  - Layout routes
  - Protected routes (PrivateRoute & GuestRoute)

### 🧠 **React Concepts Used**
- Functional components  
- State management with Hooks (useState, useEffect)  
- Context API for authentication  
- Controlled forms  
- Synthetic events  
- Component life cycle through hooks  

### 🎨 **Styling**
- Modular CSS (`Component.module.css`)
- Clean component structure  
- Responsive-friendly layout  

### 💎 Bonus Features
- Search / Filter recipes by title or category  
- Favorites list page  
- Sort recipes (A→Z, Z→A, Newest, Oldest)


---

## ⚠️ Error Handling & Validation
- Form validation on create/edit  
- Guards for unauthorized access  
- Prevent access to edit/delete by non-authors  
- User feedback through alerts (can be improved later)

---

## 💡 Possible Future Improvements
- Deploy backend to a real service (Firebase, Render)
- Replace alerts with notification system
- Add comments on recipes
- Full responsive redesign

---

## 📝 Author
This project is created as part of the **ReactJS course @ SoftUni**, following all mandatory course requirements.
