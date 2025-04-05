export interface User {
    id: string;
    id_company: string;
    id_rol: string;
    status: string;
    name: string;
    last_name: string;
    email: string;
    created_at?: Date;
    //updated_at?: Date;
  }
  
  export interface CreateUserDTO {
    id_company: string;
    id_rol: string;
    status: string;
    name: string;
    last_name: string;
    email: string;
  }
  
  export interface UpdateUserDTO {
    id_company: string;
    id_rol: string;
    status: string;
    name: string;
    last_name: string;
    email: string;
  }