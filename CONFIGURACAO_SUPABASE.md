# Configuração do Supabase para Formulário de Contato

## 🚀 Visão Geral

O formulário de contato agora usa **Supabase** como backend, oferecendo:
- ✅ Armazenamento seguro no banco de dados
- ✅ Envio automático de emails via Edge Functions
- ✅ Dashboard para gerenciar contatos
- ✅ Escalabilidade e confiabilidade

## 📋 Passo a Passo

### 1. Criar Conta no Supabase

1. Acesse [https://supabase.com](https://supabase.com)
2. Clique em "Start your project"
3. Faça login com GitHub, Google ou email
4. Crie um novo projeto:
   - **Nome**: `midiaperfil-contatos`
   - **Senha do DB**: Crie uma senha forte
   - **Região**: South America (São Paulo)

### 2. Configurar Banco de Dados

1. No painel do Supabase, vá em **SQL Editor**
2. Copie e execute o script `supabase-setup.sql`:

```sql
-- O arquivo supabase-setup.sql contém todo o código necessário
-- Execute-o no SQL Editor do Supabase
```

### 3. Configurar Variáveis de Ambiente

1. No Supabase, vá em **Settings > API**
2. Copie:
   - **Project URL**
   - **anon/public key**

3. Atualize o arquivo `.env.local`:

```env
# Supabase Configuration
VITE_SUPABASE_URL=https://seu-projeto.supabase.co
VITE_SUPABASE_ANON_KEY=sua-chave-anon-aqui
```

### 4. Configurar Edge Function (Opcional - Para Emails)

#### 4.1 Instalar Supabase CLI

```bash
# Windows (PowerShell)
npm install -g supabase

# Verificar instalação
supabase --version
```

#### 4.2 Fazer Login e Deploy

```bash
# Login no Supabase
supabase login

# Inicializar projeto
supabase init

# Deploy da função
supabase functions deploy send-email
```

#### 4.3 Configurar Resend (Para Emails)

1. Crie conta no [Resend](https://resend.com)
2. Gere uma API Key
3. No Supabase, vá em **Settings > Edge Functions**
4. Adicione a variável de ambiente:
   - **Nome**: `RESEND_API_KEY`
   - **Valor**: Sua chave do Resend

#### 4.4 Configurar Trigger (Automático)

No SQL Editor, execute:

```sql
-- Trigger para enviar email automaticamente
CREATE OR REPLACE FUNCTION notify_new_contact()
RETURNS TRIGGER AS $$
BEGIN
  PERFORM
    net.http_post(
      url := 'https://seu-projeto.supabase.co/functions/v1/send-email',
      headers := '{"Content-Type": "application/json", "Authorization": "Bearer ' || 'SUA_SERVICE_ROLE_KEY' || '"}',
      body := json_build_object('record', row_to_json(NEW))::text
    );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER on_contact_created
  AFTER INSERT ON contacts
  FOR EACH ROW
  EXECUTE FUNCTION notify_new_contact();
```

### 5. Testar a Configuração

1. Reinicie o servidor: `npm run dev`
2. Acesse: `http://localhost:5173`
3. Preencha e envie o formulário
4. Verifique no Supabase:
   - **Table Editor > contacts**: Dados salvos
   - **Logs**: Sem erros

## 🎯 Funcionalidades Ativas

### ✅ **Funcionando Agora:**
- Salvamento seguro no banco de dados
- Validação de todos os campos
- Feedback visual de sucesso/erro
- Interface responsiva e moderna

### 🚀 **Após Configuração Completa:**
- Envio automático de emails
- Dashboard para gerenciar contatos
- Notificações em tempo real
- Backup automático dos dados

## 🔧 Solução de Problemas

### Erro de Conexão
```
Error: Invalid API key
```
**Solução**: Verifique se as variáveis `VITE_SUPABASE_URL` e `VITE_SUPABASE_ANON_KEY` estão corretas.

### Erro de Permissão
```
Error: Row Level Security policy violation
```
**Solução**: Execute o script SQL completo para configurar as políticas RLS.

### Emails Não Enviados
1. Verifique se a Edge Function foi deployada
2. Confirme a configuração do Resend
3. Verifique os logs no Supabase

## 📊 Dashboard (Futuro)

Após a configuração, você poderá:
- Ver todos os contatos em tempo real
- Filtrar por data, email, etc.
- Exportar dados para Excel/CSV
- Configurar notificações automáticas

## 🆚 Vantagens vs EmailJS

| Recurso | EmailJS | Supabase |
|---------|---------|----------|
| Armazenamento | ❌ | ✅ |
| Confiabilidade | ⚠️ | ✅ |
| Escalabilidade | ❌ | ✅ |
| Dashboard | ❌ | ✅ |
| Custo | Pago | Gratuito* |
| Segurança | ⚠️ | ✅ |

*Gratuito até 50k requisições/mês

## 📞 Suporte

Se precisar de ajuda:
1. Consulte a [documentação oficial](https://supabase.com/docs)
2. Verifique os logs no console do navegador
3. Entre em contato com nossa equipe técnica

---

**🎉 Parabéns!** Seu formulário agora usa uma solução profissional e escalável!