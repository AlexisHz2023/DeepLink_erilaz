export interface DeepLinkDevice {
    id: string;
    id_link: string;
    device: string;
    url: string;
    //created_at?: Date;
    //updated_at?: Date;
  }
  
  export interface CreateDeepLinkDeviceDTO {
    id_link: string;
    device: string;
    url: string;
  }
  
  export interface UpdateDeepLinkDeviceDTO {
    device: string;
    url: string;
  }