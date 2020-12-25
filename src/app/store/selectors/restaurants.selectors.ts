import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RestaurantsState } from '../states/restaurants.state';

const selectFeature = createFeatureSelector<RestaurantsState>('restaurantes');

export const restaurantsSelect = createSelector(
  selectFeature,
  (state: RestaurantsState) => state.restaurants
);

export const restaurantSelect = createSelector(
  selectFeature,
  (state: RestaurantsState) => state.restaurant
);

export const productsByRestaurantSelect = createSelector(
  selectFeature,
  (state: RestaurantsState) => state.restaurant.products
);
