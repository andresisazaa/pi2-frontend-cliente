import { Injectable } from '@angular/core';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { ProductService } from 'src/app/core/services/product/product.service';
import {
  fetchProducts,
  fetchProductsSuccess,
  fetchProductsFailed,
  fetchProduct,
  fetchProductSuccess,
  fetchProductFailed,
} from '../actions/products.actions';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { Product } from 'src/app/core/models/product.model';

@Injectable()
export class ProductsEffects {
  constructor(
    private actions$: Actions,
    private productService: ProductService
  ) {}

  fetchProducts$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchProducts),
      mergeMap(() => {
        return this.productService.getProducts().pipe(
          map((products: Product[]) => fetchProductsSuccess({ products })),
          catchError((error) =>
            of(
              fetchProductsFailed({
                errorMessage: 'No se pudo obtener el menu',
              })
            )
          )
        );
      })
    )
  );

  fetchProduct$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchProduct),
      mergeMap(({ productId }) => {
        return this.productService.getProductById(productId).pipe(
          map((product: Product) => fetchProductSuccess({ product })),
          catchError((error) =>
            of(
              fetchProductFailed({
                errorMessage: 'No se pudo obtener el produto',
              })
            )
          )
        );
      })
    )
  );
}
