import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/models/product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { State } from 'src/app/store/states/app.state';
import { addProductToOrder } from 'src/app/store/actions/orders.actions';
import { OrderItem } from 'src/app/core/models/order-item.model';
import { Subscription } from 'rxjs';
import { productSelect } from 'src/app/store/selectors/products.selectors';
import { fetchProduct } from 'src/app/store/actions/products.actions';
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
} from '@angular/forms';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  selectedQuantity: number = 0;
  product: Product;
  subscription: Subscription;
  productId: number;
  productForm: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private store: Store<State>,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.productId = Number(this.route.snapshot.paramMap.get('id'));
    // this.store.dispatch(fetchProduct({ productId: this.productId }));
    this.subscription = this.store
      .pipe(select(productSelect))
      .subscribe((product: Product) => {
        this.product = product;
      });
    this.createForm();
  }

  orderProduct(): void {
    const { quantity, details } = this.productForm.value;
    const productToOrder: OrderItem = {
      productName: this.product.name,
      productId: this.product.id,
      quantity: quantity,
      value: this.product.price,
      description: details,
    };
    this.store.dispatch(addProductToOrder({ product: productToOrder }));
  }

  createForm(): void {
    this.productForm = this.formBuilder.group({
      quantity: [
        0,
        [Validators.required, Validators.min(1), Validators.max(10)],
      ],
      details: [null],
    });
  }

  submit(): void {
    if (this.productForm.valid) {
      this.orderProduct();
      this.router.navigate(['..'], { relativeTo: this.route });
    }
  }

  addProduct(): void {
    const currentQuantity = this.quantity.value;
    if (currentQuantity >= 10) {
      return;
    }
    this.quantity.setValue(currentQuantity + 1);
  }

  removeProduct(): void {
    const currentQuantity = this.quantity.value;
    if (currentQuantity === 0) {
      return;
    }
    this.quantity.setValue(currentQuantity - 1);
  }

  get quantity(): AbstractControl {
    return this.productForm.get('quantity');
  }

  get details(): AbstractControl {
    return this.productForm.get('details');
  }

  get total(): number {
    return this.product.price * this.quantity.value;
  }
}
