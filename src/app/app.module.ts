import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CategoriesListComponent } from './components/categories-list/categories-list.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { MenuComponent } from './pages/menu/menu.component';
import { AboutComponent } from './pages/about/about.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { MenuService } from './services/menu-service';
import { ApiMenuService } from './services/api-menu.service';
import { HttpClientModule } from '@angular/common/http';
import { MockMenuService } from './services/mock-menu.service';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CategoriesListComponent,
    ProductsListComponent,
    HomeComponent,
    ContactComponent,
    MenuComponent,
    AboutComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: environment.providers ?? [],
  bootstrap: [AppComponent],
})
export class AppModule {}
