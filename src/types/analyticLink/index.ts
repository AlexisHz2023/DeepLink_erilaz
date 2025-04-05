export interface AnalyticLink {
    id: string;
    id_link: string;
    utm_source: string;
    utm_medium: string;
    utm_campaign: string;
    utm_term: string;
    utm_content: string;
    img_promo: string;
    //created_at?: Date;
    //updated_at?: Date;
  }
  
  export interface CreateAnalyticLinkDTO {
    id_link: string;
    utm_source: string;
    utm_medium: string;
    utm_campaign: string;
    utm_term: string;
    utm_content: string;
    img_promo: string;
  }
  
  export interface UpdateAnalyticLinkDTO {id_category: string;
    utm_source: string;
    utm_medium: string;
    utm_campaign: string;
    utm_term: string;
    utm_content: string;
    img_promo: string;
  }