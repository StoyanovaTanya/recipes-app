import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("All fields are required!");
      return;
    }

    console.log("Login:", { email, password });
  };

  return (
    <section style={{ padding: "20px"}}>
      <h2>Login</h2>

      <form onSubmit={handleSubmit} style={{maxWidth: "300px", 
          marginTop: "20px"}}>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: "100%", marginBottom: "10px" }}
        />      

        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: "100%", marginBottom: "10px"}}
        />

        <button type="submit">Login</button>  
      </form>
    </section>
  );
}