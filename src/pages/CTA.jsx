import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./CTA.css";

export default function CTA() {

  const navigate = useNavigate();

  return (
    <section className="cta-section">

      <motion.div
        className="cta-container"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >

        <h2>Take Control of Your Money Today</h2>

        <p>
          Start tracking your expenses, plan your budget and reach your savings
          goals with MoneyMint.
        </p>

        <button
          className="cta-btn"
          onClick={() => navigate("/register")}
        >
          Get Started Free
        </button>

      </motion.div>

    </section>
  );
}