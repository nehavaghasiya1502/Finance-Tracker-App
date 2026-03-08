import { motion } from "framer-motion";
import "./AddExpense.css";

export default function AddExpense(){

  return(
    <motion.div 
    className="form-card"
    initial={{opacity:0,x:-40}}
    animate={{opacity:1,x:0}}
    transition={{duration:0.6}}
    >

      <h2>Add Expense</h2>

      <input type="text" placeholder="Amount"/>
      <input type="text" placeholder="Category"/>
      <input type="date"/>

      <button>Add Expense</button>

    </motion.div>
  )
}