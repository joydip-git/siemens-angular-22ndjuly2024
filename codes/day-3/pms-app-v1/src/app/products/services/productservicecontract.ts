import { Product } from "../../../models/product";

export interface ProductServiceContract {
    getProducts(): Product[];
}