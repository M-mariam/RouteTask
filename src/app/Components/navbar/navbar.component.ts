import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartService } from '../../Services/cart.service';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

cartCount = 0;
constructor(private cartService: CartService){}
ngOnInit(): void {
  this.cartService.cart.subscribe(items => {
    this.cartCount = items.length;
  });
}
toggleDarkMode() {
  const htmlEl = document.documentElement;
  htmlEl.classList.toggle('dark');
}
}
