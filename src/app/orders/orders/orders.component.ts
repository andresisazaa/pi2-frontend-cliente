import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { fetchOrders } from 'src/app/store/actions/orders.actions';
import { State } from 'src/app/store/states/app.state';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  constructor(private store: Store<State>) { }

  ngOnInit(): void {
    this.store.dispatch(fetchOrders());
  }

}
