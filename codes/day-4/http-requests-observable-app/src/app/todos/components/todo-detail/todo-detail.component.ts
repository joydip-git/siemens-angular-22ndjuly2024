import { Component, Inject, Input, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { Todo } from '../../../../models/todo';
import { TODO_SERVICE_TOKEN } from '../../../config/constants';
import { ServiceContract } from '../../services/servicecontract';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrl: './todo-detail.component.css'
})
export class TodoDetailComponent implements OnChanges, OnDestroy {
  @Input('selectedTodoValue') selectedTodo = 0;
  todo: Todo | undefined;
  fetchComplete = false;
  errorInfo = ''
  private fetchSubsciption?: Subscription;

  constructor(@Inject(TODO_SERVICE_TOKEN) private todoSvc: ServiceContract) {
    console.log("in ctor: ", this.selectedTodo);
  }
  ngOnDestroy(): void {
    this.fetchSubsciption?.unsubscribe()
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("in changes: ", this.selectedTodo);
    this.fetchSubsciption = this.todoSvc
      .getTodo(this.selectedTodo)
      .subscribe({
        next: (todoResp) => {
          this.todo = todoResp
          this.errorInfo = ''
          this.fetchComplete = true
        },
        error: (err) => {
          this.todo = undefined
          this.errorInfo = err.message
          this.fetchComplete = true
        },
      })
  }
}
