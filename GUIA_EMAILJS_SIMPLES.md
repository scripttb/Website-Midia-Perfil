# 📧 Guia Super Simples - EmailJS (5 minutos!)

O **EmailJS é a forma mais simples** de enviar emails do seu formulário. Sem servidor, sem complicação!

## 🚀 Por que EmailJS é mais simples?

✅ **Sem servidor necessário** - Funciona direto no navegador  
✅ **Configuração rápida** - 5 minutos e está funcionando  
✅ **Gratuito** - 200 emails/mês grátis  
✅ **Sem código complexo** - Só precisa de uma chave  

## 📋 Passo a Passo (5 minutos)

### 1️⃣ **Criar Conta (1 minuto)**
1. Acesse [https://www.emailjs.com](https://www.emailjs.com)
2. Clique em **"Sign Up"**
3. Use Google, GitHub ou email
4. ✅ Conta criada!

### 2️⃣ **Configurar Serviço de Email (2 minutos)**
1. No dashboard, clique em **"Add New Service"**
2. Escolha seu provedor:
   - **Gmail** (mais comum)
   - **Outlook/Hotmail**
   - **Yahoo**
   - Outros
3. Conecte sua conta de email
4. ✅ Serviço configurado!

### 3️⃣ **Criar Template (1 minuto)**
1. Vá para **"Email Templates"**
2. Clique em **"Create New Template"**
3. Use este template pronto:

```html
Assunto: Novo contato: {{from_name}}

Olá!

Você recebeu um novo contato através do site:

Nome: {{from_name}}
Email: {{from_email}}
Telefone: {{phone}}
Faturamento Mensal: {{monthly_revenue}}
Implementar IA: {{implement_ai}}
Sistema Interno: {{internal_system}}
Número de Clientes: {{client_count}}

Mensagem:
{{message}}

---
Responder para: {{reply_to}}
```

4. Salve como **"template_contato"**
5. ✅ Template criado!

### 4️⃣ **Obter Chave Pública (30 segundos)**
1. Vá para **"Account"** > **"General"**
2. Copie a **"Public Key"**
3. ✅ Chave obtida!

### 5️⃣ **Configurar no Projeto (30 segundos)**
1. Abra o arquivo `.env.local`
2. Substitua `YOUR_PUBLIC_KEY` pela sua chave:

```env
VITE_EMAILJS_PUBLIC_KEY=sua_chave_aqui
```

3. Salve o arquivo
4. ✅ Configurado!

## 🎉 **Testar**

1. Reinicie o servidor: `npm run dev`
2. Preencha o formulário
3. Clique em "Enviar"
4. ✅ Email enviado!

## 📧 **Exemplo de Configuração Completa**

```env
# Seus valores reais do EmailJS
VITE_EMAILJS_SERVICE_ID=service_abc123
VITE_EMAILJS_TEMPLATE_ID=template_contato
VITE_EMAILJS_PUBLIC_KEY=sua_chave_publica_aqui
VITE_EMAIL_DESTINO=geral@midiaperfil.com
```

## 🆘 **Problemas Comuns**

### "EmailJS não configurado"
- Verifique se colocou a chave pública correta
- Reinicie o servidor após alterar o .env.local

### "Email não chega"
- Verifique a pasta de spam
- Confirme se o serviço de email está ativo
- Teste com outro email

### "Erro de template"
- Verifique se o template_id está correto
- Confirme se salvou o template no EmailJS

## 💰 **Limites Gratuitos**

- **200 emails/mês** - Gratuito
- **Mais emails?** - Planos a partir de $15/mês

## 🔄 **Comparação: EmailJS vs Supabase**

| Aspecto | EmailJS | Supabase |
|---------|---------|----------|
| **Configuração** | 5 minutos | 15-30 minutos |
| **Complexidade** | Muito simples | Mais complexo |
| **Armazenamento** | Não salva dados | Salva no banco |
| **Emails** | Direto | Precisa Edge Function |
| **Gratuito** | 200 emails/mês | Limitado |

## 🎯 **Recomendação**

**Para começar rápido:** Use EmailJS!  
**Para projeto grande:** Considere Supabase depois

---

🚀 **Pronto em 5 minutos!** Muito mais simples que Supabase!