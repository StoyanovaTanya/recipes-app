import { useState } from "react";

export default function Create() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !ingredients || !description || !imageUrl) {
      alert("All fields are required!");
      return;
    }

    console.log("New Recipe:", { title, ingredients, description, imageUrl})
  };

  return (
    <section style={{ padding: "20px"}}>
        <h2>Create Recipe</h2>

        <form onSubmit={handleSubmit} style={{ maxWidth: "400px", marginTop: "20px"}}>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{ width: "100%", marginBottom: "10px"}}
          />

          <label>Ingredients:</label>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            style={{ width: "100%", marginBottom: "10px" }}
          />

          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={{ width: "100%", marginBottom: "10px" }}
          />

          <label>Image URL:</label>
          <input
            type="text"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            style={{ width: "100%", marginBottom: "10px" }}
          />

          <button type="submit">Create Recipe</button>
        </form>
    </section>
  );
}
