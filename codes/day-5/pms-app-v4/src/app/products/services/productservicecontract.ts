import { Observable } from "rxjs";
import { ApiResponse } from "../../../models/apiresponse";

export interface ServiceContract<T> {
    getAll(): Observable<ApiResponse<T[]>>;
    get(id: number): Observable<ApiResponse<T>>;
    add(model: T): Observable<ApiResponse<T[]>>;
    update(id: number, model: T): Observable<ApiResponse<T[]>>;
    delete(id: number): Observable<ApiResponse<T[]>>;
}