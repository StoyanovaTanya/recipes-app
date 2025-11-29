import {Outlet, Link} from "react-router-dom"

export default function MainLayout() {
    return (
        <>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/recipes">Recipes</Link>
            <Link to="/create">Create Recipe</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
        </nav>

        <main>
            <Outlet />
        </main>
        </>
    );
}