import { useParams } from "react-router";

export default function Details() {
  const { id} = useParams();

  return (
    <section style={{ padding: "20px"}}>
      <h2>Recipe Details</h2>
      <p>View recipe with ID: {id}</p>

      <div style={{ marginTop: "20px"}}>
        <h3>Recipe Title</h3>
        <p>Description: Recipe description will be loaded here later.</p>
        <p>Ingredients: ...</p>
        <p>Steps: ...</p>
      </div>
    </section>
  );
}