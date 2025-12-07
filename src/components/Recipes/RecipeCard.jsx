import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import styles from "./Recipes.module.css";

export default function RecipeCard({ recipe, onDelete }) {
  const { user } = useAuth();
  const navigate = useNavigate();

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

    {user && user.email === recipe.author && (
      <>
        <button
          className={styles.button}
          onClick={() => navigate(`/recipes/${recipe.id}/edit`)}
        >
          Edit
        </button>
        <button
          className={`${styles.button} ${styles.buttonDelete}`}
          onClick={() => onDelete(recipe.id)}
        >
          Delete
        </button>
      </>
    )}
  </div>
</article>
  );
}