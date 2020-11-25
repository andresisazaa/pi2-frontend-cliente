import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductListItemComponent } from './product-list-item/product-list-item.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductsComponent } from './products/products.component';
import { ProductsRoutingModule } from './products.routes';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductSearcherComponent } from './product-searcher/product-searcher.component';
import { OrdersModule } from '../orders/orders.module';

@NgModule({
  declarations: [
    ProductListItemComponent,
    ProductListComponent,
    ProductDetailComponent,
    ProductsComponent,
    ProductSearcherComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    ReactiveFormsModule,
    OrdersModule,
  ],
})
export class ProductsModule {}
