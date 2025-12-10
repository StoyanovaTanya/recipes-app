import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import styles from "./Recipes.module.css";

export default function RecipeCard({ recipe, onUpdateRecipe }) {
  const { user } = useAuth();
  const navigate = useNavigate();

  async function handleToggleFavorite() {
    if (!user) return alert("You must be logged in to like a recipe!");

    const isFavorite = recipe.favorites?.includes(user.email);

    const updatedRecipe = {
      ...recipe,
      favorites: isFavorite
        ? recipe.favorites.filter(email => email !== user.email)
        : [...(recipe.favorites || []), user.email]
    };

    const res = await fetch(`/recipes/${recipe.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ favorites: updatedRecipe.favorites })
    });

    const data = await res.json();

    if (onUpdateRecipe) {
      onUpdateRecipe(data);
    }
  }

  return (
    <article className={styles.card}>
      <img src={recipe.image} alt={recipe.title} className={styles.image} />

      <h3 className={styles.title}>{recipe.title}</h3>
      <p>Category: {recipe.category}</p>

      <div className={styles.buttonGroup}>
        <button
          className={styles.button}
          onClick={() => navigate(`/recipes/${recipe.id}`)}
        >
          View Details
        </button>

        <button
          className={`${styles.button} ${
            user && recipe.favorites?.includes(user.email)
              ? styles.favorite
              : ""
          }`}
          onClick={handleToggleFavorite}
        >
          ❤️ {recipe.favorites?.length || 0}
        </button>

        {user && user.email === recipe.author && (
          <button
            className={styles.button}
            onClick={() => navigate(`/recipes/${recipe.id}/edit`)}
          >
            Edit
          </button>
        )}
      </div>
    </article>
  );
}