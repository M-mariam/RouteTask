import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

private cartItems: any[] = [];
  private cartSubject = new BehaviorSubject<any[]>([]);

  cart = this.cartSubject.asObservable();

  constructor() {}

  addToCart(product: any) {
    this.cartItems.push(product);
    this.cartSubject.next(this.cartItems); // Update subscribers
  }

  getCartItems() {
    return this.cartItems;
  }

  clearCart() {
    this.cartItems = [];
    this.cartSubject.next([]);
  }

  getCartCount() {
    return this.cartItems.length;
  }
removeFromCart(index: number) {
  this.cartItems.splice(index, 1);
  this.cartSubject.next(this.cartItems);
}

}
