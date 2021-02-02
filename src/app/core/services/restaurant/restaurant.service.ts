import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Restaurant } from '../../models/restaurant.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class RestaurantService {
  private readonly restaurantsUrl = `http://54.90.19.125:3004/restaurantes`;
  constructor(private httpClient: HttpClient) {}

  getRestaurants(): Observable<Restaurant[]> {
    return this.httpClient.get<any[]>(this.restaurantsUrl).pipe(
      map((restaurants) => {
        return restaurants.map((res) => ({
          id: res.id,
          name: res.nombre,
          image: res.imagen,
          categories: res.categorias,
        }));
      })
    );
  }

  getRestaurantById(restaurantId: number): Observable<Restaurant> {
    return this.httpClient
      .get<any>(`${this.restaurantsUrl}/${restaurantId}`)
      .pipe(
        map((res) => {
          const restaurant: Restaurant = {
            id: res.id,
            name: res.nombre,
            image: res.imagen,
            categories: res.categorias,
            products: res.productos.map(p => ({
              id: p.id,
              name: p.name,
              price: p.price,
              image: p.imagen_url,
              description: p.description,
              category: p.categoria
            })),
          };
          return restaurant;
        })
      );
  }
}

// id: number;
// name: string;
// price: number;
// image: string;
// description: string;
// category: string;
