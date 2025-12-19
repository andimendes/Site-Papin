import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import About from './components/About';
import Roadmap from './components/Roadmap';
import LeadForm from './components/LeadForm';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Solutions from './components/Solutions';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <PainPoints />
        <Solutions />
        <About />
        <Roadmap />
        <LeadForm />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default App;