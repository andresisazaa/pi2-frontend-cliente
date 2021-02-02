import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './orders/orders.component';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { CurrentOrderComponent } from './current-order/current-order.component';

const routes: Routes = [
  {
    path: '',
    component: OrdersComponent,
    children: [
      { path: '', component: OrderListComponent },
      { path: 'mi-pedido', component: CurrentOrderComponent },
      { path: ':id', component: OrderDetailComponent },
    ],
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrdersRoutingModule {}
