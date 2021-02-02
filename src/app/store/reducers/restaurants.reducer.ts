import { createReducer, on, Action } from '@ngrx/store';
import {
  fetchRestaurantsSuccess,
  fetchRestaurantsFailed,
  fetchRestaurantSuccess,
  fetchRestaurantFailed,
  searchRestaurant,
  searchProductByRestaurant,
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
  })),
  on(searchRestaurant, (state, { query }) => {
    const restaurantsSearch = [];
    const allRestaurants = state.restaurants.map((restaurant) => ({
      ...restaurant,
      name: restaurant.name.toLowerCase(),
    }));
    for (const [index, restaurant] of allRestaurants.entries()) {
      let restauranteName = restaurant.name;
      if (restauranteName.indexOf(query) !== -1) {
        restaurantsSearch.push(state.restaurants[index]);
      }
    }
    return {
      ...state,
      restaurantsSearh: restaurantsSearch,
    };
  }),
  on(searchProductByRestaurant, (state, { query }) => {
    const productsSearch = [];
    const allProducts = state.restaurant.products.map((product) => ({
      ...product,
      name: product.name.toLowerCase(),
    }));
    for (const [index, product] of allProducts.entries()) {
      let productName = product.name;
      if (productName.indexOf(query) !== -1) {
        productsSearch.push(state.restaurant.products[index]);
      }
    }
    return {
      ...state,
      restaurantsSearh: productsSearch,
    };
  })
);

export function restaurantsReducer(state: RestaurantsState, action: Action) {
  return reducer(state, action);
}
