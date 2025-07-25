import { HttpClient } from '@angular/common/http';
import { Component, Pipe } from '@angular/core';
import { ProductService } from '../../Services/product.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [RouterLink, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  products: any = []
  constructor(private allproducts: ProductService){}

  getProducts(){
    this.allproducts.getAllProducts().subscribe({
      next:(res:any) =>{
        console.log(res)
        this.products = res
      }
    })
  }
  ngOnInit():void{
    this.getProducts()
  }
}
