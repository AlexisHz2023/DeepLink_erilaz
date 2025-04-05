export interface DeepLink {
    id: string;
    id_company: string;
    id_user: string;
    id_category: string;
    title: string;
    content: string;
    img_promo: string;
    expiration_at: Date;
    created_at?: Date;
    updated_at?: Date;
  }
  
  export interface CreateDeepLinkDTO {
    id_company: string;
    id_user: string;
    id_category: string;
    title: string;
    content: string;
    img_promo: string;
    expiration_at: Date;
  }
  
  export interface UpdateDeepLinkDTO {id_category: string;
    title: string;
    content: string;
    img_promo: string;
    expiration_at: Date;
  }