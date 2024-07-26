import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { TODO_SERVICE_TOKEN } from '../../../config/constants';
import { ServiceContract } from '../../services/servicecontract';
import { Todo } from '../../../../models/todo';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

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

    constructor(
        @Inject(TODO_SERVICE_TOKEN) private todoService: ServiceContract,
        private router: Router
    ) {

    }

    goToDetailView(e: Event, id: number) {
        e.preventDefault();
        this.router.navigate(['/todos/view', id])
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
    updateSelection(selectedValue: number) {
        console.log(selectedValue);
        this.selectedOption = selectedValue;
    }
}