import { Component, OnInit } from '@angular/core';
import { IProduct } from '../products-lists/product.model';
import { ProductsService } from '../products.service';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'vdm-edit-product',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.scss'
})
export class EditProductComponent implements OnInit{
  product:IProduct= {id: 0, name:'', description:'', quantity:0, price:0.00};
  id:number=7;
  
  constructor(private productSvc:ProductsService, private route:ActivatedRoute,private router:Router)
  { 
    this.getProduct();
  }
  
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id  =params.get('id');
      this.id = id? Number(id) : 7;
      this.getProduct();
    })  
  }
  

  edit() {
    console.log(this.product.id)
    this.editProduct(this.product)
    this.router.navigate([''])
  }

  editProduct(product:IProduct){
    this.productSvc.editProduct(product).subscribe({
      next: (response) =>{
        this.product = response
      },
      error: (error) =>{
        console.log(error)
      }
    })
  }

  getProduct(){
    this.productSvc.getProduct(this.id).subscribe({
       next: (response)=>{
        this.product = response
       }, 
      error: (error) =>{
        console.log(error)
      }
    })
  }

}
