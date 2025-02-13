import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [
    RouterLink
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isloggedIn: boolean = false;
  constructor(private authService: AuthService) {
    this.authService.isLoggedIn$.subscribe((value) => {
      this.isloggedIn = value;
    });
  }
  
  logout(): void {
    this.authService.logout();
  }
}
