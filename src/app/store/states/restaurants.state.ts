import { Restaurant } from 'src/app/core/models/restaurant.model';

export interface RestaurantsState {
  restaurants: Restaurant[];
  restaurant: Restaurant;
}

export const restaurantsInitialState: RestaurantsState = {
  restaurants: [],
  restaurant: null,
};
