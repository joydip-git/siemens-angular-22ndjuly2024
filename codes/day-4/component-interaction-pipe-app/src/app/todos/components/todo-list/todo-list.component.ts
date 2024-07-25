import { Component, Inject } from '@angular/core';
import { TODO_SERVICE_TOKEN } from '../../../config/constants';
import { ServiceContract } from '../../services/servicecontract';
import { Todo } from '../../../../models/todo';

@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrl: './todo-list.component.css'
})

export class TodoListComponent {
    todos: Todo[];
    selectedOption = 0;

    constructor(@Inject(TODO_SERVICE_TOKEN) private todoService: ServiceContract) {
        this.todos = this.todoService.getTodos()
    }

    updateSelection(e: Event) {
        const ddlSort = e.target as HTMLSelectElement;
        this.selectedOption = Number(ddlSort.options[ddlSort.selectedIndex].value)
    }

}