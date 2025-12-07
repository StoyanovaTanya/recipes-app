import { Link } from "react-router-dom";
import styles from "./Recipes.module.css";
import { useEffect, useState } from "react";

export default function Recipes() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
  fetch("/recipes")
    .then(res => {
      console.log("Fetch response:", res);
      return res.json();
    })
    .then(data => {
      console.log("Loaded recipes:", data);
      setRecipes(data);
    })
    .catch(err => console.error("Error fetching recipes:", err));
  }, []);
  
  return (
    <section style={{ padding: "20px" }}>
      <h2 className={styles.heading}>All Recipes</h2>
      <div className={styles.grid}>
        {recipes.map(recipe => (
          <div key={recipe.id} className={styles.card}>
      
            <img 
              src={recipe.image} 
              alt={recipe.title} 
              className={styles.image}
            />

            <h3 className={styles.title}>{recipe.title}</h3>

            <p className={styles.description}>{recipe.description}</p>

            <Link to={`/recipes/${recipe.id}`} className={styles.button}>
              View Details
            </Link>

          </div>
        ))}
      </div>  
  </section>
  );
}
