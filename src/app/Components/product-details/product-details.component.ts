import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../Services/product.service';
import { CommonModule } from '@angular/common';
import { CartService } from '../../Services/cart.service';

@Component({
  selector: 'app-product-details',
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit{
 product: any;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService:CartService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.productService.getProduct(id).subscribe(res => {
      this.product = res;
    });
  }
  addProductToCart(product: any) {
  this.cartService.ddToCart(product);
}
}
