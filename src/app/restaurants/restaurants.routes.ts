import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantComponent } from './restaurant/restaurant.component';

const routes: Routes = [
  {
    path: '',
    component: RestaurantsComponent,
  },
  {
    path: ':id',
    component: RestaurantComponent,
    loadChildren: () =>
      import('../products/products.module').then((m) => m.ProductsModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestaurantsRoutingModule {}
