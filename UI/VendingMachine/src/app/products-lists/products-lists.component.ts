import { Component } from '@angular/core';
import { IProduct } from './product.model';
import { CommonModule } from '@angular/common';
import { ProductDetailsComponent } from "../product-details/product-details.component";
import { ProductsService } from '../products.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';


@Component({
    selector: 'vdm-products-lists',
    standalone: true,
    templateUrl: './products-lists.component.html',
    styleUrl: './products-lists.component.scss',
    imports: [CommonModule, ProductDetailsComponent, RouterModule]
})
export class ProductsListsComponent {

  addToCart(product:IProduct) {
    this.currentProductId = product.id
  }

  products: IProduct[];
  currentProductId:number;

  constructor(private productSvc:ProductsService, private router:Router, private route:ActivatedRoute)
  {
    this.currentProductId = -1
    this.products = []
  }

  ngOnInit(){
    this.loadProducts();
  }

  loadProducts(){
    this.productSvc.getProducts().subscribe(products =>{
      this.products = products;
    })
  }

  deleteProduct(productId:number){
    this.productSvc.deleteProduct(productId).subscribe({
      next: (response) =>{
        console.log('Product deleted successfully');
        this.loadProducts();
      },
      error: (error) =>{
        console.error('Error deleting product', error)
      }
    })
  }

  delete() {
    this.deleteProduct(this.currentProductId)
  }
  update() {
  throw new Error('Method not implemented.');
  }
  add() {
    this.router.navigate(['/add']);
  }


}
