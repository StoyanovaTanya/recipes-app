import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import styles from "./Recipes.module.css";

export default function RecipeCard({ recipe, onUpdateLikes }) {
  const { user } = useAuth();
  const navigate = useNavigate();

  function handleToggleFavorite(recipe) {
    if (!user) return alert("You must be logged in to like a recipe!");

    const isFavorite = recipe.favorites?.includes(user.email);
    const updatedFavorites = isFavorite
      ? recipe.favorites.filter(email => email !== user.email)
      : [...(recipe.favorites || []), user.email];

    fetch(`/recipes/${recipe.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ favorites: updatedFavorites })
    })
    .then(res => res.json())
    .then(updated => onUpdateLikes(updated)); // може да се преименува на onUpdateRecipe
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
          user && recipe.favorites?.includes(user.email) ? styles.favorite : ""
          }`}
          onClick={() => handleToggleFavorite(recipe)}
        >
          ❤️ {recipe.favorites?.length || 0}
        </button>

        {user && user.email === recipe.author && (
        <>
        <button
          className={styles.button}
          onClick={() => navigate(`/recipes/${recipe.id}/edit`)}
        >
          Edit
        </button>
        </>
        )}
      </div>
    </article>
  );
}