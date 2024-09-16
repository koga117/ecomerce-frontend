import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  credentials = { email: '', password: '' };

  constructor(private authService: AuthenticationService, private router: Router) { }

  login() {
    this.authService.login(this.credentials).subscribe({
      next: (response) => {
        localStorage.setItem('token', response.token);
        this.router.navigate(['/products']);
      },
      error: (error) => console.error('Login error', error)
    });
  }
}
