import { Inject, Injectable } from '@angular/core';
import { ServiceContract } from './productservicecontract';
import { Product } from '../../../models/product';
import { Observable } from 'rxjs';
import { ApiResponse } from '../../../models/apiresponse';
import { HttpClient } from '@angular/common/http';
import { PRODUCT_API_URL_TOKEN } from '../../../config/constants';

@Injectable()
export class ProductService implements ServiceContract<Product> {
    constructor(
        private http: HttpClient,
        @Inject(PRODUCT_API_URL_TOKEN) private baseUrl: string
    ) {
    }
    getAll(): Observable<ApiResponse<Product[]>> {
        return this.http.get<ApiResponse<Product[]>>(this.baseUrl)
    }
    get(id: number): Observable<ApiResponse<Product>> {
        return this.http.get<ApiResponse<Product>>(`${this.baseUrl}/${id}`)
    }
    add(model: Product): Observable<ApiResponse<Product[]>> {
        return this.http.post<ApiResponse<Product[]>>(this.baseUrl, model)
    }
    update(id: number, model: Product): Observable<ApiResponse<Product[]>> {
        return this.http.put<ApiResponse<Product[]>>(`${this.baseUrl}/${id}`, model)
    }
    delete(id: number): Observable<ApiResponse<Product[]>> {
        return this.http.delete<ApiResponse<Product[]>>(`${this.baseUrl}/${id}`)
    }

}