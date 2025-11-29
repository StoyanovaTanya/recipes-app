import { Link } from "react-router";

export default function RecipeCard({ recipe}) {
    return (
        <article
            style={{
                border: "1px solid #ccc",
                padding: "10px",
                borderRadius: "6px",
                marginBottom: "10"
            }}
        >
            <h3>{recipe.title}</h3>
            <p>Catergory: {recipe.category}</p>

            {/* Линк към детайлите */}
            <Link to={`/recipes/${recipe.id}`}>View Details</Link>
        </article>    
    );
}