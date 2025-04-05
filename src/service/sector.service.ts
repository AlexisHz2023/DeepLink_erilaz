import { supabase } from '@/lib/supabase/config'
import { CreateSectorDTO, UpdateSectorDTO } from '@/types'

const tableName = 'sector'

export const SectorService = {
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

  async create(sector: CreateSectorDTO) {
    const { data, error } = await supabase
      .from(tableName)
      .insert(sector)
      .select()
    
    if (error) throw error
    return data[0]
  },

  async update(id: string, sector: UpdateSectorDTO) {
    const { data, error } = await supabase
      .from(tableName)
      .update(sector)
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