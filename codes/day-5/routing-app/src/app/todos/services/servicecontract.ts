import { Observable } from "rxjs";
import { Todo } from "../../../models/todo";

export interface ServiceContract {
    getTodos(): Observable<Todo[]>;
    getTodo(id: number): Observable<Todo>;
    addTodo(todo: Todo): Observable<Todo>;
    updatedTodo(id: number, todo: Todo): Observable<Todo>;
    deleteTodo(id: number): Observable<Todo>;
}