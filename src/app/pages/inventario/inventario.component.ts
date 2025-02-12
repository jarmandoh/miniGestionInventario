import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { NgClass, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-inventario',
  imports: [
    NgClass,
    NgFor,
    NgIf,
  ],
  templateUrl: './inventario.component.html',
  styleUrl: './inventario.component.css'
})
export class InventarioComponent {
  productos: any[] = [];
  mensajeError: string = '';

  constructor(private apiService: ApiService, private authService: AuthService, private router: Router) {}

  ngOnInit() {
    /* if (!this.authService.isAuthenticated()) {
      this.router.navigate(['/login']);
    } */

    this.apiService.obtenerInventario().subscribe(
      (data) => {
        this.productos = data;
      },
      (error) => {
        this.mensajeError = 'Error al cargar el inventario';
      }
    );
  }
}
