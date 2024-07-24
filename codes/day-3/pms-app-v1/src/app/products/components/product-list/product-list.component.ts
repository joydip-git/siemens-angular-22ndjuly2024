import { Component } from '@angular/core';
import { Product } from '../../../../models/product';
import { productRecords } from '../../../../data/productrecords';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products: Product[];
  constructor() {
    this.products = productRecords
  }
}
