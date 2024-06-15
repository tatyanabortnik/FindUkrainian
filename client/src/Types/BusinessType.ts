export interface BusinessType {
  _id: string;
  name: string;
  address: string;
  category: string;
  description: string;
  longDescription: string;
  website: string;
  openingHours: {
    [key: string]: OpenCloseHours;
  };
  contactInfo: string;
  coordinates: { lat: number; lng: number };
  images: [string];
}

interface OpenCloseHours {
  [key: string]: number;
}
