import { createReducer, on, Action } from '@ngrx/store';
import {
  fetchRestaurantsSuccess,
  fetchRestaurantsFailed,
  fetchRestaurantSuccess,
  fetchRestaurantFailed,
} from '../actions/restaurants.actions';
import {
  restaurantsInitialState,
  RestaurantsState,
} from '../states/restaurants.state';

const reducer = createReducer(
  restaurantsInitialState,
  on(fetchRestaurantsSuccess, (state, { restaurants }) => ({
    ...state,
    restaurants: restaurants,
  })),
  on(fetchRestaurantsFailed, (state, { errorMsg }) => ({
    ...state,
    error: errorMsg,
  })),
  on(fetchRestaurantSuccess, (state, { restaurant }) => ({
    ...state,
    restaurant: restaurant,
  })),
  on(fetchRestaurantFailed, (state, { errorMsg }) => ({
    ...state,
    error: errorMsg,
  }))
);

export function restaurantsReducer(state: RestaurantsState, action: Action) {
  return reducer(state, action);
}
