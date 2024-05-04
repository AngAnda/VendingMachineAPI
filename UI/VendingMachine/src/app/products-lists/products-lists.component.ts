import { Component } from '@angular/core';
import { IProduct } from './product.model';
import { CommonModule } from '@angular/common';
import { ProductDetailsComponent } from "../product-details/product-details.component";
import { ProductsService } from '../products.service';


@Component({
    selector: 'vdm-products-lists',
    standalone: true,
    templateUrl: './products-lists.component.html',
    styleUrl: './products-lists.component.scss',
    imports: [CommonModule, ProductDetailsComponent]
})
export class ProductsListsComponent {

  addToCart(product:IProduct) {
    console.log("hello" +product.id.toString())
  }

  products: IProduct[];
  id:number;

  constructor(private productSvc:ProductsService)
  {
    this.id = 0
    this.products = []
  }

  ngOnInit(){
    this.productSvc.getProducts().subscribe(products => {
        this.products = products;
    })
  }

}
