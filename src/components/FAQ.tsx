import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp, MessageCircle, Bot, Zap, Clock, TrendingUp, Users } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const faqData = [
    {
      question: "Como funciona a Inteligência Artificial da Mídia Perfil?",
      answer: "Nossa IA utiliza algoritmos avançados de processamento de linguagem natural para entender e responder às consultas dos clientes em tempo real. O sistema aprende continuamente com cada interação, melhorando suas respostas e se adaptando ao perfil da sua empresa."
    },
    {
      question: "Quanto tempo leva para implementar a solução?",
      answer: "A implementação completa leva entre 3 a 7 dias úteis, dependendo da complexidade da sua empresa. Isso inclui configuração dos agentes de IA, integração com seus sistemas existentes, treinamento personalizado e testes completos antes do lançamento."
    },
    {
      question: "A IA pode realmente recuperar 90% dos clientes inativos?",
      answer: "Sim! Nossos agentes de IA trabalham 24/7 executando campanhas inteligentes de reengajamento. Eles analisam o comportamento dos clientes, identificam os melhores momentos para contato e personalizam as mensagens, resultando em uma taxa de recuperação média de 90%."
    },
    {
      question: "Quais canais de comunicação são integrados?",
      answer: "Integramos Website, WhatsApp, Facebook Messenger, Instagram Direct, E-mail e SMS em uma única plataforma. Todos os canais são gerenciados pelos mesmos agentes de IA, garantindo consistência na comunicação e experiência unificada para seus clientes."
    },
    {
      question: "Como é calculado o ROI da solução?",
      answer: "O ROI é calculado com base no aumento de vendas, redução de custos operacionais e recuperação de clientes. Em média, nossos clientes veem ROI positivo em 30 dias, com retorno de 300% a 500% no primeiro ano de uso da solução."
    },
    {
      question: "A IA substitui completamente minha equipe de atendimento?",
      answer: "Não, nossa IA complementa sua equipe. Ela resolve 80% das consultas automaticamente e encaminha casos complexos para humanos. Isso permite que sua equipe foque em vendas estratégicas e relacionamento com clientes VIP, aumentando a produtividade geral."
    },
    {
      question: "Como garantem a segurança dos dados dos clientes?",
      answer: "Utilizamos criptografia de ponta a ponta, servidores seguros em Angola e cumprimos todas as regulamentações de proteção de dados. Seus dados nunca são compartilhados com terceiros e você mantém total controle sobre as informações da sua empresa."
    },
    {
      question: "Que tipo de suporte técnico é oferecido?",
      answer: "Oferecemos suporte técnico 24/7 via WhatsApp, telefone e e-mail. Nossa equipe especializada em Angola está sempre disponível para ajustes, melhorias e resolução de qualquer questão técnica que possa surgir."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <MessageCircle className="h-8 w-8 text-primary mr-3" />
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
                Perguntas Frequentes
              </h2>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Tire suas dúvidas sobre nossa solução de Inteligência Artificial empresarial
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4 mb-16">
            {faqData.map((item, index) => (
              <Card key={index} className="border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-0">
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full text-left p-6 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors duration-200"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white pr-4">
                      {item.question}
                    </h3>
                    {openItems.includes(index) ? (
                      <ChevronUp className="h-5 w-5 text-primary flex-shrink-0" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-primary flex-shrink-0" />
                    )}
                  </button>
                  
                  {openItems.includes(index) && (
                    <div className="px-6 pb-6">
                      <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Benefits Summary */}
          <div className="bg-gradient-to-r from-primary to-blue-600 rounded-2xl p-8 text-white mb-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">Por que escolher a Mídia Perfil?</h3>
              <p className="text-blue-100 max-w-2xl mx-auto">
                Somos pioneiros em IA empresarial em Angola, com resultados comprovados
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mb-3 mx-auto">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div className="text-2xl font-bold mb-1">24/7</div>
                <div className="text-blue-100 text-sm">Atendimento Automatizado</div>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mb-3 mx-auto">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <div className="text-2xl font-bold mb-1">90%</div>
                <div className="text-blue-100 text-sm">Taxa de Recuperação</div>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mb-3 mx-auto">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <div className="text-2xl font-bold mb-1">3-7</div>
                <div className="text-blue-100 text-sm">Dias para Implementar</div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-center mb-4">
                <Bot className="h-8 w-8 text-primary mr-3" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Pronto para Transformar sua Empresa?
                </h3>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                Agende uma demonstração gratuita e veja como nossa IA pode revolucionar 
                seu atendimento ao cliente e aumentar suas vendas.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={() => scrollToSection('contato')}
                  size="lg"
                  className="text-lg px-8 py-4 h-auto"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Agendar Demonstração
                </Button>
                
                <Button
                  onClick={() => scrollToSection('sobre')}
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 py-4 h-auto"
                >
                  <Users className="mr-2 h-5 w-5" />
                  Conhecer a Equipe
                </Button>
              </div>
              
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
                ✓ Demonstração gratuita • ✓ Sem compromisso • ✓ Suporte em português
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;