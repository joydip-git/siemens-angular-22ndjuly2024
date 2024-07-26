import { NgModule } from "@angular/core";
import { ProductListComponent } from "./components/product-list/product-list.component";
import { CommonModule } from "@angular/common";
import { PRODUCT_API_BASE_URL, PRODUCT_API_URL_TOKEN, PRODUCT_SERVICE_TOKEN, PRODUCT_SERVICE_TYPE } from "../../config/constants";
import { FilterProductPipe } from "./pipes/filter-product.pipe";
import { FilterComponent } from './components/filter/filter.component';
import { HttpClientModule } from "@angular/common/http";

@NgModule({
    declarations: [ProductListComponent, FilterProductPipe, FilterComponent],
    imports: [CommonModule, HttpClientModule],
    providers: [
        {
            provide: PRODUCT_SERVICE_TOKEN,
            useClass: PRODUCT_SERVICE_TYPE
        },
        {
            provide: PRODUCT_API_URL_TOKEN,
            useValue: PRODUCT_API_BASE_URL
        }
    ],
    exports: [ProductListComponent]
})
export class ProductsModule {

}