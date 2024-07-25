import { Component, Inject } from '@angular/core';
import { Product } from '../../../../models/product';
import { ProductServiceContract } from '../../services/productservicecontract';
import { PRODUCT_SERVICE_TOKEN } from '../../../../config/constants';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products: Product[];
  filterText = ''

  constructor(@Inject(PRODUCT_SERVICE_TOKEN) private svc: ProductServiceContract) {
    this.products = this.svc.getProducts()
  }
  updateFilterText(newText: string) {
    this.filterText = newText;
  }
}
