import { Component, Inject } from '@angular/core';
import { Product } from '../../../../models/product';
//import { productRecords } from '../../../../data/productrecords';
import { ProductServiceContract } from '../../services/productservicecontract';
import { PRODUCT_SERVICE_TOKEN } from '../../../../config/constants';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products: Product[];

  //private svc: ProductServiceContract;
  constructor(@Inject(PRODUCT_SERVICE_TOKEN) private svc: ProductServiceContract) {
    //this.svc = svc;
    //this.products = productRecords
    this.products = this.svc.getProducts()
  }
}
