import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-movimiento',
  imports: [
    FormsModule
  ],
  templateUrl: './movimiento.component.html',
  styleUrl: './movimiento.component.css',
  standalone: true
})
export class MovimientoComponent {
  idProducto: number = 0;
  cantidad: number = 0;
  tipoMovimiento: string = 'entrada'; // "entrada" o "salida"
  mensaje: string = '';

  constructor(private apiService: ApiService, private router: Router) {}

  registrarMovimiento() {
    if (this.idProducto <= 0 || this.cantidad <= 0) {
      this.mensaje = 'Por favor, ingrese valores válidos';
      return;
    }

    const movimiento = {
      idProducto: this.idProducto,
      cantidad: this.tipoMovimiento === 'entrada' ? this.cantidad : -this.cantidad, // Si es salida, se envía negativo
    };

    this.apiService.registrarMovimiento(movimiento).subscribe(
      () => {
        this.mensaje = 'Movimiento registrado correctamente';
        setTimeout(() => {
          this.mensaje = '';
          this.router.navigate(['/inventario']);
        }, 1500);
      },
      () => {
        this.mensaje = 'Error al registrar el movimiento';
      }
    );
  }
}
