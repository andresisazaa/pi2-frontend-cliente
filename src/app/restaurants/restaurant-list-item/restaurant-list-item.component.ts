import { Component, OnInit, Input } from '@angular/core';
import { Restaurant } from 'src/app/core/models/restaurant.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurant-list-item',
  templateUrl: './restaurant-list-item.component.html',
  styleUrls: ['./restaurant-list-item.component.scss'],
})
export class RestaurantListItemComponent implements OnInit {
  @Input() restaurant: Restaurant;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  get categories(): string {
    return this.restaurant.categories.join(', ');
  }

  selectRestaurant(): void {
    this.router.navigate(['restaurantes', this.restaurant.id]);
  }
}
