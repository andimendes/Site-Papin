import React from 'react';

const About: React.FC = () => {
  return (
    <section id="quem-somos" className="py-20 bg-gray-900 text-white relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">O Propósito Papin</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-yellow-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Why */}
          <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 text-center hover:bg-gray-800 transition-colors">
            <div className="bg-orange-600 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-6 text-xl font-bold shadow-lg shadow-orange-600/30">
              1
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Por que fazemos?</h3>
            <p className="text-gray-300 leading-relaxed">
              "Acreditamos que todo empreendedor de Food Service merece colher os frutos da sua paixão. Nossa missão é acabar com a cegueira financeira que mata bons negócios."
            </p>
          </div>

          {/* How */}
          <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 text-center hover:bg-gray-800 transition-colors transform md:-translate-y-4 shadow-2xl shadow-orange-900/20">
            <div className="bg-yellow-500 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-6 text-xl font-bold shadow-lg shadow-yellow-500/30">
              2
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Como fazemos?</h3>
            <p className="text-gray-300 leading-relaxed">
              "Através de uma contabilidade ativa, consultiva e humanizada, que utiliza dados em tempo real para tomar decisões estratégicas, não apenas emitir guias."
            </p>
          </div>

          {/* What */}
          <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 text-center hover:bg-gray-800 transition-colors">
            <div className="bg-white text-gray-900 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-6 text-xl font-bold shadow-lg">
              3
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">O que somos?</h3>
            <p className="text-gray-300 leading-relaxed">
              "Somos a Papin: contabilidade especializada em restaurantes, bares e cafeterias, com DNA focado exclusivamente no aumento do seu lucro líquido."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;