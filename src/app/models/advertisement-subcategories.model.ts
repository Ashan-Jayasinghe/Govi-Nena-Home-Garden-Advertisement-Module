import { Advertisement } from './advertisement.model';

export interface Pesticides extends Advertisement {
  applicationRatio: number | null;
  price1L: number | null;
  price5L: number | null;
  price10L: number | null;
}

export interface PlantGrowthRegulators extends Advertisement {
  applicationRatio: number | null;
  price1L: number | null;
  price5L: number | null;
  price10L: number | null;
}

export interface InorganicFertilizer extends Advertisement {
  npkRatio: string | null;
  method: string;
  price1L: number | null;
  price5L: number | null;
  price10L: number | null;
}

export interface OrganicFertilizer extends Advertisement {
  npk: string | null;
  method: string;
  price1L: number | null;
  price5L: number | null;
  price10L: number | null;
}

export interface HarvestingMachines extends Advertisement {
  condition: string;
  rentorsell: string;
  manufacturer: string;
  price: number | null;
}

export interface Dryers extends Advertisement {
  condition: string;
  rentorsell: string;
  manufacturer: string;
  price: number | null;
}

export interface IrrigationSystems extends Advertisement {
  condition: string;
  rentorsell: string;
  manufacturer: string;
  price: number | null;
}

export interface Others extends Advertisement {
  condition: string;
  rentorsell: string;
  manufacturer: string;
  price: number | null;
}

export interface PlantingMachines extends Advertisement {
  condition: string;
  rentorsell: string;
  manufacturer: string;
  price: number | null;
}

export interface Sprayers extends Advertisement {
  condition: string;
  rentorsell: string;
  manufacturer: string;
  price: number | null;
}

export interface Tillages extends Advertisement {
  condition: string;
  rentorsell: string;
  manufacturer: string;
  price: number | null;
}

export interface Tractors extends Advertisement {
  condition: string;
  rentorsell: string;
  manufacturer: string;
  power: number | null;
  price: number | null;
}

export interface Seedlings extends Advertisement {
  variety: string;
  age: number | null;
  size: number | null;
  price: number | null;
}

export interface Seeds extends Advertisement {
  variety: string;
  price1kg: number | null;
  price5kg: number | null;
  price10kg: number | null;
}

export interface Tubers extends Advertisement {
  variety: string;
  price1kg: number | null;
  price5kg: number | null;
  price10kg: number | null;
}
