import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { MenuListComponent } from './menu-list/menu-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';



@NgModule({
  declarations: [MenuItemComponent, MenuListComponent, ProductDetailComponent],
  imports: [
    CommonModule
  ]
})
export class MenuModule { }
