export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  price: string;
  image: string;
}

export interface TrustedBrand {
  id: string;
  name: string;
  logo: string; // URL placeholder
}

export enum SidebarType {
  LEFT = 'LEFT',
  RIGHT = 'RIGHT',
  NONE = 'NONE'
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}