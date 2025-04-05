import { supabase } from '@/lib/supabase/config'
import { CreateRolDTO, UpdateRolDTO } from '@/types'
//import {  } from '@/types'

const tableName = 'rol'

export const RolService = {
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

  async create(rol: CreateRolDTO) {
    const { data, error } = await supabase
      .from(tableName)
      .insert(rol)
      .select()
    
    if (error) throw error
    return data[0]
  },

  async update(id: string, rol: UpdateRolDTO) {
    const { data, error } = await supabase
      .from(tableName)
      .update(rol)
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