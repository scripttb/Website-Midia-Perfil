# 🚀 Guia Completo de Configuração do Supabase

Este guia irá te ajudar a configurar completamente o Supabase para o seu formulário de contato.

## 📋 Pré-requisitos

- Conta no Supabase (gratuita)
- Acesso ao projeto web
- 10-15 minutos para configuração

## 🎯 Passo a Passo Completo

### 1️⃣ **Criar Conta e Projeto no Supabase**

1. Acesse [https://supabase.com](https://supabase.com)
2. Clique em **"Start your project"**
3. Faça login com GitHub, Google ou email
4. Clique em **"New Project"**
5. Escolha sua organização
6. Preencha:
   - **Name**: `midiaperfil-contatos` (ou nome de sua preferência)
   - **Database Password**: Crie uma senha forte (anote!)
   - **Region**: `South America (São Paulo)` (mais próximo do Brasil)
7. Clique em **"Create new project"**
8. ⏳ Aguarde 2-3 minutos para o projeto ser criado

### 2️⃣ **Executar o Script SQL**

1. No painel do Supabase, vá para **SQL Editor** (ícone de código no menu lateral)
2. Clique em **"New query"**
3. Copie todo o conteúdo do arquivo `supabase-setup.sql`
4. Cole no editor SQL
5. Clique em **"Run"** (ou pressione Ctrl+Enter)
6. ✅ Você deve ver a mensagem "Success. No rows returned"

### 3️⃣ **Obter as Credenciais**

1. Vá para **Settings** > **API** (ícone de engrenagem no menu lateral)
2. Na seção **Project API keys**, você verá:
   - **Project URL**: `https://xyzcompany.supabase.co`
   - **anon/public key**: `eyJhbGciOiJIUzI1NiIs...` (chave longa)
3. 📋 Copie esses dois valores

### 4️⃣ **Configurar Variáveis de Ambiente**

1. Abra o arquivo `.env.local` no seu projeto
2. Substitua os valores de exemplo:

```env
# Substitua pelos seus valores reais
VITE_SUPABASE_URL=https://SEU_PROJETO.supabase.co
VITE_SUPABASE_ANON_KEY=sua_chave_anon_aqui
```

3. Salve o arquivo

### 5️⃣ **Reiniciar o Servidor**

1. No terminal, pare o servidor (Ctrl+C)
2. Execute novamente: `npm run dev`
3. Acesse: http://localhost:5173

### 6️⃣ **Testar o Formulário**

1. Preencha o formulário de contato
2. Clique em "Enviar Mensagem"
3. ✅ Deve aparecer mensagem de sucesso
4. No Supabase, vá para **Table Editor** > **contacts**
5. 🎉 Você deve ver o registro salvo!

## 🔧 Configuração Avançada (Opcional)

### Edge Function para Emails Automáticos

Se quiser envio automático de emails:

1. No Supabase, vá para **Edge Functions**
2. Crie uma nova função chamada `send-email`
3. Use o código do arquivo `supabase/functions/send-email/index.ts`
4. Configure a API do Resend para envio de emails

## ✅ Verificação Final

Após a configuração, você deve ter:

- ✅ Projeto criado no Supabase
- ✅ Tabela `contacts` criada
- ✅ Variáveis de ambiente configuradas
- ✅ Formulário funcionando
- ✅ Dados sendo salvos no banco

## 🆘 Problemas Comuns

### "Invalid supabaseUrl"
- Verifique se a URL está correta no `.env.local`
- Certifique-se de que não há espaços extras

### "Failed to fetch"
- Verifique sua conexão com internet
- Confirme se o projeto Supabase está ativo

### Dados não aparecem na tabela
- Verifique se executou o script SQL corretamente
- Confirme se a chave anon está correta

## 📞 Suporte

Se precisar de ajuda:
1. Verifique o console do navegador (F12)
2. Consulte a documentação do Supabase
3. Entre em contato com o suporte técnico

---

🎉 **Parabéns!** Seu formulário agora está integrado com Supabase!