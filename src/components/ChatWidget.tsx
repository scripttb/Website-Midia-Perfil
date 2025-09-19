import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageCircle, Send, X, Bot, User } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Olá! Sou a Ana, assistente virtual da Mídia Perfil. Estou aqui para ajudá-lo com informações sobre nossas soluções de IA e responder suas dúvidas. Como posso ajudá-lo hoje?',
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async (text: string) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: text.trim(),
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    try {
      // Enviar para o webhook real
      const response = await fetch('https://webhook.midiaperfil.com/webhook/3050beca-f724-4dfa-9943-64b8bff1e02f', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: text,
          timestamp: new Date().toISOString(),
          sessionId: 'chat-session-' + Date.now(),
          source: 'website-chat',
          userAgent: navigator.userAgent
        }),
      });

      if (response.ok) {
        const data = await response.json();
        
        // Usar a resposta do webhook
        const botResponse: Message = {
          id: (Date.now() + 1).toString(),
          text: data.response || data.message || 'Obrigado pela sua mensagem! Nossa equipe entrará em contato em breve.',
          sender: 'bot',
          timestamp: new Date()
        };
        setMessages(prev => [...prev, botResponse]);
      } else {
        // Fallback para resposta local se webhook falhar
        const botResponse: Message = {
          id: (Date.now() + 1).toString(),
          text: getBotResponse(text),
          sender: 'bot',
          timestamp: new Date()
        };
        setMessages(prev => [...prev, botResponse]);
      }
      
      setIsTyping(false);

    } catch (error) {
      console.error('Erro ao enviar mensagem:', error);
      
      // Fallback para resposta local em caso de erro
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(text),
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }
  };

  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('preço') || message.includes('custo') || message.includes('valor')) {
      return 'Nossos preços são personalizados de acordo com as necessidades da sua empresa. Posso coletar algumas informações para preparar uma proposta personalizada. Qual o nome da sua empresa?';
    }
    
    if (message.includes('como funciona') || message.includes('funcionamento')) {
      return 'Nossa solução integra seu website com agentes de IA que trabalham 24/7, automatizando atendimento, captação de leads e recuperação de clientes. Posso explicar como isso funcionaria especificamente para seu negócio!';
    }
    
    if (message.includes('demonstração') || message.includes('demo') || message.includes('agendar')) {
      return 'Perfeito! Vou agendar uma demonstração personalizada para você. Por favor, me informe: 1) Nome da empresa, 2) Seu nome, 3) Email, 4) Telefone. Assim posso preparar uma apresentação específica para suas necessidades.';
    }
    
    if (message.includes('whatsapp') || message.includes('instagram') || message.includes('facebook')) {
      return 'Excelente pergunta! Nossa solução integra com WhatsApp Business, Instagram Direct, Facebook Messenger, email e seu website, centralizando todo o atendimento em uma única plataforma inteligente com IA.';
    }
    
    if (message.includes('contato') || message.includes('falar') || message.includes('conversar')) {
      return 'Estou aqui para isso! Sou a Ana e posso ajudar com todas suas dúvidas sobre nossas soluções de IA. O que gostaria de saber? Preços, funcionamento, demonstração ou algo específico?';
    }
    
    if (message.includes('email') || message.includes('@')) {
      return 'Obrigada pelas informações! Nossa equipe entrará em contato em breve. Enquanto isso, posso responder mais alguma dúvida sobre nossas soluções de IA?';
    }
    
    return 'Entendo! Como a Ana, estou aqui para ajudar com qualquer dúvida sobre nossas soluções de IA para empresas. Posso explicar sobre preços, funcionamento, agendar uma demonstração ou responder questões específicas. O que te interessa mais?';
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(inputMessage);
  };

  return (
    <>
      {/* Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          size="lg"
          className="rounded-full w-14 h-14 shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse"
        >
          {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
        </Button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 sm:w-96">
          <Card className="shadow-2xl border-0 bg-white dark:bg-gray-900">
            <CardHeader className="bg-primary text-white rounded-t-lg">
              <CardTitle className="flex items-center space-x-2">
                <Bot className="h-5 w-5" />
                <span>Ana - Assistente IA</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              {/* Messages */}
              <div className="h-80 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                        message.sender === 'user'
                          ? 'bg-primary text-white'
                          : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white'
                      }`}
                    >
                      <div className="flex items-start space-x-2">
                        {message.sender === 'bot' && (
                          <Bot className="h-4 w-4 mt-0.5 flex-shrink-0" />
                        )}
                        {message.sender === 'user' && (
                          <User className="h-4 w-4 mt-0.5 flex-shrink-0" />
                        )}
                        <div>
                          <p className="text-sm">{message.text}</p>
                          <p className="text-xs opacity-70 mt-1">
                            {message.timestamp.toLocaleTimeString('pt-BR', {
                              hour: '2-digit',
                              minute: '2-digit'
                            })}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-lg">
                      <div className="flex items-center space-x-2">
                        <Bot className="h-4 w-4" />
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <div className="border-t border-gray-200 dark:border-gray-700 p-4">
                <form onSubmit={handleSubmit} className="flex space-x-2">
                  <Input
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    placeholder="Digite sua mensagem..."
                    className="flex-1"
                    disabled={isTyping}
                  />
                  <Button type="submit" size="icon" disabled={isTyping || !inputMessage.trim()}>
                    <Send className="h-4 w-4" />
                  </Button>
                </form>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
};

export default ChatWidget;