import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { saveUser, getUsersList } from "../utils/localstorage";
import "./Login.css";

export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {

    const users = getUsersList();

    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      saveUser(user);
      navigate("/");
    } else {
      alert("Invalid Email or Password");
    }
  };

  return (
    <div className="auth-wrapper">

      {/* Background Particles */}
      <div className="particles">
        {[...Array(25)].map((_, i) => (
          <span key={i}></span>
        ))}
      </div>
      <div className="particles">
        {Array.from({ length: 25 }).map((_, i) => (
          <span key={i}></span>
        ))}
      </div>
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

      {/* RIGHT SIDE */}
      <div className="auth-right">

        <div className="auth-card">

          <h2>Welcome Back 👋</h2>
          <p className="subtitle">Login to your Finance Tracker</p>

          <input
            type="email"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button onClick={handleLogin}>Login</button>

          <p className="auth-link">
            New User? <Link to="/register">Create Account</Link>
          </p>

        </div>

      </div>

    </div>
  );
}