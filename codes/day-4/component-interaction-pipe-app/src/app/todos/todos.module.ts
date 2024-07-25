import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TODO_SERVICE_CLASS, TODO_SERVICE_TOKEN } from '../config/constants';
import { TodoSortPipe } from './pipes/todo-sort.pipe';

@NgModule({
    imports: [CommonModule],
    exports: [TodoListComponent],
    declarations: [TodoListComponent, TodoSortPipe],
    providers: [
        {
            provide: TODO_SERVICE_TOKEN,
            useClass: TODO_SERVICE_CLASS
        }
    ],
})
export class TodosModule { }
