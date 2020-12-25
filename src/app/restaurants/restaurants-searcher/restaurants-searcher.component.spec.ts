import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantsSearcherComponent } from './restaurants-searcher.component';

describe('RestaurantsSearcherComponent', () => {
  let component: RestaurantsSearcherComponent;
  let fixture: ComponentFixture<RestaurantsSearcherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantsSearcherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantsSearcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
