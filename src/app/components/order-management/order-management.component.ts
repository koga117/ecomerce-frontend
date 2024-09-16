import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from '../../services/order.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-order-management',
  templateUrl: './order-management.component.html',
  styleUrls: ['./order-management.component.css']
})
export class OrderManagementComponent {
  initialOrder = { product: '', quantity: 0, customerName: '' };
  order = { ...this.initialOrder };

  constructor(private orderService: OrderService, private router: Router) { }

  onSubmit(orderForm: NgForm) {
    if (orderForm.invalid) {
      this.markFormGroupTouched(orderForm);
      return;
    }

    this.createOrder();
  }

  createOrder() {
    this.orderService.createOrder(this.order).subscribe({
      next: (response) => {
        console.log('Order created successfully!');
        this.order = { ...this.initialOrder };
        this.router.navigate(['/serviceSelector']);
      },
      error: (error) => {
        console.error('Error creating order', error);
      }
    });
  }

  markFormGroupTouched(formGroup: NgForm) {
    Object.keys(formGroup.controls).forEach(key => {
      const control = formGroup.controls[key];
      control.markAsTouched();
      control.updateValueAndValidity();
    });
  }

  goToServiceSelector() {
    this.router.navigate(['/serviceSelector']);
  }
}
