import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { JsonPipe, NgIf } from '@angular/common';
import { MenuService } from '../../services/menu.service';
import { MenuUserComponent } from '../menu-user/menu-user.component';

import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-header',
  imports: [
    RouterLink,
    MenuUserComponent,
    MatButtonModule,
    MatMenuModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isloggedIn: boolean = false;
  menuOpen: boolean = false;

  constructor(private authService: AuthService, public menuService: MenuService) {
    this.authService.isLoggedIn$.subscribe((value) => {
      this.isloggedIn = value;
    });
  }

  toogleMenu(){
    this.menuService.toogleMenu()
  }

  logout(): void {
    this.authService.logout();
  }
}
