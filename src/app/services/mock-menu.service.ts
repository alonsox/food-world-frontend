import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Category } from '../models/category';
import { Product } from '../models/product';
import { MenuService } from './menu-service';

@Injectable({
  providedIn: 'root',
})
export class MockMenuService implements MenuService {
  private allCategories: Category[] = [
    {
      id: 1,
      name: 'Category 1',
    },
    {
      id: 2,
      name: 'Category 2',
    },
    {
      id: 3,
      name: 'Category 3',
    },

    {
      id: 4,
      name: 'Category 4',
    },
  ];

  private allProducts: Product[] = [
    {
      id: '1',
      categoryId: 1,
      name: 'Product 1',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      price: '23.32',
      photo:
        'https://www.comidastipicaschilenas.com/wp-content/uploads/2020/04/completo-italiano.jpg',
    },
    {
      id: '2',
      categoryId: 2,
      name: 'Product 2',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et vel culpa quas quod libero aspernatur. Voluptatum?',
      price: '23.32',
      photo:
        'https://www.comidastipicaschilenas.com/wp-content/uploads/2020/04/completo-italiano.jpg',
    },
    {
      id: '3',
      categoryId: 3,
      name: 'Product 3',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
      price: '23.32',
      photo:
        'https://www.comidastipicaschilenas.com/wp-content/uploads/2020/04/completo-italiano.jpg',
    },
    {
      id: '4',
      categoryId: 4,
      name: 'Product 4',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et vel culpa quas quod voluptas repellat eius',
      price: '23.32',
      photo:
        'https://www.comidastipicaschilenas.com/wp-content/uploads/2020/04/completo-italiano.jpg',
    },
  ];

  private selectedProducts = new BehaviorSubject<Product[]>([]);

  constructor() {}

  get products() {
    return this.selectedProducts.asObservable();
  }

  getCategories(): Observable<Category[]> {
    console.log('Loading all categories from getCategories');

    return of(this.allCategories);
  }

  loadAllProducts(): void {
    console.log('Loading all products');

    this.selectedProducts.next(this.allProducts);
  }

  loadProductsByCategory(categoryId: number): void {
    console.log(`Loading products with categoryId=${categoryId}`);

    this.selectedProducts.next(
      this.allProducts.filter((p) => p.categoryId === categoryId)
    );
  }
}
