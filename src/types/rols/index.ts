export interface Rols {
    id: string;
    name: string;
    level: string;
    //created_at?: Date;
    //updated_at?: Date;
  }
  
  export interface CreateRolDTO {
    name: string;
    level: string;
  }
  
  export interface UpdateRolDTO {
    name: string;
    level: string;
  }
  