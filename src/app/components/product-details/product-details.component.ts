// src/app/components/product-details/product-details.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: any;

  constructor(private productService: ProductService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    console.log('Product ID:', productId);

    if (productId) {
      this.productService.getProductById(productId).subscribe({
        next: (response) => {
          console.log('Product fetched:', response);
          this.product = response;
        },
        error: (error) => console.error('Error fetching product', error)
      });
    }
  }
}
