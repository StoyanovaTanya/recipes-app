import RecipeCard from "./RecipeCard";

const sampleRecipes = [
  { id: 1, title: "Chicken Soup", category: "Soups"},
  { id: 2, title: "Greek Salad", category: "Salads" },  
  { id: 3, title: "Chocolate Cake", category: "Desserts"},
];

export default function Recipes() {
  return (
    <section style={{ padding: "20px"}}>
      <h2>All Recipes</h2>

      {sampleRecipes.map(recipe => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </section>
  );
}