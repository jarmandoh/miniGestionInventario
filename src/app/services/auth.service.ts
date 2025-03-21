import { afterNextRender, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:5000/auth/login'; // URL del backend
  private islocalStorageAvailable = typeof localStorage !== 'undefined';


  private isloggedInSubject = new BehaviorSubject<boolean>(false);
  public isLoggedIn$ = this.isloggedInSubject.asObservable();

  constructor(private http: HttpClient, private router: Router) {
  }

  // Método para iniciar sesión y obtener el JWT
  login(credentials: { email: string; password: string }): Observable<any> {
    this.isloggedInSubject.next(true);
    return this.http.post<any>(this.apiUrl, credentials);
  }

  // Guardar token en localStorage
  setToken(token: string): void {
    if(this.islocalStorageAvailable){
      localStorage.setItem('token', token);
    }
  }

  // Obtener el token
  getToken(): string | null {
    if(this.islocalStorageAvailable){
      return localStorage.getItem('token');
    }
    return null
  }

  // Verificar si el usuario está autenticado
  isAuthenticated(): boolean {
    const estado = this.isloggedInSubject.getValue();
    return estado; // Si hay token, el usuario está autenticado
  }

  // Cerrar sesión: eliminar token y redirigir a login
  logout(): void {
    this.isloggedInSubject.next(false);
    if(this.islocalStorageAvailable){
      localStorage.removeItem('token');
    }
    this.router.navigate(['/login']);
  }
}
