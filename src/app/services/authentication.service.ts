import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { ApiIdService } from './api-id.service';
import { ToastrService } from 'ngx-toastr';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private apiUrl = '';

  constructor(
    private http: HttpClient, 
    private apiIdService: ApiIdService, 
    private toastr: ToastrService
  ) {
    this.apiIdService.apiId$.subscribe(apiId => {
      this.apiUrl = `http://localhost:4566/restapis/${apiId}/dev/_user_request_`;
    });
  }

  // Método de registro
  register(user: { username: string; email: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, user).pipe(
      tap(() => {
        this.toastr.success('Usuario registrado exitosamente');
      }),
      catchError(error => {
        this.toastr.error('Error al registrar el usuario');
        return throwError(error);
      })
    );
  }

  // Método de login
  login(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials).pipe(
      tap(() => {
        this.toastr.success('Inicio de sesión exitoso');
      }),
      catchError(error => {
        this.toastr.error('Error en inicio de sesión');
        return throwError(error);
      })
    );
  }

  // Método de autorización
  authorize(token: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post(`${this.apiUrl}/authorize`, {}, { headers }).pipe(
      tap(() => {
        this.toastr.success('Autorización exitosa');
      }),
      catchError(error => {
        this.toastr.error('Error en la autorización');
        return throwError(error);
      })
    );
  }

  // Método para verificar si el usuario está autenticado
  isAuthenticated(): boolean {
    const token = localStorage.getItem('token'); 
    return token !== null;
  }

  // Método para cerrar sesión
  logout(): void {
    localStorage.removeItem('token');
    this.toastr.info('Sesión cerrada'); // Notificación al cerrar sesión
  }
}
