import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";

export default function Home() {
  const navigate = useNavigate();

  return (
    <section className={styles.container}>
      <div className={styles.hero}>
        <h1 className={styles.title}>Welcome to RecipeHub</h1>
        <p className={styles.subtitle}>
          Discover, create, and share delicious recipes with the world.
        </p>
        <p className={styles.text}>
          Use the navigation bar to explore the app:
        </p>
        <ul className={styles.list}>
          <li>View all recipes</li>
          <li>Create your own recipe</li>
          <li>Register or Login to access full functionality</li>
        </ul>
        <button
          className={styles.exploreBtn}
          onClick={() => navigate("/recipes")}>
          Explore Recipes
        </button>
      </div>
    </section>
  );
}