import { Component, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Todo } from '../../../../models/todo';
import { Subscription } from 'rxjs';
import { TODO_SERVICE_TOKEN } from '../../../config/constants';
import { ServiceContract } from '../../services/servicecontract';

@Component({
  selector: 'app-update-todo',
  templateUrl: './update-todo.component.html',
  styleUrl: './update-todo.component.css'
})
export class UpdateTodoComponent {
  todo?: Todo;
  fetchComplete = false
  errorInfo = ''
  private sub?: Subscription;

  constructor(
    private route: ActivatedRoute,
    @Inject(TODO_SERVICE_TOKEN) private todoSvc: ServiceContract
  ) {
    console.log('update...');
  }
  ngOnDestroy() {
    this.sub?.unsubscribe();
  }
  ngOnInit() {
    const id = +this.route.snapshot.queryParams['id'];
    this.sub = this.todoSvc.getTodo(id).subscribe({
      next: (todoResp) => {
        this.todo = todoResp;
        this.errorInfo = ''
        this.fetchComplete = true
      },
      error: (err) => {
        this.todo = undefined;
        this.errorInfo = err.message
        this.fetchComplete = true
      }
    })
  }
}
