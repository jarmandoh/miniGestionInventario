import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { AuthService } from './services/auth.service';
import { NgIf } from '@angular/common';
import { MenuService } from './services/menu.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, RouterLink, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  animations: [
    trigger('miAnimacion', [
      state('closed', style({
        transform: 'translateX(100%)',
        
      })),
      state('open', style({
        transform: 'translateX(0)',
        
      })),
      transition('closed => open', [
        animate('300ms ease-in-out')
      ]),
      transition('open => closed', [
        animate('300ms ease-in-out')
      ])
    ])
  ]
})
export class AppComponent {
  isloggedIn: boolean = false;
  title = 'miniGestionInventario';
  menuOpen: boolean = true;
  animationState = 'closed'

  authService = inject(AuthService);
  menuService = inject(MenuService);

  constructor(){
    this.menuService.menuOpen$.subscribe((isOpen) => {
      this.animationState = isOpen ? 'open' : 'closed';
    })
    this.authService.isLoggedIn$.subscribe((isloggedIn) => {
      this.isloggedIn = isloggedIn
    })
  }


  toggleMenu() {
    this.menuService.toogleMenu();
  }

  logout(): void {
    this.authService.logout();
  }
}
