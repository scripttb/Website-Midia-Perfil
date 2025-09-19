import React from 'react';
import { Facebook, Instagram, Linkedin, MessageCircle, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="text-2xl font-bold text-primary">
              Mídia Perfil
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              Pioneira em Infraestrutura de Inteligência Artificial em Angola. 
              Transformamos empresas através da automação inteligente.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-primary hover:text-white transition-colors duration-300"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-primary hover:text-white transition-colors duration-300"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-primary hover:text-white transition-colors duration-300"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://wa.me/244946756512"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-primary hover:text-white transition-colors duration-300"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Links Rápidos
            </h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors duration-300 text-sm"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('sobre')}
                  className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors duration-300 text-sm"
                >
                  Sobre Nós
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('solucoes')}
                  className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors duration-300 text-sm"
                >
                  Soluções
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contato')}
                  className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors duration-300 text-sm"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Nossos Serviços
            </h3>
            <ul className="space-y-2">
              <li className="text-gray-600 dark:text-gray-300 text-sm">
                Automação com IA
              </li>
              <li className="text-gray-600 dark:text-gray-300 text-sm">
                Integração de Sistemas
              </li>
              <li className="text-gray-600 dark:text-gray-300 text-sm">
                Chatbots Inteligentes
              </li>
              <li className="text-gray-600 dark:text-gray-300 text-sm">
                Recuperação de Clientes
              </li>
              <li className="text-gray-600 dark:text-gray-300 text-sm">
                Consultoria Especializada
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Informações de Contato
            </h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  <p>Luanda, Angola</p>
                  <p>Rua Principal, Nº 123</p>
                  <p>Bairro Maianga</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <a
                  href="tel:+244946756512"
                  className="text-sm text-gray-600 dark:text-gray-300 hover:text-primary transition-colors duration-300"
                >
                  +244 946 756 512
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <a
                  href="mailto:geral@midiaperfil.com"
                  className="text-sm text-gray-600 dark:text-gray-300 hover:text-primary transition-colors duration-300"
                >
                  geral@midiaperfil.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 dark:border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-600 dark:text-gray-300">
              © {currentYear} Mídia Perfil. Todos os direitos reservados.
            </div>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-sm text-gray-600 dark:text-gray-300 hover:text-primary transition-colors duration-300"
              >
                Política de Privacidade
              </a>
              <a
                href="#"
                className="text-sm text-gray-600 dark:text-gray-300 hover:text-primary transition-colors duration-300"
              >
                Termos de Uso
              </a>
              <a
                href="#"
                className="text-sm text-gray-600 dark:text-gray-300 hover:text-primary transition-colors duration-300"
              >
                Cookies
              </a>
            </div>
          </div>
        </div>

        {/* Made with love */}
        <div className="text-center mt-8">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Desenvolvido com ❤️ pela equipe Mídia Perfil
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;