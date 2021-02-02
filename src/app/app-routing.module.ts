import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './shared/components/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'restaurantes',
        loadChildren: () =>
          import('./restaurants/restaurants.module').then((m) => m.RestaurantsModule),
      },
      {
        path: 'pedidos',
        loadChildren: () =>
          import('./orders/orders.module').then((m) => m.OrdersModule),
      },
      {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'restaurantes',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
