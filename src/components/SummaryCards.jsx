import { motion } from "framer-motion";
import "./SummaryCards.css";

export default function SummaryCards(){

  return(
    <div className="summary-grid">

      <motion.div 
      className="summary-card balance">
        <h3>Total Balance</h3>
        <p>₹12,500</p>
      </motion.div>

      <motion.div 
      className="summary-card income">
        <h3>Total Income</h3>
        <p>₹20,000</p>
      </motion.div>

      <motion.div 
      className="summary-card expense">
        <h3>Total Expense</h3>
        <p>₹7,500</p>
      </motion.div>

    </div>
  )
}