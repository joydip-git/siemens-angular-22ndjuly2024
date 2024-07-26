import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { Product } from '../../../../models/product';
import { ServiceContract } from '../../services/productservicecontract';
import { PRODUCT_SERVICE_TOKEN } from '../../../../config/constants';
import { map, Observable, Subscription } from 'rxjs';
import { ApiResponse } from '../../../../models/apiresponse';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit, OnDestroy {
  products?: Product[];
  fetchComplete = false
  errorInfo = ''
  private sub?: Subscription;
  //productObs?: Observable<ApiResponse<Product[] | null>>;

  filterText = ''

  constructor(@Inject(PRODUCT_SERVICE_TOKEN) private svc: ServiceContract<Product>) {

  }
  ngOnDestroy(): void {
    this.sub?.unsubscribe()
  }
  fetchData() {
    this.sub = this.svc.getAll().subscribe({
      next: (apiResponse) => {
        if (apiResponse.data !== null) {
          this.products = apiResponse.data
          this.errorInfo = ''
          this.fetchComplete = true
        } else {
          this.products = undefined
          this.errorInfo = apiResponse.message
          this.fetchComplete = true
        }
      },
      error: (err) => {
        this.products = undefined
        this.errorInfo = err.message
        this.fetchComplete = true
      }
    })
  }
  ngOnInit(): void {
    //this.productObs = this.svc.getAll()
    this.fetchData()
  }
  updateFilterText(newText: string) {
    this.filterText = newText;
  }
}
