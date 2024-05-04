import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductsListsComponent } from "./products-lists/products-lists.component";
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, ProductsListsComponent]
})
export class AppComponent {
  title = 'VendingMachine';
}
