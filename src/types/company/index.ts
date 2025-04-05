export interface Company {
    id: string;
    name: string;
    nif: string;
    email: string;
    number: string;
    complement: string;
    id_sector: string;
    id_city: string;
    id_country: string;
    address: string;
    additional_info: string;
    web_site: string;
    size: string;
    lenguage: string;
    currency: string;
    icon: string;
    created_at?: Date;
    //updated_at?: Date;
  }
  
  export interface CreateCompanyDTO {
    name: string;
    nit: string;
    email: string;
    number: string;
    complement: string;
    id_sector: string;
    id_city: string;
    id_country: string;
    addres: string;
    additional_info: string;
    web_site: string;
    size: string;
    lenguage: string;
    currency: string;
  }
  
  export interface UpdateCompanyDTO {
    name: string;
    nif: string;
    email: string;
    number: string;
    complement: string;
    id_sector: string;
    id_city: string;
    id_country: string;
    address: string;
    additional_info: string;
    web_site: string;
    size: string;
    lenguage: string;
    currency: string;
  }