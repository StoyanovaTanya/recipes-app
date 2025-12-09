import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link to="/">RecipeHub</Link>
      </div>

      <ul className={styles.menu}>
        <li>
          <NavLink to="/recipes" className={({ isActive }) => (isActive ? styles.active : "")}>
            Recipes
          </NavLink>
        </li>

        {user && (
          <li>
            <NavLink to="/create" className={({ isActive }) => (isActive ? styles.active : "")}>
              Create
            </NavLink>
          </li>
        )}
      </ul>

      <div className={styles.auth}>
        {user ? (
          <>
            <span className={styles.user}>Hi, {user.email}</span>
            <button className={styles.logoutBtn} onClick={logout}>Logout</button>
          </>
        ) : (
          <>
            <NavLink to="/login" className={styles.authLink}>Login</NavLink>
            <NavLink to="/register" className={styles.authLink}>Register</NavLink>
          </>
        )}
      </div>
    </nav>
  );
}
