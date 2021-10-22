import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { EnvironmentService } from '../environment.service';
import { Category } from '../models/category';
import { Product } from '../models/product';
import { MenuService } from './menu-service';

@Injectable({
  providedIn: 'root',
})
export class ApiMenuService implements MenuService {
  private selectedProducts = new BehaviorSubject<Product[]>([]);

  // API ENDPOINTS
  private productsEndpoint = `${this.env.apiUrl}/api/products`;
  private categoriesEndpoint = `${this.env.apiUrl}/api/categories`;

  constructor(private env: EnvironmentService, private http: HttpClient) {}

  get products(): Observable<Product[]> {
    return this.selectedProducts.asObservable();
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.categoriesEndpoint);
  }

  loadAllProducts(): void {
    this.http.get<Product[]>(this.productsEndpoint).subscribe(
      (ps) => {
        this.selectedProducts.next(ps);
      },
      (err) => {
        console.log('Error while fetching products: ', err);
      }
    );
  }

  loadProductsByCategory(categoryId: number): void {
    const params = new HttpParams({
      fromObject: {
        category: categoryId,
      },
    });

    this.http.get<Product[]>(this.productsEndpoint, { params }).subscribe(
      (ps) => {
        this.selectedProducts.next(ps);
      },
      (err) => {
        console.log(
          `Error while fetching products with category=${categoryId}`,
          err
        );
      }
    );
  }
}
