import {Outlet, Link} from "react-router-dom"
import { useAuth } from "../context/AuthContext";

export default function MainLayout() {
    const { user, logout } = useAuth();

    return (
        <>
            <nav style ={{ display: "flex", gap: "15px", padding: "10px" }}>
                <Link to="/">Home</Link>
                <Link to="/recipes">Recipes</Link>

                {user ? (
                    <>
                        <span>Welcome, {user.email}</span>
                        <button onClick={logout}>Logout</button>
                        <Link to="/create">Create</Link>
                    </>
                ) : (
                    <>
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </>
                )}
            </nav>

            <main>
                <Outlet />
            </main>
        </>
    );
}