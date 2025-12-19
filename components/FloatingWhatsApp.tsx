import React from 'react';
import { MessageCircle } from 'lucide-react';

const FloatingWhatsApp: React.FC = () => {
  return (
    <a 
      href="https://wa.me/5516982054000" 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 group"
    >
      <div className="bg-white text-gray-800 px-4 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block font-medium text-sm">
        Falar com especialista
      </div>
      <div className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-transform transform hover:scale-110 flex items-center justify-center animate-bounce-slow">
        <MessageCircle size={28} fill="white" />
      </div>
    </a>
  );
};

export default FloatingWhatsApp;