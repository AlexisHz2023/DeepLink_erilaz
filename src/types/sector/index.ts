export interface Sector {
    id: string;
    name: string;
    category: string;
    //created_at?: Date;
    //updated_at?: Date;
  }
  
  export interface CreateSectorDTO {
    name: string;
    category: string;
  }
  
  export interface UpdateSectorDTO {
    name: string;
    category: string;
  }