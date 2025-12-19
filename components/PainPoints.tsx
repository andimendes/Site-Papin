import React from 'react';
import { AlertTriangle, TrendingDown, HelpCircle, UtensilsCrossed } from 'lucide-react';

const PainPoints: React.FC = () => {
  const pains = [
    {
      icon: <HelpCircle size={40} className="text-orange-600" />,
      title: "Cegueira Financeira",
      description: "Você sabe quanto lucrou de verdade no mês passado ou apenas viu o dinheiro entrar e sair do caixa?"
    },
    {
      icon: <UtensilsCrossed size={40} className="text-orange-600" />,
      title: "Sócio Majoritário Oculto",
      description: "Sente que o marketplace (iFood) e os impostos estão levando a maior parte do seu esforço?"
    },
    {
      icon: <TrendingDown size={40} className="text-orange-600" />,
      title: "Desperdício de CMV",
      description: "Sem fichas técnicas precisas, seu estoque vira lixo e seu lucro vai direto para o lixo junto."
    },
    {
      icon: <AlertTriangle size={40} className="text-orange-600" />,
      title: "Medo da Reforma",
      description: "Insegurança com a Reforma Tributária e o 'Imposto do Pecado'? Não deixe a lei fechar suas portas."
    }
  ];

  return (
    <section id="problemas" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Seu restaurante está <span className="text-orange-600">sobrevivendo</span> ou <span className="text-green-600">crescendo</span>?
          </h2>
          <p className="text-gray-600 text-lg">
            Muitos empreendedores do Food Service trabalham 14 horas por dia e não veem a cor do dinheiro. Identifique se você passa por isso:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pains.map((pain, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="bg-orange-50 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {pain.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{pain.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {pain.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPoints;