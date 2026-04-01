export interface TourPackage {
  id: string;
  name: string;
  duration: string;
  difficulty: 'Easy' | 'Moderate' | 'Challenging' | 'Expert' | 'Tailored';
  price: string;
  description: string;
  includes: string[];
  includedGear: string[];
  optionalAddons: { name: string; price: number; priceType: 'flat' | 'daily' | 'nightly' }[];
  image: string;
  videoUrl?: string;
}

export interface RentalBike {
  id: string;
  model: string;
  type: string;
  pricePerDay: string;
  features: string[];
  image: string;
  specs?: string[];
}

export interface MarketingStrategy {
  channel: string;
  description: string;
  icon: string;
}

export interface Spot {
  id: string;
  name: string;
  description: string;
  history: string;
  image: string;
  location: string;
  region: 'North' | 'South';
  coords: { x: number; y: number }; // Percentage coordinates for SVG map
  basePrice: number;
}
