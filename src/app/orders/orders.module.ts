import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './orders/orders.component';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderListItemComponent } from './order-list-item/order-list-item.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { OrdersRoutingModule } from './orders.routes';
import { CurrentOrderComponent } from './current-order/current-order.component';
import { OrderStatusComponent } from './order-status/order-status.component';

@NgModule({
  declarations: [
    OrdersComponent,
    OrderListComponent,
    OrderListItemComponent,
    OrderDetailComponent,
    CurrentOrderComponent,
    OrderStatusComponent,
  ],
  imports: [CommonModule, OrdersRoutingModule],
  exports: [CurrentOrderComponent, OrderStatusComponent],
})
export class OrdersModule {}
