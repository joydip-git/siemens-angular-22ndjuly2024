import { Component } from '@angular/core';
import { Todo } from '../../../../models/todo';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css'
})
export class AddTodoComponent {
  /*
  todo: Todo = {
    id: 0,
    title: '',
    userId: 0,
    completed: false
  }
  submitData() {
    console.log(this.todo);
  }
  */
  //idCtrl = new FormControl(0, Validators.required)
  // addForm = new FormGroup({
  //   id: new FormControl(0, Validators.required),
  //   userId: new FormControl(0, Validators.required),
  //   title: new FormControl('', [Validators.required, Validators.email]),
  //   completed: new FormControl(false)
  // })
  addForm: FormGroup;

  constructor(private builder: FormBuilder) {
    this.addForm = this.builder.group({
      id: [0, Validators.required],
      userId: [0, Validators.required],
      title: ['', [Validators.required, Validators.email]],
      completed: [false]
    })
  }
  submitData() {
    console.log(this.addForm);
  }
  get id() {
    return this.addForm.get('id')
  }
  get userId() {
    return this.addForm.controls['userId']
  }
  get title() {
    return this.addForm.get('title')
  }
}
