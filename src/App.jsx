import { BrowserRouter, Routes, Route} from "react-router-dom"
import MainLayout from "./layout/MainLayout";

import Home from "./components/Home/Home";
import Recipes from "./components/Recipes/Recipes";
import Details from "./components/Details/Details";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Create from "./components/Create/Create";
import Edit from "./components/Edit/Edit";
import PrivateRoute from "./components/Auth/PrivateRoute";
import GuestRoute from "./components/Auth/GuestRoute";
import { AuthProvider } from "./context/AuthContext";
import MyRecipes from "./components/MyRecipes/MyRecipes";
import Favorites from "./components/Favorites/Favorites";

function App() {
  
  return (
      <AuthProvider>
      <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/recipes/:id" element={<Details />} />
          
          <Route element={<GuestRoute />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
          
          <Route element={<PrivateRoute />}>
            <Route path="/create" element={<Create />} />
            <Route path="/recipes/:id/edit" element={<Edit />} />
            <Route path="/my-recipes" element={<MyRecipes />} />
            <Route path="/favorites" element={<Favorites />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App
