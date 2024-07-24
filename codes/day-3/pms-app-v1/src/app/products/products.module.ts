import { NgModule } from "@angular/core";
import { ProductListComponent } from "./components/product-list/product-list.component";
import { CommonModule } from "@angular/common";
import { PRODUCT_SERVICE_TOKEN, PRODUCT_SERVICE_TYPE } from "../../config/constants";
//import { ProductService } from "./services/product.service";

@NgModule({
    declarations: [ProductListComponent],
    imports: [CommonModule],
    providers: [
        {
            provide: PRODUCT_SERVICE_TOKEN,
            useClass: PRODUCT_SERVICE_TYPE
            // useFactory: () => {
            //     return new ProductService()
            // }
            //useValue: new ProductService()
        }
    ],
    exports: [ProductListComponent]
})
export class ProductsModule {

}