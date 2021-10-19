import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Category } from 'src/app/models/category';
import { Product } from 'src/app/models/product';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  selectedCategory: Category | null = null;
  theProducts: Observable<Product[]> = of([]);

  constructor(public menuService: MenuService) {}

  ngOnInit(): void {
    this.loadAllProducts();
  }

  loadAllProducts() {
    this.selectedCategory = null;
    this.theProducts = this.menuService.getAllProducts();
  }

  loadProductsByCategory(category: Category) {
    this.selectedCategory = category;
    this.theProducts = this.menuService.getProductsByCategory(
      parseInt(category.id)
    );
  }
}
