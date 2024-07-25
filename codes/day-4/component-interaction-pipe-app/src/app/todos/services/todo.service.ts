import { Injectable } from '@angular/core';
import { tododata } from '../../../data/todo-data';
import { ServiceContract } from './servicecontract';
import { Todo } from '../../../models/todo';

@Injectable()
export class TodoService implements ServiceContract {
    constructor() { }

    getTodo(id: number): Todo | undefined {
        return tododata.find(t => t.id === id)
    }

    getTodos() {
        return [...tododata]
    }
}