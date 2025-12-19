import React, { useState } from 'react';
import { PlayCircle, X } from 'lucide-react';

const Hero: React.FC = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop" 
          alt="Ambiente de restaurante próspero e sofisticado" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/50"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-16">
        <div className="max-w-3xl">
          <div className="inline-block bg-orange-600/20 border border-orange-500/50 backdrop-blur-sm px-4 py-1.5 rounded-full mb-6">
            <span className="text-orange-400 font-semibold text-sm tracking-wide uppercase">Especialistas em Food Service</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Pare de trabalhar apenas para pagar contas. <br className="hidden md:block"/>
            <span className="text-orange-500">Transforme o faturamento</span> do seu restaurante em <span className="text-yellow-400">lucro real</span>.
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
            Acabe com a cegueira financeira. A Papin é a inteligência que organiza seu CMV, recupera impostos e coloca dinheiro no seu bolso.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#diagnostico" 
              className="bg-orange-600 hover:bg-orange-700 text-white text-lg font-bold px-8 py-4 rounded-full transition-all transform hover:scale-105 text-center shadow-[0_0_20px_rgba(234,88,12,0.5)]"
            >
              Solicitar Diagnóstico Gratuito
            </a>
            
            <button 
              onClick={() => setIsVideoOpen(true)}
              className="group flex items-center justify-center gap-3 text-white font-semibold px-8 py-4 rounded-full border border-white/30 hover:bg-white/10 transition-all"
            >
              <PlayCircle className="group-hover:text-orange-400 transition-colors" size={24} />
              <span>Ver como funciona</span>
            </button>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 p-4 backdrop-blur-md transition-opacity duration-300">
          <div className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-gray-800">
            <button 
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-4 right-4 z-50 text-white/80 hover:text-white bg-black/60 hover:bg-orange-600 rounded-full p-2 transition-all backdrop-blur-sm"
              aria-label="Fechar vídeo"
            >
              <X size={24} />
            </button>
            <iframe 
              className="w-full h-full" 
              src="https://www.youtube.com/embed/99rIRdlO8F4?rel=0" 
              title="Papin Contabilidade - Vídeo Institucional"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen
            ></iframe>
          </div>
          {/* Close on click outside */}
          <div 
            className="absolute inset-0 z-40" 
            onClick={() => setIsVideoOpen(false)}
          ></div>
        </div>
      )}

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-gray-50 to-transparent"></div>
    </section>
  );
};

export default Hero;