import { useParams } from "react-router-dom";
import { recipes } from "../../data/recipes";

export default function Details() {
  const { id} = useParams();
  const recipe = recipes.find(r => r.id === Number(id));

  if (!recipe) {
    return <h2>Recipe not found</h2>;
  }

  return (
    <section style={{ padding: "20px"}}>
      <h2>{recipe.title}</h2>
      
      <img
        src={recipe.image}
        alt={recipe.title}
        style={{ width: "300px", borderRadius: "10px", marginBottom: "20px"}}
      />

      <p style={{ maxWidth: "500px", lineHeight: "1.6"}}>
        {recipe.description}  
      </p>  

      <div style={{ marginTop: "20px"}}>
        <button style={{ marginRight: "10px" }}>Edit</button>
        <button>Delete</button>
      </div>
    </section>
  );
}