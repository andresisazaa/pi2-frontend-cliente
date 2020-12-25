import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly productsUrl = `${environment.backendUrl}/productos`;

  constructor(private httpClient: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.productsUrl);
  }

  getProductById(productId: number): Observable<Product> {
    return this.httpClient.get<Product>(
      'https://run.mocky.io/v3/4a90ef71-31db-4a6e-8147-fe0c7429690c'
    );
  }
}
