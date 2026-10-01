export type NavPage = 'home' | 'clothing-drive' | 'host-bin' | 'about' | 'contact';

export interface ClothingDriveForm {
  organizationName: string;
  organizationType: 'school' | 'church' | 'scout' | 'nonprofit' | 'sports_club' | 'other';
  coordinatorName: string;
  email: string;
  phone: string;
  locationCity: string;
  locationState: string;
  targetDate: string;
  estimatedBags: string;
  notes?: string;
}

export interface BinPlacementForm {
  propertyName: string;
  propertyType: 'shopping_center' | 'retail_plaza' | 'gas_station' | 'residential_complex' | 'school' | 'other';
  contactPerson: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  parkingSpacesCount?: string;
  preferredBinCount: string;
  comments?: string;
}

export interface ContactForm {
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export interface AcceptedItem {
  id: string;
  category: 'clothing' | 'footwear' | 'accessories' | 'linens' | 'not_accepted';
  title: string;
  description: string;
  accepted: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'clothing_drives' | 'bin_hosting';
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  location: string;
  type: 'school' | 'property' | 'partner';
}
