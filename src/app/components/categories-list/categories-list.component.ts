import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Category } from 'src/app/models/category';
import { Product } from 'src/app/models/product';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss'],
})
export class CategoriesListComponent implements OnInit {
  selectedCategory: Category | null = null;

  constructor(public menuService: MenuService) {}

  ngOnInit(): void {
    this.loadAllProducts();
  }

  loadAllProducts() {
    this.selectedCategory = null;
    this.menuService.loadAllProducts();
  }

  loadProductsByCategory(category: Category) {
    this.selectedCategory = category;
    this.menuService.loadProductsByCategory(parseInt(category.id));
  }
}
