import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: any[] = [];

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: (response) => {
        this.products = response;
      },
      error: (error) => console.error('Error fetching products', error)
    });
  }
  goToServiceSelector() {
    this.router.navigate(['/serviceSelector']);
  }
}
