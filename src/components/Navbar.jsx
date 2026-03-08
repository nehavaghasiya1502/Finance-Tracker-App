import { useState } from "react";
import { logoutUser, getUser } from "../utils/localstorage";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {

  const navigate = useNavigate();
  const user = getUser();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    logoutUser();
    navigate("/login");
  };

  return (
    <nav className="navbar">

      {/* LOGO */}
      <h2 className="logo" onClick={() => navigate("/")}>
        MoneyMint
      </h2>

      {/* TOGGLE BUTTON */}
      <div
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

      {/* MENU */}
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li onClick={() => navigate("/")}>Home</li>
         <li onClick={() => navigate("/dashboard")}>Dashboard</li>
        <li onClick={() => navigate("/features")}>Features</li>
        <li onClick={() => navigate("/about")}>About</li>
        <li onClick={() => navigate("/contact")}>Contact</li>
      </ul>

      {/* AUTH BUTTONS */}
      <div className={`nav-buttons ${menuOpen ? "active" : ""}`}>

        {user ? (
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        ) : (
          <>
            <button
              className="login-btn"
              onClick={() => navigate("/login")}
            >
              Login
            </button>

            <button
              className="register-btn"
              onClick={() => navigate("/register")}
            >
              Register
            </button>
          </>
        )}

      </div>

    </nav>
  );
}