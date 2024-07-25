import { Injectable } from '@angular/core';
import { tododata } from '../../../data/todo-data';
import { ServiceContract } from './servicecontract';

@Injectable()
export class TodoService implements ServiceContract {
    constructor() { }

    getTodos() {
        return [...tododata]
    }
}