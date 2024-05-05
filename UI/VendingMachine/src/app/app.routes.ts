import { Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductsListsComponent } from './products-lists/products-lists.component';
import { EditProductComponent } from './edit-product/edit-product.component';

export const routes: Routes = [
    {path: 'add', component: AddProductComponent},
    {path: 'edit/:id', component: EditProductComponent},
    {path: '', component: ProductsListsComponent}

];
