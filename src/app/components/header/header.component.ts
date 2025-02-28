import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { JsonPipe, NgIf } from '@angular/common';
import { MenuService } from '../../services/menu.service';
import { MenuUserComponent } from '../menu-user/menu-user.component';

@Component({
  selector: 'app-header',
  imports: [
    RouterLink,
    MenuUserComponent
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
