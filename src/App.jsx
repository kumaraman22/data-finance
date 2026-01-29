import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

// Components
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import MarketDashboard from './components/MarketDashboard'; 
import DataCoverage from './components/DataCoverage';
import InteractiveDemos from "./components/InteractiveDemos";
import TrustAndCredibility from "./components/TrustAndCredibility";
import PricingTiers from "./components/PricingTiers";
import NewsInsights from "./components/NewsInsights";
import Footer from "./components/Footer";
import BlogSection from './components/BlogSection';
import Analytics from "./components/Analytics"; 
import Tools from './components/Tools';
import NeonAuthWrapper from "./components/auth/NeonAuthWrapper";
import Login from "./components/auth/Login"
import Signup from "./components/auth/Signup"
import AnimatedDotsBackground from "./components/AnimatedDotsBackground";

// Scroll to top on route change
const ScrollToTop = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
};

const AppContent = () => {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Routes>
        {/* Homepage */}
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <MarketDashboard />
              <DataCoverage />
              <InteractiveDemos />
              <TrustAndCredibility />
              <PricingTiers />
              <NewsInsights />
              <Footer />
            </>
          }
        />

        {/* Auth */}
        <Route path="/login" element={<NeonAuthWrapper mode="login" />} />
        <Route path="/signup" element={<NeonAuthWrapper mode="signup" />} />

        {/* Other Pages */}
        <Route path="/blog" element={<BlogSection />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/tools" element={<Tools />} />
      </Routes>
    </>
  );
};

const App = () => {
  return (
    <>
      <AppContent />
    </>
  );
};

export default App;
