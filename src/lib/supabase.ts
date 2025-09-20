import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://placeholder.supabase.co'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBsYWNlaG9sZGVyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDUxOTI3MjAsImV4cCI6MTk2MDc2ODcyMH0.placeholder'

// Verificar se o Supabase está configurado
const isSupabaseConfigured = 
  supabaseUrl !== 'https://placeholder.supabase.co' && 
  supabaseUrl !== 'YOUR_SUPABASE_URL' &&
  supabaseAnonKey !== 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBsYWNlaG9sZGVyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDUxOTI3MjAsImV4cCI6MTk2MDc2ODcyMH0.placeholder' && 
  supabaseAnonKey !== 'YOUR_SUPABASE_ANON_KEY'

// Só criar o cliente se estiver configurado
export const supabase = isSupabaseConfigured 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null

// Tipos para o formulário de contato
export interface ContactFormData {
  id?: string
  nome_completo: string
  email_profissional: string
  telefone?: string
  faturamento_mensal?: string
  implementar_ia?: string
  sistema_interno?: string
  numero_clientes?: string
  mensagem_adicional?: string
  created_at?: string
}

// Função para salvar dados do formulário
export async function saveContactForm(data: ContactFormData) {
  // Verificar se o Supabase está configurado
  if (!isSupabaseConfigured || !supabase) {
    console.warn('⚠️ Supabase não configurado. Simulando salvamento dos dados...')
    
    // Simular delay de rede
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Log dos dados para demonstração
    console.log('📝 Dados do formulário (modo simulação):', data)
    
    // Retornar dados simulados
    return {
      id: Math.random().toString(36).substr(2, 9),
      created_at: new Date().toISOString(),
      ...data
    }
  }

  const { data: result, error } = await supabase
    .from('contacts')
    .insert([{
      nome_completo: data.nome_completo,
      email_profissional: data.email_profissional,
      telefone: data.telefone,
      faturamento_mensal: data.faturamento_mensal,
      implementar_ia: data.implementar_ia,
      sistema_interno: data.sistema_interno,
      numero_clientes: data.numero_clientes,
      mensagem_adicional: data.mensagem_adicional
    }])
    .select()

  if (error) {
    throw error
  }

  return result[0]
}

// Função para buscar todos os contatos (para dashboard futuro)
export async function getContacts() {
  try {
    if (!supabase) {
      throw new Error('Supabase não está configurado')
    }
    
    const { data, error } = await supabase
      .from('contacts')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Erro ao buscar contatos:', error)
      throw error
    }

    return data
  } catch (error) {
    console.error('Erro na função getContacts:', error)
    throw error
  }
}