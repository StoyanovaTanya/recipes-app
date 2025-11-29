import { useState } from "react";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password || !confirmPassword) {
      alert("All fields are required!");
      return;
    }
    
    if (password !== confirmPassword) {
      alert("Password do not macth!");
      return;
    }

    console.log("Register:", { email, password, confirmPassword });

  };

  return (
     <section style={{ padding: "20px" }}>
      <h2>Register</h2>

      <form onSubmit={handleSubmit} style={{ maxWidth: "300px", marginTop: "20px" }}>
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
          style={{ width: "100%", marginBottom: "10px" }}
        />

        <label>Confirm Password:</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          style={{ width: "100%", marginBottom: "10px" }}
        />

        <button type="submit">Register</button>
      </form>
    </section>
  );
};