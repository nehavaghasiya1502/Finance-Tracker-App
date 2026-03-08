import "./About.css";
import { motion } from "framer-motion";

export default function About() {

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.25 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="about-page">

      {/* HERO */}
      <div className="about-hero">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About MoneyMint
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: false }}
        >
          MoneyMint helps you track income, manage expenses and build
          smarter financial habits with a simple and modern interface.
        </motion.p>
      </div>

      {/* ABOUT CARDS */}
      <motion.div
        className="about-grid"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false }}
      >

        <motion.div className="about-card" variants={item}>
          <h3>💡 Our Mission</h3>
          <p>
            We want to make personal finance simple so that anyone
            can track money without complicated tools.
          </p>
        </motion.div>

        <motion.div className="about-card" variants={item}>
          <h3>📊 Smart Tracking</h3>
          <p>
            Track income, expenses and savings in one clean
            dashboard designed for simplicity.
          </p>
        </motion.div>

        <motion.div className="about-card" variants={item}>
          <h3>🚀 Future Vision</h3>
          <p>
            Our goal is to build a powerful finance platform with
            analytics, insights and budgeting tools.
          </p>
        </motion.div>

      </motion.div>

      {/* WHY SECTION */}
      <motion.div
        className="why-section"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false }}
      >

        <motion.h2 variants={item}>Why Choose MoneyMint?</motion.h2>

        <div className="why-grid">

          <motion.div className="why-card" variants={item}>
            <h3>⚡ Simple Interface</h3>
            <p>Clean design that makes tracking finances easy.</p>
          </motion.div>

          <motion.div className="why-card" variants={item}>
            <h3>📈 Smart Insights</h3>
            <p>Understand your spending habits clearly.</p>
          </motion.div>

          <motion.div className="why-card" variants={item}>
            <h3>🔒 Secure</h3>
            <p>Your financial data stays safe and private.</p>
          </motion.div>

        </div>

      </motion.div>

      {/* STATS */}
      <motion.div
        className="stats-section"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false }}
      >

        <motion.div className="stat" variants={item}>
          <h2>10K+</h2>
          <p>Users</p>
        </motion.div>

        <motion.div className="stat" variants={item}>
          <h2>1M+</h2>
          <p>Transactions Tracked</p>
        </motion.div>

        <motion.div className="stat" variants={item}>
          <h2>99%</h2>
          <p>User Satisfaction</p>
        </motion.div>

      </motion.div>

      {/* VISION */}
      <motion.div
        className="vision-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: false }}
      >
        <h2>Our Vision</h2>

        <p>
          We want to build the most powerful personal finance
          platform that helps people take control of their money,
          build better habits and achieve financial freedom.
        </p>

      </motion.div>

    </section>
  );
}