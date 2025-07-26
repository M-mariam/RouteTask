import { Component, HostBinding, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { OverlayContainer } from '@angular/cdk/overlay';
import { CartService } from '../../Services/cart.service';

@Component({
  selector: 'app-navbar',
  imports: [
    CommonModule,
    RouterLink,
    MatSlideToggle,
    ReactiveFormsModule 
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  switchTheme = new FormControl(false);
  @HostBinding('class') className = '';
  darkClass = 'theme-dark';
  lightClass = 'theme-light';
  cartCount = 0;

  constructor(private cartService: CartService, private overlay: OverlayContainer) {}

  ngOnInit(): void {
    this.switchTheme.valueChanges.subscribe((currentMode) => {
      this.className = currentMode ? this.darkClass : this.lightClass;

      const overlayClasses = this.overlay.getContainerElement().classList;
      overlayClasses.remove(currentMode ? this.lightClass : this.darkClass);
      overlayClasses.add(currentMode ? this.darkClass : this.lightClass);
    });

    this.cartService.cart.subscribe(items => {
      this.cartCount = items.length;
    });
  }
}
