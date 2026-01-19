
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.tsx';
import Footer from './components/Footer.tsx';
import Home from './pages/Home.tsx';
import Portfolio from './pages/Portfolio.tsx';
import Services from './pages/Services.tsx';
import FAQ from './pages/FAQ.tsx';
import ReferralProgram from './pages/ReferralProgram.tsx';
import Chatbot from './components/Chatbot.tsx';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/services" element={<Services />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/referral" element={<ReferralProgram />} />
          </Routes>
        </main>
        <Chatbot />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
