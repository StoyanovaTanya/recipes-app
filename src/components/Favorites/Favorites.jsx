import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import RecipeCard from "../Recipes/RecipeCard";
import styles from "../Recipes/Recipes.module.css";

export default function Favorites() {
  const { user } = useAuth();
  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (!user) return;

    fetch("/recipes")
      .then(res => res.json())
      .then(data => {
        const favs = data.filter(r => r.favorites?.includes(user.email));
        setRecipes(favs);
      });
  }, [user]);

  return (
    <section style={{ padding: "20px" }}>
      <div className={styles.header}>
        <h2 className={styles.heading}>My Favorites</h2>

        <input
          type="text"
          placeholder="Search favorites..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={styles.searchInput}
        />
      </div>

      <p style={{ marginLeft: "40px", opacity: 0.7 }}>
        You have <strong>{recipes.length}</strong> favorite recipes.
      </p>

      <div className={styles.grid}>
        {recipes
          .filter((r) =>
            r.title.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((recipe) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              onUpdateRecipe={(updated) =>
                setRecipes(prev =>
                  prev.map(r => (r.id === updated.id ? updated : r))
                )
              }
            />
          ))}
      </div>
    </section>
  );
}