import { useState, useEffect } from "react";
import { FaChartPie, FaPlusCircle, FaWallet, FaBars } from "react-icons/fa";
import { motion } from "framer-motion";
import "./Sidebar.css";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 700);
      if (window.innerWidth > 700) setIsOpen(false); 
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {isSmallScreen && (
        <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <FaBars />
        </button>
      )}

      {(isOpen || !isSmallScreen) && (
        <motion.aside
          className="sidebar"
          initial={{ x: isSmallScreen ? -300 : 0, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <nav>
            <ul className="sidebar-menu">
              <li className="active">
                <FaChartPie className="icon" />
                <span>Dashboard</span>
              </li>
              <li>
                <FaPlusCircle className="icon" />
                <span>Add Income</span>
              </li>
              <li>
                <FaWallet className="icon" />
                <span>Add Expense</span>
              </li>
            </ul>
          </nav>

          <div className="sidebar-footer">
            <p>Finance Control</p>
          </div>
        </motion.aside>
      )}
    </>
  );
}