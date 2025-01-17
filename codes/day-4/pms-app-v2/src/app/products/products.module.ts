import { NgModule } from "@angular/core";
import { ProductListComponent } from "./components/product-list/product-list.component";
import { CommonModule } from "@angular/common";
import { PRODUCT_SERVICE_TOKEN, PRODUCT_SERVICE_TYPE } from "../../config/constants";
import { FilterProductPipe } from "./pipes/filter-product.pipe";
import { FilterComponent } from './components/filter/filter.component';

@NgModule({
    declarations: [ProductListComponent, FilterProductPipe, FilterComponent],
    imports: [CommonModule],
    providers: [
        {
            provide: PRODUCT_SERVICE_TOKEN,
            useClass: PRODUCT_SERVICE_TYPE
        }
    ],
    exports: [ProductListComponent]
})
export class ProductsModule {

}