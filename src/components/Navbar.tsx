import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav style={{ padding: "1rem", backgroundColor: "#111", color: "#fff" }}>
            <Link to="/" style={{ margin: "0 1rem", color: "#fff" }}>Home</Link>
            <Link to="/projects" style={{ margin: "0 1rem", color: "#fff" }}>Projects</Link>
            <Link to="/contact" style={{ margin: "0 1rem", color: "#fff" }}>Contact</Link>
        </nav>
    );
}
