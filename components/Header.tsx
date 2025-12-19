import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Problemas', href: '#problemas' },
    { name: 'Soluções', href: '#solucoes' },
    { name: 'Quem Somos', href: '#quem-somos' },
    { name: 'Jornada', href: '#jornada' },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
           <img 
              src="https://f005.backblazeb2.com/file/Papin-Contabilidade/Completo+-+Laranja.png" 
              alt="Papin Contabilidade"
              className="h-10 md:h-12 w-auto object-contain transition-all duration-300" 
           />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`font-medium hover:text-orange-500 transition-colors ${isScrolled ? 'text-gray-700' : 'text-white drop-shadow-sm'}`}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#diagnostico" 
            className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2.5 rounded-full font-bold transition-transform transform hover:scale-105 shadow-lg"
          >
            Diagnóstico Gratuito
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-orange-600 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} color={isScrolled ? '#ea580c' : 'white'} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-xl py-6 flex flex-col items-center gap-4 md:hidden border-t border-gray-100">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-gray-800 font-medium text-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#diagnostico" 
            className="bg-orange-600 text-white px-8 py-3 rounded-full font-bold mt-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Solicitar Diagnóstico
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;