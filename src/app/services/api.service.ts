import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'http://localhost:5000/productos';

  constructor(private http: HttpClient, private authService: AuthService) {}

  private getHeaders() {
    return new HttpHeaders({
      Authorization: `Bearer ${this.authService.getToken()}`,
    });
  }

  obtenerInventario(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/inventario`, {
      headers: this.getHeaders(),
    });
  }

  registrarMovimiento(movimiento: { idProducto: number; cantidad: number }): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/movimiento`, movimiento, {
      headers: this.getHeaders(),
    });
  }
}