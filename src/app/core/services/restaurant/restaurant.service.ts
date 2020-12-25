import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Restaurant } from '../../models/restaurant.model';

@Injectable({
  providedIn: 'root',
})
export class RestaurantService {
  private readonly restaurantsUrl = `${environment.backendUrl}/restaurantes`;

  constructor(private httpClient: HttpClient) {}

  getRestaurants(): Observable<Restaurant[]> {
    return this.httpClient.get<Restaurant[]>(this.restaurantsUrl);
  }

  getRestaurantById(restaurantId: number): Observable<Restaurant> {
    return this.httpClient.get<Restaurant>(
      `${this.restaurantsUrl}/${restaurantId}`,
      {
        headers: new HttpHeaders({
          'Access-Control-Allow-Origin': '*',
        }),
      }
    );
  }
}
