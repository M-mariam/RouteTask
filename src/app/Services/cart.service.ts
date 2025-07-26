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

ddToCart(product: any) {
  const existingItem = this.cartItems.find(p => p.id === product.id);

  if (existingItem) {
    existingItem.quantity += 1; 
  } else {
    this.cartItems.push({ ...product, quantity: 1 }); 
  }

  this.cartSubject.next(this.cartItems);
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
