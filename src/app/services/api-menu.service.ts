import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { EnvironmentService } from '../environment.service';
import { Category } from '../models/category';
import { Product } from '../models/product';
import { MenuService } from './menu-service';

@Injectable({
  providedIn: 'root',
})
export class ApiMenuService implements MenuService {
  constructor(private env: EnvironmentService) {}

  get products(): Observable<Product[]> {
    return of([
      {
        id: '1',
        categoryId: 1,
        name: 'Product 1',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        price: '23.32',
        photo:
          'https://www.comidastipicaschilenas.com/wp-content/uploads/2020/04/completo-italiano.jpg',
      },
    ]);
  }

  getCategories(): Observable<Category[]> {
    return of([{ id: 1, name: 'Category' }]);
  }

  loadAllProducts(): void {
    console.log('loading all products');
  }

  loadProductsByCategory(categoryId: number): void {
    console.log('loading products with category ', categoryId);
  }
}
