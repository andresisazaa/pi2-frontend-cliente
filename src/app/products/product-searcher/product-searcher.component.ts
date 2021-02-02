import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { searchProductByRestaurant } from 'src/app/store/actions/restaurants.actions';
import { State } from 'src/app/store/states/app.state';

@Component({
  selector: 'app-product-searcher',
  templateUrl: './product-searcher.component.html',
  styleUrls: ['./product-searcher.component.scss'],
})
export class ProductSearcherComponent implements OnInit {
  constructor(private store: Store<State>) {}

  ngOnInit(): void {}

  searchProduct(query: string) {
    this.store.dispatch(
      searchProductByRestaurant({ query: query.toLowerCase() })
    );
  }
}
