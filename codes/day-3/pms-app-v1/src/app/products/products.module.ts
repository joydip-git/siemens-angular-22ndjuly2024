import { NgModule } from "@angular/core";
import { ProductListComponent } from "./components/product-list/product-list.component";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [ProductListComponent],
    imports: [CommonModule],
    providers: [],
    exports: [ProductListComponent]
})
export class ProductsModule {

}