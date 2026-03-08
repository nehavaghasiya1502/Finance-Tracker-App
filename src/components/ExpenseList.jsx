import { motion } from "framer-motion";
import "./ExpenseList.css";

export default function ExpenseList(){

  const data=[
    {name:"Food",amount:200},
    {name:"Travel",amount:150},
    {name:"Shopping",amount:500},
  ]

  return(
    <div className="expense-container">

      <h2>Recent Expenses</h2>

      {data.map((item,index)=>(
        <motion.div
        key={index}
        className="expense-item" >
          <span>{item.name}</span>
          <span>₹{item.amount}</span>
        </motion.div>
      ))}

    </div>
  )
}