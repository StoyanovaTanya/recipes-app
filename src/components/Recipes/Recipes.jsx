import { useEffect, useState } from "react";
import styles from "./Recipes.module.css";
import RecipeCard from "./RecipeCard";

export default function Recipes() {
  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

function updateRecipe(updatedRecipe) {
  setRecipes(prev =>
    prev.map(r => (r.id === updatedRecipe.id ? updatedRecipe : r))
  );
}

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
      <div className={styles.header}>
        <h2 className={styles.heading}>All Recipes</h2>
        <input
        type="text"
        placeholder="Search by title or category..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className={styles.searchInput}
        />
      </div>

      <div className={styles.grid}>
        {recipes
        .filter(r => 
          r.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
          r.category.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .map(recipe => (
          <RecipeCard
            key={recipe.id}
            recipe={recipe}
            onDelete={handleDelete}
            onUpdateRecipe={updateRecipe}
          />
        ))}
      </div>
    </section>
  );
}