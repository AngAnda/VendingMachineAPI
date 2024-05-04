import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductsListsComponent } from "./products-lists/products-lists.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, ProductsListsComponent]
})
export class AppComponent {
delete() {
throw new Error('Method not implemented.');
}
update() {
throw new Error('Method not implemented.');
}
add() {
throw new Error('Method not implemented.');
}
  title = 'VendingMachine';
}
