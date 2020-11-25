import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/core/models/product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { State } from 'src/app/store/states/app.state';
import { addProductToOrder } from 'src/app/store/actions/orders.actions';
import { OrderItem } from 'src/app/core/models/order-item.model';
import { Subscription } from 'rxjs';
import { productsSelect } from 'src/app/store/selectors/products.selectors';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  selectedQuantity: number = 0;
  product: Product;
  subscription: Subscription;
  productId: string;
  constructor(
    private route: ActivatedRoute,
    private store: Store<State>,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.productId = this.route.snapshot.paramMap.get('id');
    console.log(this.productId);
    this.subscription = this.store
      .pipe(select(productsSelect))
      .pipe(filter((productList: Product[]) => productList.length > 0))
      .subscribe((products: Product[]) => {
        this.product = products.find((p: Product) => p.id === this.productId);
      });
  }

  orderProduct(): void {
    const productToOrder: OrderItem = {
      productName: this.product.name,
      productId: this.product.id,
      quantity: this.selectedQuantity,
      value: this.product.price,
      description: 'Cualquier cosa',
    };
    this.store.dispatch(addProductToOrder({ product: productToOrder }));
    this.router.navigate(['productos']);
  }

  addProduct(): void {
    if (this.selectedQuantity >= 10) {
      return;
    }
    this.selectedQuantity++;
  }

  removeProduct(): void {
    if (this.selectedQuantity === 0) {
      return;
    }
    this.selectedQuantity--;
  }

  get total(): number {
    return this.product.price * this.selectedQuantity;
  }

  get hasSelectedProducts(): boolean {
    return this.selectedQuantity > 0;
  }
}
