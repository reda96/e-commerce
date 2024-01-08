import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeighestProductsFilteredComponent } from './heighest-products-filtered.component';

describe('HeighestProductsFilteredComponent', () => {
  let component: HeighestProductsFilteredComponent;
  let fixture: ComponentFixture<HeighestProductsFilteredComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeighestProductsFilteredComponent]
    });
    fixture = TestBed.createComponent(HeighestProductsFilteredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
