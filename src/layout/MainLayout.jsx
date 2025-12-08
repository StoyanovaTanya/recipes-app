import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import styles from "./MainLayout.module.css";
import Recipes from "../components/Recipes/Recipes";
import RecipeCard from "../components/Recipes/RecipeCard";

export default function MainLayout() {
  return (
    <div className={styles.layout}>
      <Navbar />

      <main className={styles.content}>
        <Outlet />
      </main>

      <footer className={styles.footer}>
        <p>© 2025 RecipeHub • All rights reserved</p>
      </footer>
    </div>
  );
}
