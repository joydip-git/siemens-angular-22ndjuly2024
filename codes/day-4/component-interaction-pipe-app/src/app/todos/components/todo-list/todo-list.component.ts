import { Component, Inject, ViewChild } from '@angular/core';
import { TODO_SERVICE_TOKEN } from '../../../config/constants';
import { ServiceContract } from '../../services/servicecontract';
import { Todo } from '../../../../models/todo';
import { TodoDetailComponent } from '../todo-detail/todo-detail.component';

@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrl: './todo-list.component.css'
})

export class TodoListComponent {
    todos: Todo[];
    selectedOption = 0;
    selectedTodoId = 0;

    constructor(@Inject(TODO_SERVICE_TOKEN) private todoService: ServiceContract) {
        this.todos = this.todoService.getTodos()
    }

    // updateSelection(e: Event) {
    //     const ddlSort = e.target as HTMLSelectElement;
    //     this.selectedOption = Number(ddlSort.options[ddlSort.selectedIndex].value)
    // }
    updateSelection(selectedValue: number) {
        console.log(selectedValue);
        this.selectedOption = selectedValue;
    }
    clickHandler() {
        console.log('click fired from app-filter, being handled in the parent');
    }
    updateSelectedTodoId(id: number) {
        this.selectedTodoId = id;
        // console.log(id);
        // console.log(this.selectedTodoId);
    }
}