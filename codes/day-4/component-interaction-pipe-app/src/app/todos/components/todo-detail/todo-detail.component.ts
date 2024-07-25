import { Component, Inject, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Todo } from '../../../../models/todo';
import { TODO_SERVICE_TOKEN } from '../../../config/constants';
import { ServiceContract } from '../../services/servicecontract';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrl: './todo-detail.component.css'
})
export class TodoDetailComponent implements OnChanges, OnInit, OnDestroy {
  @Input('selectedTodoValue') selectedTodo = 0;
  todo: Todo | undefined;

  constructor(@Inject(TODO_SERVICE_TOKEN) private todoSvc: ServiceContract) {
    console.log("in ctor: ", this.selectedTodo);
  }
  ngOnDestroy(): void {
    console.log('in destroy');
  }
  ngOnInit(): void {
    console.log("in init: ", this.selectedTodo);
    //console.log(this.todoSvc.getTodo(this.selectedTodo))
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("in changes: ", this.selectedTodo);
    this.todo = this.todoSvc.getTodo(this.selectedTodo)
  }
}
