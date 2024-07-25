import { Component, Inject, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { TODO_SERVICE_TOKEN } from '../../../config/constants';
import { ServiceContract } from '../../services/servicecontract';
import { Todo } from '../../../../models/todo';
import { TodoDetailComponent } from '../todo-detail/todo-detail.component';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrl: './todo-list.component.css'
})

export class TodoListComponent implements OnInit, OnDestroy {
    todos: Todo[] | undefined;
    fetchComplete = false;
    errorInfo = ''
    private fetchSubsciption?: Subscription;

    selectedOption = 0;
    selectedTodoId = 0;


    constructor(@Inject(TODO_SERVICE_TOKEN) private todoService: ServiceContract) {
        //this.todos = this.todoService.getTodos()
    }
    ngOnDestroy(): void {
        this.fetchSubsciption?.unsubscribe()
    }
    private fetchData() {
        const obs = this.todoService.getTodos()
        this.fetchSubsciption = obs.subscribe({
            next: (todosResp) => {
                this.todos = todosResp.slice(0, 5)
                this.errorInfo = ''
                this.fetchComplete = true
            },
            error: (err) => {
                this.todos = undefined
                this.errorInfo = err.message
                this.fetchComplete = true
            },
            complete: () => {
                //this.fetchSubsciption?.unsubscribe()
            }
        })
    }
    ngOnInit(): void {
        this.fetchData()
    }

    // deleteHandler() {
    //     this.todoService.deleteTodo(1).subscribe({
    //         next: () => { },
    //         error: () => { },
    //         complete: () => {
    //             this.fetchData()
    //         }
    //     })
    // }
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