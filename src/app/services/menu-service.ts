import { Observable } from 'rxjs';
import { Category } from '../models/category';
import { Product } from '../models/product';

export abstract class MenuService {
  public abstract get products(): Observable<Product[]>;

  public abstract getCategories(): Observable<Category[]>;

  public abstract loadAllProducts(): void;

  public abstract loadProductsByCategory(categoryId: number): void;
}
