import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductsState } from '../states/products.state';

const selectFeature = createFeatureSelector<ProductsState>('productos');

export const productsSelect = createSelector(
  selectFeature,
  (state: ProductsState) => state.items
);