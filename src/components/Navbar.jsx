import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../AuthContext";

export default function Navbar() {
       const { role, user, logout } = useContext(AuthContext);
       const navigate = useNavigate();

       const handleLogout = () => {
              logout();
              navigate("/");
       };

       return (
              <nav className="navbar">
                     <Link to="/" className="brand">KAVACHH‑AI</Link>
                     <ul className="nav-links">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/features">Features</Link></li>
                            <li><Link to="/how-it-works">How It Works</Link></li>
                            <li><Link to="/contact">Contact</Link></li>

                            {!role && <li><Link to="/role-selection">Choose Role</Link></li>}
                            {!role && <li><Link to="/login/citizen">Citizen Login</Link></li>}
                            {!role && <li><Link to="/login/rescue">Rescue Login</Link></li>}
                            {!role && <li><Link to="/login/admin">Admin Login</Link></li>}
                            {!role && <li><Link to="/register">Register</Link></li>}

                            {role && <li><Link to="/live-map">Live Map</Link></li>}
                            {role === "citizen" && <li><Link to="/citizen/dashboard">Citizen Dashboard</Link></li>}
                            {role === "rescue" && <li><Link to="/rescue/dashboard">Rescue Dashboard</Link></li>}
                            {role === "admin" && <li><Link to="/admin/dashboard">Admin Dashboard</Link></li>}
                     </ul>

                     {role && (
                            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                   {user?.name && <span style={{ fontSize: "12px", color: "var(--text-muted)" }}>👋 {user.name}</span>}
                                   <button className="logout-btn" onClick={handleLogout}>Logout</button>
                            </div>
                     )}
              </nav>
       );
}


