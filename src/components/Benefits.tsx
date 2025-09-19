import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, Bot, TrendingUp, Zap, Users, Globe } from 'lucide-react';

const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: Clock,
      title: 'Atendimento 24/7',
      description: 'Agentes de IA que trabalham ininterruptamente, garantindo que nenhum cliente seja perdido, independente do horário.',
      color: 'text-blue-600'
    },
    {
      icon: Bot,
      title: 'Automação Completa',
      description: 'Automação do website ou loja virtual completa, desde a captação até o fechamento de vendas.',
      color: 'text-purple-600'
    },
    {
      icon: TrendingUp,
      title: 'Recuperação de 90%',
      description: 'Recuperação de até 90% da sua base de clientes inativos através de estratégias inteligentes de reengajamento.',
      color: 'text-green-600'
    },
    {
      icon: Globe,
      title: 'Integração Total',
      description: 'Integração do Website com E-mail, Facebook, Instagram e WhatsApp em uma única plataforma.',
      color: 'text-orange-600'
    },
    {
      icon: Zap,
      title: 'Implementação Rápida',
      description: 'Setup e configuração em poucos dias, com suporte completo da nossa equipe especializada.',
      color: 'text-yellow-600'
    },
    {
      icon: Users,
      title: 'Suporte Especializado',
      description: 'Equipe dedicada para garantir o máximo aproveitamento da sua solução de IA empresarial.',
      color: 'text-red-600'
    }
  ];

  return (
    <section id="solucoes" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Por que Escolher a Mídia Perfil?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Nossa solução de Inteligência Artificial oferece benefícios únicos que transformam 
            completamente a forma como sua empresa se relaciona com os clientes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800"
              >
                <CardHeader className="text-center pb-4">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary/10 to-primary/20 mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`h-8 w-8 ${benefit.color}`} />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-r from-primary to-blue-600 rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Resultados Comprovados</h3>
            <p className="text-blue-100">Números que demonstram a eficácia da nossa solução</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">24/7</div>
              <div className="text-blue-100 text-sm">Disponibilidade</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">90%</div>
              <div className="text-blue-100 text-sm">Recuperação de Clientes</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">5x</div>
              <div className="text-blue-100 text-sm">Mais Conversões</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">100%</div>
              <div className="text-blue-100 text-sm">Automação</div>
            </div>
          </div>
        </div>

        {/* Customer Success Story Preview */}
        <div className="mt-16 bg-gray-50 dark:bg-gray-900 rounded-2xl p-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Caso de Sucesso Real
              </h3>
            </div>
            
            <blockquote className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed italic">
              "Se a sua empresa tem 5.000 ou até 10.000 clientes cadastrados, mas apenas 500 ativos, 
              com nossa solução você pode recuperar até 90% dessa base através de agentes de IA que 
              trabalham todos os dias, 24 horas por dia."
            </blockquote>
            
            <div className="mt-6 flex items-center justify-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-blue-600 rounded-full flex items-center justify-center">
                <Bot className="h-6 w-6 text-white" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-gray-900 dark:text-white">Mídia Perfil IA</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Solução Empresarial</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;