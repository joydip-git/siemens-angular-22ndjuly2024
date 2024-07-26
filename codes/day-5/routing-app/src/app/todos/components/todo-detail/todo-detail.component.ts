import { Component, Inject, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Todo } from '../../../../models/todo';
import { TODO_SERVICE_TOKEN } from '../../../config/constants';
import { ServiceContract } from '../../services/servicecontract';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrl: './todo-detail.component.css'
})
export class TodoDetailComponent implements OnInit, OnDestroy {
  todo: Todo | undefined;
  fetchComplete = false;
  errorInfo = ''
  private fetchSubsciption?: Subscription;

  constructor(@Inject(TODO_SERVICE_TOKEN) private todoSvc: ServiceContract) {

  }
  ngOnDestroy(): void {
    this.fetchSubsciption?.unsubscribe()
  }
  ngOnInit(): void {
    this.fetchSubsciption = this.todoSvc
      .getTodo(1)
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
