import { useParams, Link } from "react-router-dom";
import { recipes } from "../../data/recipes";
import styles from "./Details.module.css";

export default function Details() {
  const { id } = useParams();
  const recipe = recipes.find(r => r.id === Number(id));

  if (!recipe) {
    return <h2>Recipe not found</h2>;
  }

  return (
    <section className={styles.container}>
      {/* Снимка */}
      <div className={styles.imageContainer}>
        <img src={recipe.image} alt={recipe.title} className={styles.image} />
      </div>

      {/* Информация за рецептата */}
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

        {/* Бутон за обратно */}
        <div>
          <Link to="/recipes" className={styles.button}>
            Back to Recipes
          </Link>

          <Link to={`/edit/${recipe.id}`} className={styles.button}>
            Edit Recipe
          </Link>
        </div>
      </div>
    </section>
  );
}