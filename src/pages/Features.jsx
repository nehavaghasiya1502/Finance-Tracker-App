import { FaWallet, FaChartLine, FaPiggyBank, FaTasks } from "react-icons/fa";
import { motion } from "framer-motion";
import "./Features.css";

export default function Features() {
  return (
    <section className="features-page">

      {/* HERO */}
      <div className="features-hero">
        <motion.h1
          initial={{ opacity: 0, y: -60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false }}
        >
          Powerful Features
        </motion.h1>
        <p>Everything you need to manage your money smarter.</p>
      </div>


      {/* FEATURE CARDS */}
      <div className="feature-cards">

        <motion.div
          className="feature-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          <FaWallet className="feature-icon" />
          <h3>Track Expenses</h3>
          <p>Monitor your daily spending easily.</p>
        </motion.div>

        <motion.div
          className="feature-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          <FaTasks className="feature-icon" />
          <h3>Budget Planning</h3>
          <p>Create budgets and control your money.</p>
        </motion.div>

        <motion.div
          className="feature-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          <FaChartLine className="feature-icon" />
          <h3>Charts & Reports</h3>
          <p>Visualize your financial data clearly.</p>
        </motion.div>

        <motion.div
          className="feature-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          <FaPiggyBank className="feature-icon" />
          <h3>Savings Goals</h3>
          <p>Set savings targets and achieve them.</p>
        </motion.div>
      </div>

      {/* CTA */}
      <div className="features-cta">
        <h2>Start Managing Your Money Today</h2>
        <button>Get Started</button>
      </div>

    </section>
  );
}