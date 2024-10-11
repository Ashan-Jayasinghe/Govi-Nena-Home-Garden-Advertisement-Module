export interface Advertisement {
    id: number; // Optional ID field
    //userName: string; // Optional user name
    category:string;
    subcategory:string;    
    title: string;
    description?: string;
    stock?: number | null;
    address?: string;
    mobile: string;
    //acceptTerms: boolean;
  }
  