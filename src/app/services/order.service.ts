import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

import { catchError, Observable, tap, throwError } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private apiUrl = environment.apiUrlOrder

  constructor(private http: HttpClient, private toastr: ToastrService) {}

  getOrders(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  createOrder(order: { product: string; quantity: number; customerName: string }): Observable<any> {
    return this.http.post(this.apiUrl, order).pipe(
      tap(() => {
        this.toastr.success('Orden registrada exitosamente');
      }),
      catchError(error => {
        this.toastr.error('Error al registrar orden');
        return throwError(error)
      })
    )
  }
}
