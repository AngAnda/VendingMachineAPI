import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../products-lists/product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'vdm-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})

export class ProductDetailsComponent {
  @Input() product!:IProduct;
  @Output() buy = new EventEmitter();


  buyButtonClicked():void{
    console.log("product clicked")
    this.buy.emit();
  }

}
