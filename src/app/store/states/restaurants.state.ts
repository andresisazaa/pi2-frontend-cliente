import { Restaurant } from 'src/app/core/models/restaurant.model';

export interface RestaurantsState {
  restaurants: Restaurant[];
  restaurant: Restaurant;
  restaurantsSearh: Restaurant[];
}

export const restaurantsInitialState: RestaurantsState = {
  restaurants: [],
  restaurant: null,
  restaurantsSearh: [],
};
