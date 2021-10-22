import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product';
import { MenuService } from 'src/app/services/menu-service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  menuProducts!: Observable<Product[]>;

  constructor(public menuService: MenuService) {}

  ngOnInit(): void {
    this.menuProducts = this.menuService.products;
  }
}
