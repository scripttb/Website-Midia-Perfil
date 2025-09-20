import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Bot, Globe, Zap, User } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                Automatize sua empresa com{' '}
                <span className="text-primary">Inteligência Artificial</span>{' '}
                24/7
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                Da captação de leads à fidelização de clientes — conectamos Website, 
                e um agente de IA integrado.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={() => scrollToSection('solucoes')}
                className="text-lg px-8 py-4 h-auto"
              >
                Quero Conhecer a Solução
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection('contato')}
                className="text-lg px-8 py-4 h-auto"
              >
                Agende uma Demonstração
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200 dark:border-gray-700">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Atendimento</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">90%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Recuperação</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Automação</div>
              </div>
            </div>
          </div>

          {/* Illustration */}
          <div className="relative">
            <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 border border-gray-200 dark:border-gray-700">
              {/* Integration Flow */}
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    Integração Completa
                  </h3>
                </div>

                {/* Cliente */}
                <div className="flex items-center justify-center">
                  <div className="bg-orange-100 dark:bg-orange-900/30 rounded-lg p-4 flex items-center space-x-3">
                    <User className="h-8 w-8 text-orange-600" />
                    <span className="font-medium text-gray-900 dark:text-white">Cliente</span>
                  </div>
                </div>

                {/* Connection Line */}
                <div className="flex justify-center">
                  <div className="w-px h-8 bg-gradient-to-b from-orange-600 to-primary"></div>
                </div>

                {/* Website */}
                <div className="flex items-center justify-center">
                  <div className="bg-blue-100 dark:bg-blue-900/30 rounded-lg p-4 flex items-center space-x-3">
                    <Globe className="h-8 w-8 text-primary" />
                    <span className="font-medium text-gray-900 dark:text-white">Website</span>
                  </div>
                </div>

                {/* Connection Line */}
                <div className="flex justify-center">
                  <div className="w-px h-8 bg-gradient-to-b from-primary to-primary"></div>
                </div>

                {/* AI Agent */}
                <div className="flex items-center justify-center">
                  <div className="bg-primary/10 dark:bg-primary/20 rounded-lg p-4 flex items-center space-x-3 border-2 border-primary/20">
                    <Bot className="h-8 w-8 text-primary" />
                    <span className="font-medium text-gray-900 dark:text-white">Agente de IA</span>
                  </div>
                </div>

                {/* Connection Line */}
                <div className="flex justify-center">
                  <div className="w-px h-8 bg-gradient-to-b from-primary to-green-600"></div>
                </div>

                {/* Response back to Cliente */}
                <div className="flex items-center justify-center">
                  <div className="bg-green-100 dark:bg-green-900/30 rounded-lg p-4 flex items-center space-x-3">
                    <Zap className="h-8 w-8 text-green-600" />
                    <span className="font-medium text-gray-900 dark:text-white">Resposta ao Cliente</span>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-primary text-white rounded-full p-3 shadow-lg animate-bounce">
                <Bot className="h-6 w-6" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-green-500 text-white rounded-full p-3 shadow-lg animate-pulse">
                <Zap className="h-6 w-6" />
              </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-blue-300/20 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;