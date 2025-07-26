import { Component, OnInit } from '@angular/core';
import { CartService } from '../../Services/cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit{
cartItems: any[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
  }

removeItem(index: number) {
  this.cartService.removeFromCart(index);
  this.cartItems = this.cartService.getCartItems();
}
  getTotal(): number {
    return this.cartItems.reduce((acc, item) => acc + item.price, 0);
  }
}
