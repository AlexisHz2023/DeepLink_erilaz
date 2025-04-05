import { supabase } from '@/lib/supabase/config'
import { CreateAnalyticLinkDTO, UpdateAnalyticLinkDTO } from '@/types'

const tableName = 'analytic_link'

export const AnalyticLinkService = {
  async getAll() {
    const { data, error } = await supabase
      .from(tableName)
      .select('*')
      //.order('created_at', { ascending: false })
      .order('id_link', { ascending: false })
    
    if (error) throw error
    return data
  },

  async getById(id: string) {
    const { data, error } = await supabase
      .from(tableName)
      .select('*')
      .eq('id', id)
      .single()
    
    if (error) throw error
    return data
  },

  async create(user: CreateAnalyticLinkDTO) {
    const { data, error } = await supabase
      .from(tableName)
      .insert(user)
      .select()
    
    if (error) throw error
    return data[0]
  },

  async update(id: string, user: UpdateAnalyticLinkDTO) {
    const { data, error } = await supabase
      .from(tableName)
      .update(user)
      .eq('id', id)
      .select()
    
    if (error) throw error
    return data[0]
  },

  async delete(id: string) {
    const { error } = await supabase
      .from(tableName)
      .delete()
      .eq('id', id)
    
    if (error) throw error
    return true
  }
}