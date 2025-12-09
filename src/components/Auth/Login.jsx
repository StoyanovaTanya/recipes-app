import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import styles from "../../components/Navbar/Navbar.module.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("All fields are required!");
      return;
    }

    login({ email });
    alert("Login successful!");
    navigate("/recipes");
  };

  return (
    <section style={{ padding: "20px" }}>
      <h2>Login</h2>

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

        <button type="submit" className={styles.logoutBtn}>Login</button>
      </form>

      <div style={{ marginTop: "50px" }}>
        <h3>Don't have an account?</h3>
        <Link to="/register" className={styles.logoutBtn}>Register</Link>
      </div>
    </section>
  );
}