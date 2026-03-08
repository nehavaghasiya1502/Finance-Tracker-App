import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import HeroScreen from "./HeroScreen";
import "./Hero.css";

const Hero = () => {

  const navigate = useNavigate();

  return (
    <section className="hero-section">

      <div className="hero-left">

        <motion.h1
          initial={{ opacity: 0, y: -60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Bad at money? <br />
          <span>MoneyMint can help.</span>
        </motion.h1>


        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Track smart. Save better. Grow faster.
        </motion.p>


        <motion.button
          className="cta-btn"
          onClick={() => navigate("/login")}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          whileHover={{ scale: 1.08 }}
        >
          Start Free Trial
        </motion.button>

      </div>


      <div className="hero-right">

        <motion.div
          className="dashboard-preview"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <HeroScreen />
        </motion.div>

      </div>

    </section>
  );
};

export default Hero;