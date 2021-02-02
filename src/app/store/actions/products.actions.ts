import { createAction, props } from '@ngrx/store';
import { Product } from 'src/app/core/models/product.model';

export const fetchProducts = createAction('[PRODUCTOS] Obtener productos');

export const fetchProductsSuccess = createAction(
  '[PRODUCTOS] Obtener productos exitoso',
  props<{ products: Product[] }>()
);

export const fetchProductsFailed = createAction(
  '[PRODUCTOS] Obtener productos fallido',
  props<{ errorMessage: string }>()
);

export const fetchProduct = createAction(
  '[PRODUCTOS] Obtener producto',
  props<{ productId: number }>()
);

export const fetchProductSuccess = createAction(
  '[PRODUCTOS] Obtener producto exitoso',
  props<{ product: Product }>()
);

export const fetchProductFailed = createAction(
  '[PRODUCTOS] Obtener producto fallido',
  props<{ errorMessage: string }>()
);


export const serachProducts = createAction(
  '[PRODUCTOS] Buscar productos',
  props<{ query: string }>()
);


export const selectProduct = createAction(
  '[PRODUCTOS] Buscar productos',
  props<{ product: Product }>()
);
