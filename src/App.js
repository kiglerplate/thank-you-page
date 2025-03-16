import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import HomePage from "./HomePage.js";
import PrivacyPolicy from "./PrivacyPolicy";
import TermsOfService from "./TermsOfService";
import ThanksPage from "./ThanksPage";
import Contact from "./Contact";
import { FaBars, FaTimes } from "react-icons/fa"; // ייבוא אייקונים מ-FontAwesome
import "./App.css"; // ייבוא קובץ CSS

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <Router>
      <nav className="nav">
        <div className="nav-container">
          <Link to="/" className="logo">
            שם האתר
          </Link>
          <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </div>
          <div
            className={`nav-links ${
              isMobileMenuOpen ? "nav-links-active" : ""
            }`}
          >
            <Link to="/" className="link" onClick={toggleMobileMenu}>
              דף הבית
            </Link>
            <Link
              to="/privacy-policy"
              className="link"
              onClick={toggleMobileMenu}
            >
              מדיניות פרטיות
            </Link>
            <Link
              to="/terms-of-service"
              className="link"
              onClick={toggleMobileMenu}
            >
              תנאי שימוש
            </Link>
            <Link to="/contact" className="link" onClick={toggleMobileMenu}>
              צור קשר
            </Link>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/thanksPage" element={<ThanksPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
