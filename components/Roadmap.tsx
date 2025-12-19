import React from 'react';
import { Search, Brush, BarChart3, Rocket } from 'lucide-react';

const Roadmap: React.FC = () => {
  const steps = [
    {
      icon: <Search className="text-white" size={24} />,
      title: "O Raio-X",
      subtitle: "Diagnóstico",
      description: "Analisamos seu regime tributário e margens atuais para identificar vazamentos de lucro."
    },
    {
      icon: <Brush className="text-white" size={24} />,
      title: "A Faxina",
      subtitle: "Organização",
      description: "Ajustamos processos internos e implementamos indicadores financeiros (KPIs) claros."
    },
    {
      icon: <BarChart3 className="text-white" size={24} />,
      title: "Pilotagem",
      subtitle: "Dados Reais",
      description: "Reuniões trimestrais de planejamento para previsibilidade total do seu caixa."
    },
    {
      icon: <Rocket className="text-white" size={24} />,
      title: "Expansão",
      subtitle: "Sustentabilidade",
      description: "Com o caixa saudável, o foco vira escala, novas unidades ou franquias."
    }
  ];

  return (
    <section id="jornada" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Sua Jornada para o Lucro</h2>
          <p className="text-gray-600">Sem medo de mudar de contador. Um processo claro e seguro.</p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-200 -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-yellow-500 flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300 border-4 border-white">
                  {step.icon}
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 h-full hover:shadow-md transition-shadow">
                  <span className="text-orange-600 font-bold text-sm uppercase tracking-wider block mb-1">{step.subtitle}</span>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;