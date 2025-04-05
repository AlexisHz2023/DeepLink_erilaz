import { supabase } from '@/lib/supabase/config'
import { CreateUserDTO, UpdateUserDTO } from '@/types'

const tableName = 'user'

export const UserService = {
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

  async create(user: CreateUserDTO) {
    const { data, error } = await supabase
      .from(tableName)
      .insert(user)
      .select()
    
    if (error) throw error
    return data[0]
  },

  async update(id: string, user: UpdateUserDTO) {
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