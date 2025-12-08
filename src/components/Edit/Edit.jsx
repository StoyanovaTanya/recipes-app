import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import styles from "./Edit.module.css";

export default function Edit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth(); 

  const [recipe, setRecipe] = useState({
    title: "",
    category: "",
    image: "",
    description: "",
    ingredients: "",
    steps: "",
    author: ""
  });

  useEffect(() => {
    fetch(`/recipes/${id}`)
      .then(res => res.json())
      .then(data => {
        if (!data) {
          alert("Recipe not found!");
          navigate("/recipes");
          return;
        }

        // проверка дали текущият потребител е автор
        if (data.author !== user.email) {
          alert("You are not allowed to edit this recipe!");
          navigate("/recipes");
          return;
        }

        setRecipe({
          ...data,
          ingredients: Array.isArray(data.ingredients)
            ? data.ingredients.join(", ")
            : data.ingredients,
          category: data.category || ""
        });
      });
  }, [id, user.email, navigate]);

  function onChange(e) {
    setRecipe(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  }

  function onSubmit(e) {
    e.preventDefault();

    const updated = {
      ...recipe,
      ingredients: recipe.ingredients.split(",").map(i => i.trim()),
      author: user.email,
      category: recipe.category
    };

    fetch(`/recipes/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updated)
    })
      .then(() => navigate(`/recipes/${id}`));
  }

  return (
    <section className={styles.container}>
      <h2>Edit Recipe</h2>

      <form className={styles.form} onSubmit={onSubmit}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={recipe.title}
          onChange={onChange}
        />

        <label>Category:</label>
        <input
          type="text"
          name="category"
          value={recipe.category}
          onChange={onChange}
        />

        <label>Image URL:</label>
        <input
          type="text"
          name="image"
          value={recipe.image}
          onChange={onChange}
        />

        <label>Description:</label>
        <textarea
          name="description"
          value={recipe.description}
          onChange={onChange}
        />

        <label>Ingredients (comma separated):</label>
        <textarea
          name="ingredients"
          value={recipe.ingredients}
          onChange={onChange}
        />

        <label>Steps (dot separated):</label>
        <textarea
          name="steps"
          value={recipe.steps}
          onChange={onChange}
        />

        <button type="submit" className={styles.button}>Update</button>
      </form>
    </section>
  );
}