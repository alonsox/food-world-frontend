import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/models/category';
import { MenuService } from 'src/app/services/menu-service';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss'],
})
export class CategoriesListComponent implements OnInit, OnDestroy {
  categories!: Observable<Category[]>;
  selectedCategory: Category | null = null;

  constructor(public menuService: MenuService) {}

  ngOnInit(): void {
    this.fetchAllProducts();
    this.categories = this.menuService.getCategories();
  }

  ngOnDestroy(): void {}

  fetchAllProducts() {
    this.selectedCategory = null;
    this.menuService.loadAllProducts();
  }

  fetchProductsByCategory(category: Category) {
    this.selectedCategory = category;
    this.menuService.loadProductsByCategory(category.id);
  }
}
