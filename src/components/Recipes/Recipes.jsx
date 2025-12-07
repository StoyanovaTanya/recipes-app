import { useEffect, useState } from "react";
import styles from "./Recipes.module.css";
import RecipeCard from "./RecipeCard";

export default function Recipes() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("/recipes")
      .then(res => res.json())
      .then(data => setRecipes(data))
      .catch(err => console.error("Error fetching recipes:", err));
  }, []);

  const handleDelete = async (id) => {
    const confirmed = window.confirm("Are you sure you want to delete this recipe?");
    if (!confirmed) return;

    try {
      const res = await fetch(`/recipes/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete");

      setRecipes(recipes.filter(r => r.id !== id));
    } catch (err) {
      console.error(err);
      alert("Error deleting recipe");
    }
  };

  return (
    <section style={{ padding: "20px" }}>
      <h2 className={styles.heading}>All Recipes</h2>
      <div className={styles.grid}>
        {recipes.map(recipe => (
          <RecipeCard
            key={recipe.id}
            recipe={recipe}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </section>
  );
}