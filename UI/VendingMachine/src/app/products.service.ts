import { Injectable } from '@angular/core';
import { IProduct } from './products-lists/product.model';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products:IProduct[];

   getProducts(): Observable<IProduct[]>{
     return this.http.get<IProduct[]>('https://localhost:7156/api/products');
   }

   deleteProduct(id:number): Observable<any>{
     return this.http.delete(`https://localhost:7156/api/products/${id}`)
   }

   addProduct(product:IProduct):Observable<any>{
    const payload = {
      name: product.name,
      description: product.description,
      quantity: product.quantity,
      price: product.price
    }

      return this.http.post(`https://localhost:7156/api/products`, payload)
   }

  constructor(private http: HttpClient) 
  { 
    this.products = []
  }

}
