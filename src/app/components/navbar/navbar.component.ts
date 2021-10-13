import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  private _isMenuOpen = false;

  constructor() {}

  ngOnInit(): void {}

  public get isMenuOpen(): boolean {
    return this._isMenuOpen;
  }

  toggleMenu() {
    this._isMenuOpen = !this._isMenuOpen;
    console.log('changing menu...');
  }
}
