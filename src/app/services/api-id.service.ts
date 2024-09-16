import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiIdService {
  private apiIdSubject = new BehaviorSubject<string>('');
  apiId$ = this.apiIdSubject.asObservable();

  private apiIdUrl = 'api-gateway-id.txt'; // Ruta al archivo con el ID

  constructor(private http: HttpClient) {
    this.loadApiId();
  }

  private loadApiId(): void {
    this.http.get(this.apiIdUrl, { responseType: 'text' })
      .subscribe(apiId => {
        this.apiIdSubject.next(apiId);
      });
  }
}
