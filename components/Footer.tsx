import React from 'react';
import { Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Brand */}
          <div>
            <div className="mb-6">
               <img 
                  src="https://f005.backblazeb2.com/file/Papin-Contabilidade/Completo+-+Laranja.png" 
                  alt="Papin Contabilidade"
                  className="h-12 w-auto object-contain" 
               />
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Contabilidade especializada que transforma a gestão de restaurantes, bares e cafeterias em máquinas de lucro.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-orange-600 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Navegação</h3>
            <ul className="space-y-3">
              <li><a href="#problemas" className="hover:text-orange-500 transition-colors">Dores Comuns</a></li>
              <li><a href="#solucoes" className="hover:text-orange-500 transition-colors">Nossa Solução</a></li>
              <li><a href="#quem-somos" className="hover:text-orange-500 transition-colors">Quem Somos</a></li>
              <li><a href="#diagnostico" className="hover:text-orange-500 transition-colors">Diagnóstico Gratuito</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Fale Conosco</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-orange-500" />
                <span>(16) 9 8205-4000</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-orange-500" />
                <span>contato@papincontabilidade.com.br</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-orange-500 mt-1" />
                <span>Atendemos todo o Brasil</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Papin Contabilidade. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;