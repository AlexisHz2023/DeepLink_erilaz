export interface ClickLink {
    id: string;
    id_link_device: string;
    browser: string;
    created_at?: Date;
    //updated_at?: Date;
  }
  
  export interface CreateClickLinkDTO {
    id_link_device: string;
    browser: string;
  }
  
  export interface UpdateClickLinkDTO {
    browser: string;
  }