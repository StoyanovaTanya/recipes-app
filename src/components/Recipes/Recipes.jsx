import { recipes } from "../../data/recipes";
import { Link } from "react-router-dom";

export default function Recipes() {
  return (
    <section style={{ padding: "20px" }}>
      <h2>All Recipes</h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: "20px",
        marginTop: "20px"
      }}>
        {recipes.map(recipe => (
          <div key={recipe.id} 
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              borderRadius: "8px"
            }}
          >
            <img 
              src={recipe.image} 
              alt={recipe.title}
              style={{ width: "100%", borderRadius: "6px" }}
            />

            <h3>{recipe.title}</h3>

            <p>{recipe.description}</p>

            <Link to={`/recipes/${recipe.id}`}>
              View Details
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
