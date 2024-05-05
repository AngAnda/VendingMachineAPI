import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../products-lists/product.model';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { BuyDialogComponent } from '../buy-dialog/buy-dialog.component';


@Component({
  selector: 'vdm-product-details',
  standalone: true,
  imports: [CommonModule, MatDialogModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})

export class ProductDetailsComponent {

  @Input() product!:IProduct;
  @Output() buy = new EventEmitter();

  constructor(private dialog: MatDialog){}


  buyButtonClicked():void{
    this.dialog.open(BuyDialogComponent);
  }
  
  selectButtonClicked() {
    this.buy.emit();
  }

}
