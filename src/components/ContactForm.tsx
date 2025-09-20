import React from 'react';

const ContactForm: React.FC = () => {

  return (
    <section id="contato" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              👉 Fale Conosco e Descubra Como a IA Pode Impulsionar o Seu Negócio
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Preencha o formulário abaixo e nossa equipe entrará em contato para uma consultoria personalizada
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                  Entre em Contato
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">📧</span>
                    </div>
                    <span className="text-gray-600 dark:text-gray-300">geral@midiaperfil.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">📱</span>
                    </div>
                    <span className="text-gray-600 dark:text-gray-300">+55 (11) 99999-9999</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">🕒</span>
                    </div>
                    <span className="text-gray-600 dark:text-gray-300">Segunda a Sexta, 9h às 18h</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Por que escolher nossa solução?
                </h4>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li className="flex items-center space-x-2">
                    <span className="text-green-500">✓</span>
                    <span>Assistente de IA personalizado</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-green-500">✓</span>
                    <span>Integração completa com seus sistemas</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-green-500">✓</span>
                    <span>Suporte técnico especializado</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-green-500">✓</span>
                    <span>ROI comprovado em 30 dias</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Embedded N8N Form */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <iframe
                src="https://webhook.midiaperfil.com/form/b425cd07-9560-4482-88f0-fd01196571bd"
                width="100%"
                height="800"
                frameBorder="0"
                className="w-full"
                title="Formulário de Contato"
                style={{ minHeight: '800px' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;