import { useState } from "react";
import styles from "./Create.module.css";
import { useNavigate } from "react-router";

export default function Create() {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");

  const navigate = useNavigate();
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !image || !description || !ingredients || !steps ) {
      alert("All fields are required!");
      return;
    }

   const newRecipe = {
      title,
      image,
      description,
      ingredients: ingredients.split(",").map(i => i.trim()),
      steps: steps
    };

    try {
      const res = await fetch("/recipes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newRecipe)
      });

      if (!res.ok) {
        throw new Error("Failed to create recipe");
      }

      alert("Recipe created!");
      navigate("/recipes"); // връща към списъка с рецепти

    } catch (err) {
      console.error("Create error:", err);
      alert("Error creating recipe");
    }
  };
  
  return (
    <section className={styles.container}>
      <h2>Create Recipe</h2>
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

        <button type="submit" className={styles.button}>Create</button>
      </form>
    </section>
  );
}
