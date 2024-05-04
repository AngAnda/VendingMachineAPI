import { Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductsListsComponent } from './products-lists/products-lists.component';

export const routes: Routes = [
    {path: 'add', component: AddProductComponent},
    {path: '', component: ProductsListsComponent}

];
