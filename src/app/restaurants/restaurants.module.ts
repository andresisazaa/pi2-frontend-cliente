import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantsRoutingModule } from './restaurants.routes';

import { RestaurantComponent } from './restaurant/restaurant.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantsListComponent } from './restaurants-list/restaurants-list.component';
import { RestaurantListItemComponent } from './restaurant-list-item/restaurant-list-item.component';
import { RestaurantsSearcherComponent } from './restaurants-searcher/restaurants-searcher.component';

@NgModule({
  declarations: [
    RestaurantComponent,
    RestaurantsComponent,
    RestaurantsListComponent,
    RestaurantListItemComponent,
    RestaurantsSearcherComponent,
  ],
  imports: [CommonModule, RestaurantsRoutingModule],
})
export class RestaurantsModule {}
