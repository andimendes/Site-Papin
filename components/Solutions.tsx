import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import ProfitChart from './ProfitChart';

const Solutions: React.FC = () => {
  const benefits = [
    "CMV sob controle com fichas técnicas",
    "Engenharia Tributária (PIS/COFINS Monofásico)",
    "Previsibilidade de Fluxo de Caixa",
    "Segurança para abrir novas unidades"
  ];

  return (
    <section id="solucoes" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          <div className="lg:w-1/2">
            <span className="text-orange-600 font-bold tracking-wider uppercase text-sm">Nossa Expertise</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
              Transformamos dados confusos em <span className="bg-yellow-100 px-2 text-orange-700">lucro líquido</span>
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Não somos apenas emissores de guias. Atuamos como seus parceiros estratégicos para garantir que cada prato vendido contribua para o seu sonho.
            </p>

            <ul className="space-y-4 mb-8">
              {benefits.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="text-green-500 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-800 font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <a href="#diagnostico" className="text-orange-600 font-bold border-b-2 border-orange-600 pb-1 hover:text-orange-700 hover:border-orange-700 transition-colors inline-block">
              Conheça nossa metodologia &rarr;
            </a>
          </div>

          <div className="lg:w-1/2 w-full bg-gray-50 rounded-3xl p-6 md:p-10 shadow-inner border border-gray-100">
            <div className="mb-6 text-center">
              <h3 className="text-xl font-bold text-gray-800">Impacto Real no Bolso</h3>
              <p className="text-sm text-gray-500">Comparativo: Modelo Tradicional vs. Gestão Papin</p>
            </div>
            <div className="h-[300px] w-full">
              <ProfitChart />
            </div>
            <p className="text-xs text-center text-gray-400 mt-4">*Dados ilustrativos baseados na média de resultados dos nossos clientes.</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Solutions;