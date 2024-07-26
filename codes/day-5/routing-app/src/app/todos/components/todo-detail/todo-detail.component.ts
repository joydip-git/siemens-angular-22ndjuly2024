import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { Todo } from '../../../../models/todo';
import { TODO_SERVICE_TOKEN } from '../../../config/constants';
import { ServiceContract } from '../../services/servicecontract';
import { Subscription } from 'rxjs';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';

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

  constructor(
    @Inject(TODO_SERVICE_TOKEN) private todoSvc: ServiceContract,
    private currentRoute: ActivatedRoute,
    private router: Router
  ) {

  }

  goToEdit(id: number = 0) {
    console.log(id);
    if (id > 0) {
      this.router.navigate(
        ['/todos/edit'],
        { queryParams: { id: id } }
      )
    }
  }
  ngOnDestroy(): void {
    this.fetchSubsciption?.unsubscribe()
  }
  ngOnInit(): void {

    /*
    this.currentRoute.params.subscribe(
      (p) => {
        const id = +p['id']
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
      })
    */
    const snapshot: ActivatedRouteSnapshot = this.currentRoute.snapshot
    const id = Number(snapshot.params['id'])

    this.fetchSubsciption = this.todoSvc
      .getTodo(id)
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
