export interface BusinessType {
    _id: string;
    name: string;
    address: string;
    category: string;
    description: string;
    longDescription: string;
    website: string;
    openingHours: {open: number, close: number};
    contactInfo: string;
    coordinates: {lat: number, lng: number};
    images: [string];
}