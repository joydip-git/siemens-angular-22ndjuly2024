import { Injectable } from '@angular/core';
import { ProductServiceContract } from './productservicecontract';
import { Product } from '../../../models/product';
import { productRecords } from '../../../data/productrecords';

@Injectable()
export class ProductService implements ProductServiceContract {
    constructor() { }
    getProducts(): Product[] {
        return [...productRecords]
    }
}