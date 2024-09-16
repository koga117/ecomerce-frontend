import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  constructor(private authService: AuthenticationService, private router: Router) { }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  selectService(service: string): void {
    if (service === 'products') {
      this.router.navigate(['/products']); 
    } else if (service === 'orders') {
      this.router.navigate(['/orders']); 
    } else if (service === 'createOrder') {
      this.router.navigate(['/createOrder']); 
    }
  }
}
