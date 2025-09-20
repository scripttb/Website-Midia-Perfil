import { useState, useRef, useEffect, forwardRef, useImperativeHandle } from 'react';
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

export interface ChatWidgetRef {
  openChat: () => void;
}

const ChatWidget = forwardRef<ChatWidgetRef>((props, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Olá! Sou um agente virtual da Mídia Perfil. Estou aqui para ajudá-lo com informações sobre nossas soluções de IA e responder suas dúvidas. Como posso ajudá-lo hoje?',
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useImperativeHandle(ref, () => ({
    openChat: () => setIsOpen(true)
  }));

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
      // Logs para debug
      console.log('🚀 Enviando mensagem para n8n:', text);
      console.log('📡 URL do webhook:', 'https://n8n.midiaperfil.com/webhook-test/bfce9da3-f8bb-4d88-a651-5ff80a7d5cd4');
      
      const payload = {
        message: text,
        timestamp: new Date().toISOString(),
        sessionId: 'chat-session-' + Date.now(),
        source: 'website-chat',
        userAgent: navigator.userAgent
      };
      
      console.log('📦 Payload enviado:', payload);
      
      // Enviar para o webhook real
      const response = await fetch('https://webhook.midiaperfil.com/webhook/bfce9da3-f8bb-4d88-a651-5ff80a7d5cd4', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      console.log('📊 Status da resposta:', response.status);
      console.log('✅ Response OK:', response.ok);
      console.log('🔍 Headers da resposta:', Object.fromEntries(response.headers.entries()));

      if (response.ok) {
        console.log('🎯 Resposta bem-sucedida! Processando dados...');
        
        const rawText = await response.text();
        console.log('📄 Texto bruto recebido:', rawText);
        
        let data;
        try {
          data = JSON.parse(rawText);
          console.log('📥 JSON parseado:', data);
        } catch (parseError) {
          console.error('❌ Erro ao fazer parse do JSON:', parseError);
          console.log('📝 Usando texto bruto como resposta');
          data = { response: rawText };
        }
        
        // Extrair a resposta do webhook - suporta diferentes formatos
        let responseText = '';
        
        console.log('🔍 Estrutura completa do JSON recebido:', JSON.stringify(data, null, 2));
        
        if (data.output) {
          responseText = data.output;
          console.log('✅ Usando data.output:', responseText);
        } else if (data.response) {
          responseText = data.response;
          console.log('✅ Usando data.response:', responseText);
        } else if (data.message) {
          responseText = data.message;
          console.log('✅ Usando data.message:', responseText);
        } else if (data.text) {
          responseText = data.text;
          console.log('✅ Usando data.text:', responseText);
        } else if (data.reply) {
          responseText = data.reply;
          console.log('✅ Usando data.reply:', responseText);
        } else if (data.answer) {
          responseText = data.answer;
          console.log('✅ Usando data.answer:', responseText);
        } else if (typeof data === 'string') {
          responseText = data;
          console.log('✅ Usando string direta:', responseText);
        } else if (data.data && data.data.response) {
          responseText = data.data.response;
          console.log('✅ Usando data.data.response:', responseText);
        } else {
          responseText = 'Desculpe, não consegui processar sua mensagem. Tente novamente.';
          console.log('⚠️ Usando resposta padrão. Estrutura recebida:', JSON.stringify(data, null, 2));
        }
        
        console.log('💬 Resposta final extraída:', responseText);
        console.log('🚀 Adicionando mensagem ao chat...');
        
        // Usar a resposta do webhook
        const botResponse: Message = {
          id: (Date.now() + 1).toString(),
          text: responseText,
          sender: 'bot',
          timestamp: new Date()
        };
        
        console.log('📨 Objeto da mensagem criado:', botResponse);
        
        setMessages(prev => {
          const newMessages = [...prev, botResponse];
          console.log('📋 Lista de mensagens atualizada:', newMessages);
          return newMessages;
        });
        
        console.log('✅ Mensagem adicionada com sucesso!');
        console.log('🔄 Estado atual de isTyping:', isTyping);
        console.log('📊 Total de mensagens agora:', messages.length + 1);
      } else {
        console.log('❌ Webhook falhou - Status:', response.status);
        const errorText = await response.text();
        console.log('🔍 Erro do servidor:', errorText);
        
        // Verificar se é erro 404 (webhook não registrado)
        let errorMessage = 'Desculpe, ocorreu um erro. Tente novamente em alguns instantes.';
        
        try {
          const errorData = JSON.parse(errorText);
          if (errorData.code === 404 && errorData.message.includes('not registered')) {
            errorMessage = 'O serviço está temporariamente indisponível. Nossa equipe já foi notificada e está trabalhando para resolver o problema.';
            console.log('⚠️ Webhook não está registrado - workflow precisa estar ativo');
          }
        } catch (parseError) {
          console.log('📝 Erro não é JSON válido, usando mensagem padrão');
        }
        
        // Mostrar mensagem de erro ao usuário
        const errorResponse: Message = {
          id: (Date.now() + 1).toString(),
          text: errorMessage,
          sender: 'bot',
          timestamp: new Date()
        };
        
        setMessages(prev => [...prev, errorResponse]);
      }
      
      setIsTyping(false);

    } catch (error) {
      console.error('🚨 Erro na requisição:', error);
      
      // Fallback para quando o webhook está completamente indisponível
      let fallbackMessage = 'Desculpe, estou temporariamente indisponível. ';
      
      if (error instanceof TypeError && error.message.includes('fetch')) {
        fallbackMessage += 'Verifique sua conexão com a internet e tente novamente.';
        console.log('🌐 Erro de conectividade detectado');
      } else {
        fallbackMessage += 'Nossa equipe técnica já foi notificada. Tente novamente em alguns minutos.';
        console.log('⚠️ Erro desconhecido na requisição');
      }
      
      const fallbackResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: fallbackMessage,
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, fallbackResponse]);
      setIsTyping(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(inputMessage);
  };

  return (
    <>
      {/* Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse bg-white flex items-center justify-center"
          title="Converse com um Agente - Sua assistente virtual está pronta para ajudar!"
        >
          {isOpen ? <X className="h-6 w-6" /> : <img src="/ana-avatar.svg" alt="Agente" className="h-12 w-12 rounded-full" />}
        </div>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 sm:w-96">
          <Card className="shadow-2xl border-0 bg-white dark:bg-gray-900">
            <CardHeader className="bg-primary text-white rounded-t-lg">
              <CardTitle className="flex items-center space-x-2">
                <img src="/ana-avatar.svg" alt="Agente" className="h-6 w-6 rounded-full" />
                <span>Agente Virtual</span>
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
                          <img src="/ana-avatar.svg" alt="Agente" className="h-5 w-5 rounded-full flex-shrink-0 mt-0.5" />
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
                        <img src="/ana-avatar.svg" alt="Agente" className="h-5 w-5 rounded-full" />
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
});

ChatWidget.displayName = 'ChatWidget';

export default ChatWidget;