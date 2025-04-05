export interface CategoryLink {
    id: string;
    name: string;
    status: string;
    //created_at?: Date;
    //updated_at?: Date;
  }
  
  export interface CreateCategoryLinkDTO {
    name: string;
    status: string;
  }
  
  export interface UpdateCategoryLinkDTO {
    name: string;
    status: string;
  }