import { Component } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { AuthService } from '../../services/auth.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu-user',
  imports: [
    MatButtonModule,
    MatMenuModule,
    RouterLink
  ],
  templateUrl: './menu-user.component.html',
  styleUrl: './menu-user.component.css'
})
export class MenuUserComponent {
  constructor(private authService: AuthService) {
  }

  logout(): void {
    this.authService.logout();
  }
}