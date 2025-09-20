# Configuração do EmailJS para Formulário de Contato

## 📧 Como Configurar o Envio de Emails

Para que o formulário de contato envie emails para **geral@midiaperfil.com**, siga estes passos:

### 1. Criar Conta no EmailJS
1. Acesse [https://www.emailjs.com/](https://www.emailjs.com/)
2. Crie uma conta gratuita
3. Faça login no dashboard

### 2. Configurar Serviço de Email
1. No dashboard, vá em **Email Services**
2. Clique em **Add New Service**
3. Escolha seu provedor de email (Gmail, Outlook, etc.)
4. Configure com o email **geral@midiaperfil.com**
5. Anote o **Service ID** gerado

### 3. Criar Template de Email
1. Vá em **Email Templates**
2. Clique em **Create New Template**
3. Use este template:

```html
Assunto: Novo Contato - {{from_name}}

Olá,

Você recebeu um novo contato através do site:

Nome: {{from_name}}
Email: {{from_email}}
Telefone: {{telefone}}

Informações da Empresa:
- Faturamento Mensal: {{faturamento_mensal}}
- Implementar IA: {{implementar_ia}}
- Sistema Interno: {{sistema_interno}}
- Número de Clientes: {{numero_clientes}}

Mensagem Adicional:
{{mensagem_adicional}}

---
Data/Hora: {{timestamp}}
Origem: {{source}}
```

4. Anote o **Template ID** gerado

### 4. Obter Chave Pública
1. Vá em **Account** > **General**
2. Copie a **Public Key**

### 5. Configurar Variáveis de Ambiente
Edite o arquivo `.env.local` com suas configurações:

```env
VITE_EMAILJS_SERVICE_ID=seu_service_id_aqui
VITE_EMAILJS_TEMPLATE_ID=seu_template_id_aqui
VITE_EMAILJS_PUBLIC_KEY=sua_public_key_aqui
VITE_EMAIL_DESTINO=geral@midiaperfil.com
```

### 6. Reiniciar o Servidor
Após configurar as variáveis, reinicie o servidor de desenvolvimento:

```bash
npm run dev
```

## ✅ Teste o Formulário
1. Acesse http://localhost:5173
2. Vá até a seção "Contato"
3. Preencha o formulário
4. Clique em "Enviar Mensagem"
5. Verifique se o email chegou em **geral@midiaperfil.com**

## 🔧 Solução de Problemas

### Email não está sendo enviado?
- Verifique se as variáveis de ambiente estão corretas
- Confirme se o serviço de email está ativo no EmailJS
- Verifique o console do navegador para erros

### Emails indo para spam?
- Configure SPF/DKIM no seu domínio
- Use um email profissional como remetente
- Evite palavras que ativam filtros de spam

## 📊 Plano Gratuito do EmailJS
- 200 emails por mês
- Suficiente para a maioria dos sites
- Upgrade disponível se necessário