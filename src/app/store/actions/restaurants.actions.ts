import { createAction, props } from '@ngrx/store';
import { Restaurant } from 'src/app/core/models/restaurant.model';

export const fetchRestaurants = createAction(
  '[RESTAURANTES] Obtener restaurantes'
);

export const fetchRestaurantsSuccess = createAction(
  '[RESTAURANTES] Obtener restaurantes exitoso',
  props<{ restaurants: Restaurant[] }>()
);

export const fetchRestaurantsFailed = createAction(
  '[RESTAURANTES] Obtener restaurantes fallido',
  props<{ errorMsg: string }>()
);

export const fetchRestaurant = createAction(
  '[RESTAURANTES] Obtener restaurante',
  props<{ restaurantId: number }>()
);

export const fetchRestaurantSuccess = createAction(
  '[RESTAURANTES] Obtener restaurante exitoso',
  props<{ restaurant: Restaurant }>()
);

export const fetchRestaurantFailed = createAction(
  '[RESTAURANTES] Obtener restaurante fallido',
  props<{ errorMsg: string }>()
);
