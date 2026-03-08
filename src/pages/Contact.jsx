import "./Contact.css";
import { motion } from "framer-motion";

export default function Contact() {

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="contact-page">

      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="contact-title"
      >
        Contact Us
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="contact-sub"
      >
        Have questions about MoneyMint? We'd love to hear from you.
      </motion.p>

      <motion.div
        className="contact-container"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false }}
      >

        {/* CONTACT INFO */}

        <motion.div className="contact-info" variants={item}>

          <h3>Email</h3>
          <p>support@moneymint.com</p>

          <h3>Location</h3>
          <p>India</p>

          <h3>Response Time</h3>
          <p>Within 24 Hours</p>

        </motion.div>


        {/* CONTACT FORM */}

        <motion.form className="contact-form" variants={item}>

          <input
            type="text"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            placeholder="Your Email"
            required
          />

          <textarea
            placeholder="Your Message"
            rows="5"
            required
          />

          <button type="submit">
            Send Message
          </button>

        </motion.form>

      </motion.div>

    </section>
  );
}