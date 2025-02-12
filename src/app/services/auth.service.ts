import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:5000/auth/login'; // URL del backend

  constructor(private http: HttpClient, private router: Router) {}

  // Método para iniciar sesión y obtener el JWT
  login(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post<any>(this.apiUrl, credentials);
  }

  // Guardar token en localStorage
  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  // Obtener el token
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  // Verificar si el usuario está autenticado
  isAuthenticated(): boolean {
    return !!this.getToken(); // Si hay token, el usuario está autenticado
  }

  // Cerrar sesión: eliminar token y redirigir a login
  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
