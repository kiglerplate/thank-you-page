import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './HomePage.js';
import PrivacyPolicy from './PrivacyPolicy';
import TermsOfService from './TermsOfService';
import ThanksPage from './ThanksPage';

function App() {
  return (
    <Router>
      <nav style={styles.nav}>
        <Link to="/" style={styles.link}>דף הבית</Link>
        <Link to="/privacy-policy" style={styles.link}>מדיניות פרטיות</Link>
        <Link to="/terms-of-service" style={styles.link}>תנאי שימוש</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/thanksPage" element={<ThanksPage />} />
      </Routes>
    </Router>
  );
}

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#007bff',
    padding: '10px',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    margin: '0 15px',
    fontSize: '18px',
  },
};

export default App;