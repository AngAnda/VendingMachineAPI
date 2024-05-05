import { Component } from '@angular/core';
import { IProduct } from '../products-lists/product.model';
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ProductsService } from '../products.service';

@Component({
  selector: 'vdm-add-product',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.scss'
})
export class AddProductComponent {
  add() {
    this.addProduct(this.product)
  }

  addProduct(product:IProduct){
    this.productSvc.addProduct(product).subscribe({
      next: (response) =>{
        console.log('Product added successfully', response);
      },
      error: (error) =>{
        console.error('Error adding the product', error)
      }
    })
  }

  product:IProduct = {id:0, name:'', description:'', quantity:0, price:0};
  
  constructor(private productSvc:ProductsService){}
}
