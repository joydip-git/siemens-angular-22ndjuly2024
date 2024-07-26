import { Component, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Todo } from '../../../../models/todo';
import { Subscription } from 'rxjs';
import { TODO_SERVICE_TOKEN } from '../../../config/constants';
import { ServiceContract } from '../../services/servicecontract';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

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
  updateFrm?: FormGroup;

  constructor(
    private route: ActivatedRoute,
    @Inject(TODO_SERVICE_TOKEN) private todoSvc: ServiceContract,
    private builder: FormBuilder
  ) {

  }

  submitData(ngFrm: NgForm) {
    //console.log(<Todo>ngFrm.form.value);
    //console.log(ngFrm.form);
    //console.log(this.todo);
    //console.log(this.updateFrm?.value);
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
      },
      complete: () => {
        // this.updateFrm = this.builder.group({
        //   id: [this.todo?.id, Validators.required],
        //   userId: [this.todo?.userId, Validators.required],
        //   title: [this.todo?.title, [Validators.required, Validators.email]],
        //   completed: [this.todo?.completed]
        // })
      }
    })
  }
  // get id() {
  //   return this.updateForm.get('id')
  // }
  // get userId() {
  //   return this.updateForm.controls['userId']
  // }
  // get title() {
  //   return this.updateForm.get('title')
  // }
}
