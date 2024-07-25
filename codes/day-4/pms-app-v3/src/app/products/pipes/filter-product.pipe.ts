import { Pipe, PipeTransform } from "@angular/core";
import { Product } from "../../../models/product";

@Pipe({
    name: 'productfilter'
})
export class FilterProductPipe implements PipeTransform {
    transform(value: Product[], ...args: string[]): Product[] {
        return value.length > 0 && args && args[0] !== '' ?
            value.filter(p =>
                p.productName
                    .trim()
                    .toLocaleLowerCase()
                    .indexOf(args[0].trim().toLocaleLowerCase()) !== -1
            )
            : value;
    }
}