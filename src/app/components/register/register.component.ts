import { Component } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username: string = '';
  email: string = '';
  password: string = '';
  isFormSubmitted: boolean = false;

  constructor(private authService: AuthenticationService, private router: Router) {}

  // Método para enviar el formulario
  onSubmit(registerForm: NgForm) {
    this.isFormSubmitted = true; // Marcar el formulario como enviado

    if (registerForm.invalid) {
      this.markFormGroupTouched(registerForm);
      return; // Detener el proceso si el formulario es inválido
    }

    // Llamar a la función de registro si el formulario es válido
    this.authService.register({ username: this.username, email: this.email, password: this.password }).subscribe({
      next: (response) => {
        console.log('Registration successful', response);
        this.router.navigate(['/login']); // Redirigir al login después del registro
      },
      error: (error) => {
        console.error('Registration error', error); // Manejo de errores
      }
    });
  }

  // Método para marcar todos los campos como tocados (touched)
  markFormGroupTouched(formGroup: NgForm) {
    Object.keys(formGroup.controls).forEach(key => {
      const control = formGroup.controls[key];
      control.markAsTouched();
      control.updateValueAndValidity();
    });
  }
}
