import { FaUserPlus, FaWallet, FaChartPie } from "react-icons/fa";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./HowItWorks.css";

export default function HowItWorks() {

  const navigate = useNavigate();

  return (
    <section className="how-it-works">

      <h2>How MoneyMint Works</h2>

      <div className="steps-container">

        {/* Create Account */}
        <motion.div
          className="step-card"
          onClick={() => navigate("/register")}
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <FaUserPlus className="step-icon" />
          <h3>Create Account</h3>
          <p>Sign up and set up your personal finance dashboard in seconds.</p>
        </motion.div>

        {/* Go to Dashboard */}

        <motion.div
          className="step-card"
          onClick={() => navigate("/dashboard")}
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <FaWallet className="step-icon" />
          <h3>Add Income & Expenses</h3>
          <p>Manage your income and expenses easily from your dashboard.</p>
        </motion.div>

        {/* Reports */}

        <motion.div
          className="step-card"
          onClick={() => navigate("/dashboard")}
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <FaChartPie className="step-icon" />
          <h3>Track Reports</h3>
          <p>Visualize your financial data and grow your savings smarter.</p>
        </motion.div>

      </div>

    </section>
  );
}