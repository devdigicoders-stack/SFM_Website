import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { PublicDataProvider } from './context/PublicDataContext';

// Layout Components for Public Website
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';

// Public Pages strictly aligned with DigiCoders Proposal & Presentation Decks
import Home from './pages/Home';
import About from './pages/About';
import RMServices from './pages/RMServices';
import IFMServices from './pages/IFMServices';
import ServiceDetails from './pages/ServiceDetails';
import Sustainability from './pages/Sustainability';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import ContactAudit from './pages/ContactAudit';
import AiMonitoring from './pages/AiMonitoring';
import SafetyCompliance from './pages/SafetyCompliance';
import ClientsPortfolio from './pages/ClientsPortfolio';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// Public Layout Wrapper for all customer-facing routes
function PublicLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-800 font-sans relative">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      {/* Floating Call & WhatsApp Round Action Buttons */}
      <FloatingActions />
    </div>
  );
}

export default function App() {
  return (
    <PublicDataProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* Public Client Routes */}
          <Route
            path="/"
            element={
              <PublicLayout>
                <Home />
              </PublicLayout>
            }
          />
          <Route
            path="/about"
            element={
              <PublicLayout>
                <About />
              </PublicLayout>
            }
          />
          <Route
            path="/rm-services"
            element={
              <PublicLayout>
                <RMServices />
              </PublicLayout>
            }
          />
          <Route
            path="/ifm-services"
            element={
              <PublicLayout>
                <IFMServices />
              </PublicLayout>
            }
          />
          <Route
            path="/service-details"
            element={
              <PublicLayout>
                <ServiceDetails />
              </PublicLayout>
            }
          />
          <Route
            path="/sustainability"
            element={
              <PublicLayout>
                <Sustainability />
              </PublicLayout>
            }
          />
          <Route
            path="/industries"
            element={
              <PublicLayout>
                <Sustainability />
              </PublicLayout>
            }
          />
          <Route
            path="/blogs"
            element={
              <PublicLayout>
                <Blog />
              </PublicLayout>
            }
          />
          <Route
            path="/blogs/:id"
            element={
              <PublicLayout>
                <BlogDetail />
              </PublicLayout>
            }
          />
          <Route
            path="/contact"
            element={
              <PublicLayout>
                <ContactAudit />
              </PublicLayout>
            }
          />
          <Route
            path="/ai-tracking"
            element={
              <PublicLayout>
                <AiMonitoring />
              </PublicLayout>
            }
          />
          <Route
            path="/ai-monitoring"
            element={
              <PublicLayout>
                <AiMonitoring />
              </PublicLayout>
            }
          />
          <Route
            path="/safety"
            element={
              <PublicLayout>
                <SafetyCompliance />
              </PublicLayout>
            }
          />
          <Route
            path="/clients"
            element={
              <PublicLayout>
                <ClientsPortfolio />
              </PublicLayout>
            }
          />

          {/* Fallback to Home */}
          <Route
            path="*"
            element={
              <PublicLayout>
                <Home />
              </PublicLayout>
            }
          />
        </Routes>
      </Router>
    </PublicDataProvider>
  );
}
