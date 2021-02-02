import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/core/models/product.model';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/states/app.state';
import { selectProduct } from 'src/app/store/actions/products.actions';

@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.scss'],
})
export class ProductListItemComponent {
  @Input() product: Product;
  @Output() selectProduct: EventEmitter<Product>;

  constructor(private store: Store<State>) {
    this.selectProduct = new EventEmitter<Product>();
  }

  handleSelectProduct(): void {
    this.selectProduct.emit(this.product);
    this.store.dispatch(selectProduct({ product: this.product }));
  }
}
