# 📧 Configuração da Edge Function para Emails Automáticos

Este guia mostra como configurar o envio automático de emails quando alguém preenche o formulário.

## 🎯 Visão Geral

A Edge Function será executada automaticamente sempre que um novo contato for salvo no banco de dados, enviando um email de confirmação.

## 📋 Pré-requisitos

- Projeto Supabase configurado
- Conta no Resend (para envio de emails)
- Supabase CLI instalado (opcional, mas recomendado)

## 🚀 Passo a Passo

### 1️⃣ **Configurar Conta no Resend**

1. Acesse [https://resend.com](https://resend.com)
2. Crie uma conta gratuita
3. Vá para **API Keys**
4. Clique em **"Create API Key"**
5. Nome: `midiaperfil-emails`
6. 📋 Copie a chave gerada (começa com `re_`)

### 2️⃣ **Configurar Domínio (Opcional)**

Para emails profissionais:
1. No Resend, vá para **Domains**
2. Adicione seu domínio (ex: `midiaperfil.com`)
3. Configure os registros DNS conforme instruído
4. Aguarde verificação

### 3️⃣ **Criar Edge Function no Supabase**

#### Opção A: Via Dashboard (Mais Fácil)

1. No Supabase, vá para **Edge Functions**
2. Clique em **"Create a new function"**
3. Nome: `send-email`
4. Cole o código do arquivo `supabase/functions/send-email/index.ts`
5. Clique em **"Create function"**

#### Opção B: Via CLI (Mais Avançado)

```bash
# Instalar Supabase CLI
npm install -g supabase

# Login no Supabase
supabase login

# Fazer deploy da função
supabase functions deploy send-email --project-ref SEU_PROJECT_REF
```

### 4️⃣ **Configurar Variáveis de Ambiente**

1. No Supabase, vá para **Settings** > **Edge Functions**
2. Adicione as seguintes variáveis:

```
RESEND_API_KEY=re_sua_chave_aqui
FROM_EMAIL=noreply@seudominio.com
TO_EMAIL=geral@midiaperfil.com
```

### 5️⃣ **Criar Trigger no Banco de Dados**

Execute este SQL no **SQL Editor**:

```sql
-- Criar trigger para enviar email automaticamente
CREATE OR REPLACE FUNCTION trigger_send_email()
RETURNS TRIGGER AS $$
BEGIN
  -- Chamar a Edge Function
  PERFORM
    net.http_post(
      url := 'https://SEU_PROJECT.supabase.co/functions/v1/send-email',
      headers := jsonb_build_object(
        'Content-Type', 'application/json',
        'Authorization', 'Bearer ' || 'SUA_SERVICE_ROLE_KEY'
      ),
      body := jsonb_build_object(
        'nome_completo', NEW.nome_completo,
        'email_profissional', NEW.email_profissional,
        'telefone', NEW.telefone,
        'faturamento_mensal', NEW.faturamento_mensal,
        'implementar_ia', NEW.implementar_ia,
        'sistema_interno', NEW.sistema_interno,
        'numero_clientes', NEW.numero_clientes,
        'mensagem_adicional', NEW.mensagem_adicional
      )
    );
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Associar trigger à tabela
CREATE TRIGGER on_contact_created
  AFTER INSERT ON contacts
  FOR EACH ROW
  EXECUTE FUNCTION trigger_send_email();
```

### 6️⃣ **Testar a Configuração**

1. Preencha o formulário no site
2. Verifique se o email foi enviado
3. Confira os logs da Edge Function no Supabase

## 📧 Personalizar Template de Email

O template atual inclui:
- ✅ Dados do contato
- ✅ Design responsivo
- ✅ Informações da empresa

Para personalizar, edite o arquivo `supabase/functions/send-email/index.ts`.

## 🔧 Configurações Avançadas

### Múltiplos Destinatários

```typescript
const emailData = {
  to: ['geral@midiaperfil.com', 'vendas@midiaperfil.com'],
  // ... resto da configuração
}
```

### Email de Confirmação para o Cliente

Adicione um segundo envio de email:

```typescript
// Email para o cliente
await resend.emails.send({
  from: 'noreply@midiaperfil.com',
  to: data.email_profissional,
  subject: 'Obrigado pelo seu contato - Mídia Perfil',
  html: templateConfirmacao
})
```

## 🆘 Problemas Comuns

### Edge Function não executa
- Verifique se o trigger foi criado corretamente
- Confirme as variáveis de ambiente
- Verifique os logs da função

### Emails não chegam
- Confirme a chave do Resend
- Verifique se o domínio está verificado
- Confira a pasta de spam

### Erro de permissão
- Use a Service Role Key (não a anon key)
- Verifique as políticas RLS

## 💰 Custos

- **Resend**: 3.000 emails/mês gratuitos
- **Supabase**: Edge Functions incluídas no plano gratuito
- **Total**: Gratuito para a maioria dos casos

---

🎉 **Pronto!** Agora você tem emails automáticos configurados!