import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import styles from "./Details.module.css";

export default function Details() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`/recipes/${id}`)
      .then(res => {
        if (!res.ok) throw new Error("Recipe not found");
        return res.json();
      })
      .then(data => {
        setRecipe(data);
        setLoading(false);
      })
      .catch(() => {
        setRecipe(null);
        setLoading(false);
      });
  }, [id]);

  const handleDelete = async () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this recipe?");
    if (!confirmDelete) return;

    try {
      const res = await fetch(`/recipes/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete");

      alert("Recipe deleted successfully");
      navigate("/recipes");
    } catch (err) {
      console.error(err);
      alert("Error deleting recipe");
    }
  };

  if (loading) return <p>Loading...</p>;
  if (!recipe) return <h2>Recipe not found</h2>;

  return (
    <section className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={recipe.image} alt={recipe.title} className={styles.image} />
      </div>

      <div className={styles.info}>
        <h2 className={styles.title}>{recipe.title}</h2>
        <p className={styles.description}>{recipe.description}</p>

        <h3>Ingredients:</h3>
        <ul className={styles.list}>
          {recipe.ingredients.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <h3>Steps:</h3>
        <ol className={styles.list}>
          {recipe.steps.split(". ").map((step, index) => (
            step && <li key={index}>{step.trim()}.</li>
          ))}
        </ol>

        <div style={{ marginTop: "20px" }}>
          <Link to="/recipes" className={styles.button}>
            Back to Recipes
          </Link>

          {user && user.email === recipe.author && (
            <>
              <button onClick={() => navigate(`/recipes/${id}/edit`)} className={styles.button}>
                Edit Recipe
              </button>
              <button onClick={() => onDelete(id)} className={`${styles.button} ${styles.buttonDelete}`}>
                Delete Recipe
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
