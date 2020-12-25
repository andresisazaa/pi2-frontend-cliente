import { Injectable } from '@angular/core';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import {
  fetchRestaurants,
  fetchRestaurantsSuccess,
  fetchRestaurantsFailed,
  fetchRestaurant,
  fetchRestaurantSuccess,
  fetchRestaurantFailed,
} from '../actions/restaurants.actions';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { Restaurant } from 'src/app/core/models/restaurant.model';
import { RestaurantService } from 'src/app/core/services/restaurant/restaurant.service';

@Injectable()
export class RestaurantsEffects {
  constructor(
    private actions$: Actions,
    private restaurantService: RestaurantService
  ) {}

  fetchRestaurants$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchRestaurants),
      mergeMap(() => {
        return this.restaurantService.getRestaurants().pipe(
          map((restaurants: Restaurant[]) =>
            fetchRestaurantsSuccess({ restaurants })
          ),
          catchError((error) => of(fetchRestaurantsFailed({ errorMsg: error })))
        );
      })
    )
  );

  fetchRestaurant$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchRestaurant),
      mergeMap(({ restaurantId }) => {
        return this.restaurantService.getRestaurantById(restaurantId).pipe(
          map((restaurant: Restaurant) =>
            fetchRestaurantSuccess({ restaurant })
          ),
          catchError((error) => of(fetchRestaurantFailed({ errorMsg: error })))
        );
      })
    )
  );
}
