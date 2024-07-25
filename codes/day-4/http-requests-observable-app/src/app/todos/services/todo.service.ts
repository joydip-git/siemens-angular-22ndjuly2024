import { Injectable } from '@angular/core';
import { ServiceContract } from './servicecontract';
import { Todo } from '../../../models/todo';
import { HttpClient } from '@angular/common/http';
import { TODO_BASE_URL } from '../../config/constants';
import { map, Observable } from 'rxjs';

@Injectable()
export class TodoService implements ServiceContract {
    constructor(private http: HttpClient) { }
    addTodo(todo: Todo): Observable<Todo> {
        return this.http.post<Todo>(TODO_BASE_URL, todo)
    }
    updatedTodo(id: number, todo: Todo): Observable<Todo> {
        return this.http.put<Todo>(`${TODO_BASE_URL}/${id}`, todo)
    }
    deleteTodo(id: number): Observable<Todo> {
        return this.http.delete<Todo>(`${TODO_BASE_URL}/${id}`)
    }

    getTodo(id: number): Observable<Todo> {
        return this.http.get<Todo>(`${TODO_BASE_URL}/${id}`)
    }

    getTodos(): Observable<Todo[]> {
        const obs: Observable<Object> = this.http.get(TODO_BASE_URL)
        const todoArrayObs: Observable<Todo[]> = obs.pipe(
            map(
                (jsonArray: any) => {
                    return jsonArray.map(
                        (obj: any): Todo => {
                            return {
                                id: obj.id,
                                userId: obj.userId,
                                title: obj.title,
                                completed: obj.completed
                            }
                        }
                    )
                }
            )
        )

        return todoArrayObs
    }
}