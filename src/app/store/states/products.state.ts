import { Product } from 'src/app/core/models/product.model';

export interface ProductsState {
  products: Product[];
  product: Product;
  error: string;
}

export const productsInitialState: ProductsState = {
  products: [],
  product: null,
  error: null,
};
