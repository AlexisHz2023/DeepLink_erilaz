import { supabase } from '@/lib/supabase/config'
import { CreateCategoryLinkDTO, UpdateCategoryLinkDTO } from '@/types'

const tableName = 'category_link'

export const CategoryLinkService = {
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

  async create(createLink: CreateCategoryLinkDTO) {
    const { data, error } = await supabase
      .from(tableName)
      .insert(createLink)
      .select()
    
    if (error) throw error
    return data[0]
  },

  async update(id: string, createLink: UpdateCategoryLinkDTO) {
    const { data, error } = await supabase
      .from(tableName)
      .update(createLink)
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