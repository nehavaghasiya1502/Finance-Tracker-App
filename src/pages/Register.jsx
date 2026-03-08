import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { getUsersList, saveUsersList } from "../utils/localstorage";
import "./Login.css";

export default function Register() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = () => {

    const users = getUsersList();

    if (users.find((u) => u.email === email)) {
      alert("User already exists");
      return;
    }

    users.push({ name, email, password });
    saveUsersList(users);

    alert("Registration Successful");
    navigate("/login");
  };

  return (
    <div className="auth-wrapper">

      {/* LEFT SIDE */}
      <div className="auth-left">

        <h1 className="brand">MoneyMint</h1>

        <p className="brand-desc">
          Manage your income, expenses and savings in one place.
          MoneyMint helps you track your financial journey with
          beautiful analytics and smart insights.
        </p>

        <div className="features">
          <p>✔ Track Expenses</p>
          <p>✔ Visual Charts</p>
          <p>✔ Smart Budgeting</p>
        </div>

      </div>


      {/* PARTICLES */}
      <div className="particles">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>


      {/* RIGHT SIDE */}
      <div className="auth-right">

        <div className="auth-card">

          <h2>Create Account ✨</h2>
          <p className="subtitle">Start tracking your finances today</p>

          <input
            type="text"
            placeholder="Enter your name"
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Create password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button onClick={handleRegister}>Register</button>

          <p className="auth-link">
            Already have an account? <Link to="/login">Login</Link>
          </p>

        </div>

      </div>

    </div>
  );
}