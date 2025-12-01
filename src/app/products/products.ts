import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,  // important: it's standalone
  imports: [CommonModule],  // <-- needed for *ngIf
  templateUrl: './products.html',
  styleUrls: ['./products.scss']
})
export class ProductsComponent {
  product: any;

  constructor(private http: HttpClient) {
    this.http.get('https://dummyjson.com/products/1').subscribe(data => {
      this.product = data;
    });
  }
}
