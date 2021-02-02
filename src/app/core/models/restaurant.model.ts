import { Product } from './product.model';

export interface Restaurant {
  id?: number;
  name: string;
  image?: string;
  categories: string[];
  products?: Product[];
}
