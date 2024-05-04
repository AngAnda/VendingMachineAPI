import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../products-lists/product.model';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'vdm-product-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})

export class ProductDetailsComponent {
  @Input() product!:IProduct;
  @Output() buy = new EventEmitter();

  constructor(private router:Router, private route:ActivatedRoute){}


  buyButtonClicked():void{
    this.buy.emit();
  }

  delete() {
    console.log("deleted clicked")
  }
  update() {
    this.router.navigate(['/update', this.product.id]); // Exemplu de utilizare
  }
  add() {
    this.router.navigate(['/add']);
  }

}
