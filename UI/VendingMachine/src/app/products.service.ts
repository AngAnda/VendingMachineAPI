import { Injectable } from '@angular/core';
import { IProduct } from './products-lists/product.model';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable, catchError, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products:IProduct[];

   getProducts(): Observable<IProduct[]>{
     return this.http.get<IProduct[]>('https://localhost:7156/api/products');
   }

  constructor(private http: HttpClient) 
  { 
    this.products = []
  }

}
