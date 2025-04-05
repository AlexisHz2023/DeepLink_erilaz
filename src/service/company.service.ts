import { supabase } from '@/lib/supabase/config'
import { CreateCompanyDTO, UpdateCompanyDTO } from '@/types'

const tableName = 'company'

export const CompanyService = {
  async getAll() {
    const { data, error } = await supabase
      .from(tableName)
      .select('*')
      //.order('created_at', { ascending: false })
      .order('name', { ascending: false })
    
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

  async create(company: CreateCompanyDTO) {
    const { data, error } = await supabase
      .from(tableName)
      .insert(company)
      .select()
    
    if (error) throw error
    return data[0]
  },

  async update(id: string, company: UpdateCompanyDTO) {
    const { data, error } = await supabase
      .from(tableName)
      .update(company)
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