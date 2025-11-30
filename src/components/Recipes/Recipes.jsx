import { recipes } from "../../data/recipes";
import { Link } from "react-router-dom";
import styles from "./Recipes.module.css";

export default function Recipes() {
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
