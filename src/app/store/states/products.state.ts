import { Product } from 'src/app/core/models/product.model';

export interface ProductsState {
  items: Product[];
  error: string;
}

export const productsInitialState: ProductsState = {
  items: [],
  error: null,
};
