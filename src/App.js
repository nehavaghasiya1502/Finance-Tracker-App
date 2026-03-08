import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { initializeCategories } from "./utils/localstorage";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Features from "./pages/Features";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ExpenseList from "./components/ExpenseList";
import Dashboard from "./pages/DashBoard";

function Layout() {

  const location = useLocation();


  const hideNavbar =
    location.pathname === "/login" ||
    location.pathname === "/register";

  const hideFooter =
    location.pathname === "/login" ||
    location.pathname === "/register" ||
    location.pathname === "/dashboard";


  return (
    <>
      {!hideNavbar && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/expenses" element={<ExpenseList />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>

      {!hideFooter && <Footer />}
    </>
  );
}

function App() {

  useEffect(() => {
    initializeCategories();
  }, []);

  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;