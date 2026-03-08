import { useNavigate } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">

      <div className="footer-container">

        {/* BRAND */}
        <div className="footer-brand">
          <h2 className="footer-logo">MoneyMint</h2>

          <p>
            Track your income, expenses and savings with a modern
            and simple personal finance tracker.
          </p>

          <div className="social-icons">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedinIn />
          </div>
        </div>

        {/* PRODUCT */}
        <div className="footer-links">
          <h4>Product</h4>
          <p onClick={() => handleNavigate("/features")}>Features</p>
          <p>Analytics</p>
          <p>Budget Planner</p>
        </div>

        {/* COMPANY */}
        <div className="footer-links">
          <h4>Company</h4>
          <p onClick={() => handleNavigate("/about")}>About</p>
          <p onClick={() => handleNavigate("/contact")}>Contact</p>
          <p>Careers</p>
          <p>Blog</p>
        </div>

        {/* ACCOUNT */}
        <div className="footer-links">
          <h4>Account</h4>
          <p onClick={() => handleNavigate("/login")}>Login</p>
          <p onClick={() => handleNavigate("/register")}>Register</p>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 MoneyMint. All Rights Reserved.
      </div>

    </footer>
  );
}