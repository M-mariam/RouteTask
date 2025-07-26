import { HttpClient } from '@angular/common/http';
import { Component, NgModule, Pipe } from '@angular/core';
import { ProductService } from '../../Services/product.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CartService } from '../../Services/cart.service';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from '../../pipes/search.pipe';
import { SortPipe } from '../../pipes/sort.pipe';


@Component({
  selector: 'app-home',
  imports: [RouterLink, CommonModule, FormsModule, SearchPipe, SortPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  products: any[] = []
  sortingOpts = ''
  searchTerm:string = ""
  constructor(private allproducts: ProductService, private cartService:CartService){}

  getProducts(){
    this.allproducts.getAllProducts().subscribe({
      next:(res:any) =>{
        console.log(res)
        this.products = res
        // this.onSortChange(this.sortingOpts)
      }
    })
  }

  ngOnInit():void{
    this.getProducts()
  }
  
addProductToCart(product: any) {
  this.cartService.ddToCart(product);
}
}