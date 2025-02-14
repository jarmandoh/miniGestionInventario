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
  productos: any[] = [
    {
      id: 1,
      nombre: 'Producto 1',
      precio: 100,
      cantidad: 10,
    },
    {
      id: 2,
      nombre: 'Producto 2',
      precio: 200,
      cantidad: 20,
    },
  ];
  mensajeError: string = '';

  constructor(private apiService: ApiService, private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.apiService.obtenerInventario().subscribe(
      (data) => {
        this.productos = data;
      });
  }
}
