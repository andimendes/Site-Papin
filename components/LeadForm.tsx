import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

const LeadForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    establishment: '',
    revenue: '',
    pain: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
      console.log('Lead Captured:', formData);
    }, 1000);
  };

  return (
    <section id="diagnostico" className="py-20 bg-orange-600 relative overflow-hidden">
       {/* Background pattern */}
       <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '30px 30px'}}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          
          <div className="lg:w-5/12 text-white">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Agende seu Diagnóstico <br/><span className="text-yellow-300">Gratuito</span>
            </h2>
            <p className="text-orange-100 text-lg mb-8 leading-relaxed">
              Descubra onde seu restaurante está perdendo dinheiro. Nossa equipe de especialistas fará um levantamento completo da sua saúde fiscal e financeira.
            </p>
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-green-500 rounded-full p-1">
                  <CheckCircle size={20} className="text-white" />
                </div>
                <span className="font-semibold">Análise de Regime Tributário</span>
              </div>
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-green-500 rounded-full p-1">
                  <CheckCircle size={20} className="text-white" />
                </div>
                <span className="font-semibold">Verificação de Créditos Fiscais</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-green-500 rounded-full p-1">
                  <CheckCircle size={20} className="text-white" />
                </div>
                <span className="font-semibold">Raio-X do CMV</span>
              </div>
            </div>
          </div>

          <div className="lg:w-5/12 w-full">
            <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-10">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="text-green-600" size={40} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Solicitação Recebida!</h3>
                  <p className="text-gray-600">Nossa equipe entrará em contato em até 24 horas úteis para agendar seu diagnóstico.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Seu Nome</label>
                    <input 
                      type="text" 
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all outline-none"
                      placeholder="Ex: João da Silva"
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">E-mail Profissional</label>
                    <input 
                      type="email" 
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all outline-none"
                      placeholder="joao@restaurante.com.br"
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <label htmlFor="establishment" className="block text-sm font-medium text-gray-700 mb-1">Nome do Estabelecimento</label>
                    <input 
                      type="text" 
                      id="establishment"
                      name="establishment"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all outline-none"
                      placeholder="Ex: Cantina do João"
                      onChange={handleChange}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="revenue" className="block text-sm font-medium text-gray-700 mb-1">Faturamento Mensal</label>
                      <select 
                        id="revenue"
                        name="revenue"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all outline-none bg-white"
                        onChange={handleChange}
                        defaultValue=""
                      >
                        <option value="" disabled>Selecione</option>
                        <option value="up_to_50k">Até R$ 50k</option>
                        <option value="50k_150k">R$ 50k - R$ 150k</option>
                        <option value="150k_500k">R$ 150k - R$ 500k</option>
                        <option value="above_500k">Acima de R$ 500k</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="pain" className="block text-sm font-medium text-gray-700 mb-1">Principal Desafio</label>
                      <select 
                        id="pain"
                        name="pain"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all outline-none bg-white"
                        onChange={handleChange}
                        defaultValue=""
                      >
                        <option value="" disabled>Selecione</option>
                        <option value="impostos">Altos Impostos</option>
                        <option value="cmv">Controle de CMV</option>
                        <option value="lucro">Falta de Lucro</option>
                        <option value="gestao">Gestão Financeira</option>
                      </select>
                    </div>
                  </div>

                  <button 
                    type="submit" 
                    className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2 text-lg"
                  >
                    <span>Solicitar Agora</span>
                    <Send size={20} />
                  </button>

                  <p className="text-center text-xs text-gray-500 mt-4">
                    Seus dados estão 100% seguros. Não enviamos spam.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;