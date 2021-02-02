import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule } from '@angular/router';
import { OrdersModule } from '../orders/orders.module';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, NavComponent, HomeComponent],
  imports: [CommonModule, RouterModule, OrdersModule],
  exports: [HeaderComponent, FooterComponent, NavComponent, HomeComponent],
})
export class SharedModule {}
