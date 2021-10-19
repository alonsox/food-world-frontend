import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Category } from '../models/category';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  constructor() {}

  getCategories(): Observable<Category[]> {
    return of([
      {
        id: '1',
        name: 'Category 1',
      },
      {
        id: '2',
        name: 'Category 1',
      },
      {
        id: '3',
        name: 'Category 1',
      },
    ]);
  }

  getAllProducts(): Observable<Product[]> {
    return of([]);
  }

  getProductsByCategory(categoryId: number): Observable<Product[]> {
    return of([]);
  }
}
