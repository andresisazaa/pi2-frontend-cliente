import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Product } from '../../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly menuUrl = `${environment.backendUrl}/menu`;
  private mockUrl =
    'https://run.mocky.io/v3/d9d1189c-e84c-4719-8499-4014d239ebd8';
  constructor(private httpClient: HttpClient) {}

  getProducts(): Observable<Product[]> {
    // Implementar parametros de filtrado
    return this.httpClient.get<Product[]>(this.mockUrl);
  }

  getProductById(productId: number): Observable<Product> {
    return this.httpClient.get<Product>(`${this.mockUrl}/${productId}`);
  }
}
