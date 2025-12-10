import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import RecipeCard from "../Recipes/RecipeCard"; 
import styles from "../Recipes/Recipes.module.css"; 

export default function MyRecipes() {
  const { user } = useAuth();
  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("az");

  useEffect(() => {
    if (!user) return;

    fetch("/recipes")
      .then(res => res.json())
      .then(data => {
        const myOwn = data.filter(r => r.author === user.email);
        setRecipes(myOwn);
      });
  }, [user]);

  const handleDelete = async (id) => {
    const ok = window.confirm("Delete this recipe?");
    if (!ok) return;

    const res = await fetch(`/recipes/${id}`, { method: "DELETE" });
    if (!res.ok) return alert("Error deleting");

    setRecipes(prev => prev.filter(r => r.id !== id));
  };

  const sortedRecipes = [...recipes]

          .filter((r) =>
            r.title.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .sort((a, b) => {
            if (sortBy === "az") return a.title.localeCompare(b.title);
            if (sortBy === "za") return b.title.localeCompare(a.title);
            if (sortBy === "newest") return b.id - a.id;
            if (sortBy === "oldest") return a.id - b.id;
          });

  return (
    <section style={{ padding: "20px" }}>
      <div className={styles.header}>
        <h2 className={styles.heading}>My Recipes</h2>

        <input
          type="text"
          placeholder="Search your recipes..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={styles.searchInput}
        />

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className={styles.searchInput}
          style={{ width: "140px" }}
        >
          <option value="az">A → Z</option>
          <option value="za">Z → A</option>
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
        </select>
      </div>

      <p style={{ marginLeft: "40px", opacity: 0.7 }}>
        You have created <strong>{recipes.length}</strong> recipes.
      </p>

      <div className={styles.grid}> 
          {sortedRecipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              onDelete={handleDelete}
              onUpdateRecipe={(updated) =>
                setRecipes(prev =>
                  prev.map(r => (r.id === updated.id ? updated : r))
                )
              }
            />
          ))}
      </div>
    </section>
  );
}