import { createReducer, on, Action } from '@ngrx/store';
import {
  fetchProductsSuccess,
  fetchProductsFailed,
  fetchProductSuccess,
  fetchProductFailed,
  serachProducts,
  selectProduct,
} from '../actions/products.actions';
import { productsInitialState, ProductsState } from '../states/products.state';

const reducer = createReducer(
  productsInitialState,
  on(fetchProductsSuccess, (state, { products }) => ({
    ...state,
    items: products,
  })),
  on(fetchProductsFailed, (state, { errorMessage }) => ({
    ...state,
    error: errorMessage,
  })),
  on(fetchProductSuccess, (state, { product }) => ({
    ...state,
    product: product,
  })),
  on(fetchProductFailed, (state, { errorMessage }) => ({
    ...state,
    error: errorMessage,
  })),
  on(serachProducts, (state, { query }) => {
    return {
      ...state,
    };
  }),
  on(selectProduct, (state, { product }) => {
    return {
      ...state,
      product: product,
    };
  })
);

export function productsReducer(state: ProductsState, action: Action) {
  return reducer(state, action);
}
