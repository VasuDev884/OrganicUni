import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Services from '../components/services/services';
import Certifications from '../components/certifications/certifications';
import Clients from '../components/Clients/Clients';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
import {Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 font-sans pt-20">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </>
    
  );
}

export default App;
