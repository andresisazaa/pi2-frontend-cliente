import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'restaurantes',
    loadChildren: () =>
      import('./restaurants/restaurants.module')
      .then((m) => m.RestaurantsModule)
  },
  {
    path: 'ordenes',
    loadChildren: () =>
      import('./orders/orders.module')
      .then((m) => m.OrdersModule)
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'restaurantes'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
