import { useState } from "react";
import { useParams } from "react-router-dom";
import { recipes } from "../../data/recipes";
import styles from "./Edit.module.css";

export default function Edit() {
  const { id } = useParams();
  const recipe = recipes.find(r => r.id === Number (id));

  const [title, setTitle] = useState(recipe?.title || "");
  const [image, setImage] = useState(recipe?.image || "");
  const [description, setDescription] = useState(recipe?.description || "");
  const [ingredients, setIngredients] = useState(recipe?.ingredients.join(", ") || "");
  const [steps, setSteps] = useState(recipe?.steps || "");  

  const handleSubmit =(e) => {
    e.preventDefault();

    if (!title || !image || !description || !ingredients || !steps) {
      alert("All fields are required!");
      return;
    }
    
    console.log("Edited Recipe:", {title, image, description, ingredients, steps});
    alert("Recipe updated! Check console for data.");
  };

  if (!recipe) {
    return <h2>Recipe not found</h2>
  }

  return (
    <section className={styles.container}>
      <h2>Edit Recipe</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label>Title:</label>
          <input type="text" value={title} 
            onChange={(e) => setTitle(e.target.value)}
          />

        <label>Image URL:</label>
          <input type="text" value={image} 
            onChange={(e) => setImage(e.target.value)}
          />

        <label>Description:</label>
          <textarea value={description} 
            onChange={(e) => setDescription(e.target.value)}
          />

        <label>Ingredients (comma separated):</label>
          <textarea value={ingredients} 
            onChange={(e) => setIngredients(e.target.value)}
          />

        <label>Steps (dot separated):</label>
          <textarea value={steps} 
            onChange={(e) => setSteps(e.target.value)}
          />

        <button type="submit" className={styles.button}>Update</button>
      </form>
    </section>
  );
}
