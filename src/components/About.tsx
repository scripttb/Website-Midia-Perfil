import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Target, Award, Users, Zap, ArrowRight } from 'lucide-react';

const About: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const values = [
    {
      icon: Target,
      title: 'Missão',
      description: 'Modernizar empresas angolanas através da Inteligência Artificial, conectando todos os canais de comunicação.'
    },
    {
      icon: Award,
      title: 'Excelência',
      description: 'Comprometidos em entregar soluções de alta qualidade que superam as expectativas dos nossos clientes.'
    },
    {
      icon: Users,
      title: 'Parceria',
      description: 'Trabalhamos lado a lado com nossos clientes para garantir o sucesso e crescimento sustentável.'
    },
    {
      icon: Zap,
      title: 'Inovação',
      description: 'Sempre na vanguarda da tecnologia, oferecendo as mais avançadas soluções de IA do mercado.'
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Sobre a Mídia Perfil
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Pioneiros em Infraestrutura de Inteligência Artificial em Angola
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Content */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Transformando o Futuro dos Negócios
                </h3>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  A Mídia Perfil é pioneira em Infraestrutura de Inteligência Artificial em Angola. 
                  Nosso objetivo é modernizar empresas, conectando todos os canais de comunicação 
                  a agentes inteligentes que aumentam a produtividade, reduzem custos e recuperam 
                  clientes perdidos.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  Com uma equipe especializada e tecnologia de ponta, oferecemos soluções 
                  personalizadas que se adaptam às necessidades específicas de cada empresa, 
                  garantindo resultados mensuráveis e sustentáveis.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={() => scrollToSection('contato')}
                  size="lg"
                  className="text-lg px-8 py-4 h-auto"
                >
                  Fale Conosco
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  onClick={() => scrollToSection('solucoes')}
                  size="lg"
                  className="text-lg px-8 py-4 h-auto"
                >
                  Nossas Soluções
                </Button>
              </div>
            </div>

            {/* Visual Element */}
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/10 to-blue-600/10 rounded-2xl p-8 border border-primary/20">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">100+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Empresas Atendidas</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Suporte Disponível</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">5+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Anos de Experiência</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">90%</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Taxa de Sucesso</div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-400/20 rounded-full blur-xl"></div>
            </div>
          </div>

          {/* Values */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card 
                  key={index} 
                  className="group hover:shadow-lg transition-all duration-300 border-0 bg-white dark:bg-gray-800"
                >
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {value.title}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Team Section */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-primary to-blue-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Nossa Equipe</h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Profissionais especializados em Inteligência Artificial, desenvolvimento de software 
                e estratégias digitais, prontos para transformar sua empresa.
              </p>
              <div className="flex justify-center space-x-8">
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1">10+</div>
                  <div className="text-blue-100 text-sm">Especialistas</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1">50+</div>
                  <div className="text-blue-100 text-sm">Projetos</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1">99%</div>
                  <div className="text-blue-100 text-sm">Satisfação</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;